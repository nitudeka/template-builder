import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react'
import { useDrop } from 'react-dnd'

export const NodeContainer = ({ acceptTypes, nodeChildren, updateChild, greedy, focusBgClass, containerClass, render }) => {
  const [layout, setLayout] = useState([ ]);

  const [{ isOver, isOverCurrent }, drop] = useDrop(
    () => ({
      accept: acceptTypes || '',
      drop(item, monitor) {
        const didDrop = monitor.didDrop()
        if (didDrop && !greedy) {
          return
        }

	const offset = monitor.getClientOffset();
	handleDrop({...item, id: uuidv4() }, offset.x, offset.y);
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        isOverCurrent: monitor.isOver({ shallow: true }),
      }),
    }),
    [greedy],
  )

  function handleDrop(item, x, y) {
    setLayout((prevLayout) => {
      const update = prevLayout.concat({ item, x, y })
      updateChild && updateChild(update)
      return update
    });
  };

  useEffect(() => {
    setLayout(nodeChildren)
  }, [nodeChildren])

  return (
    <div ref={drop} className={[isOverCurrent || (isOver && greedy) ? focusBgClass : '', containerClass || ''].join(' ')}>
      {render && render(layout)}
    </div>
  )
}

