import { useState } from 'react'
import { useDrop } from 'react-dnd'

export const NodeContainer = ({ acceptTypes, greedy, focusBgClass, render }) => {
  const [layout, setLayout] = useState([ ]);
  const [hasDropped, setHasDropped] = useState(false)
  const [hasDroppedOnChild, setHasDroppedOnChild] = useState(false)

  const [{ isOver, isOverCurrent }, drop] = useDrop(
    () => ({
      accept: acceptTypes || '',
      drop(item, monitor) {
        const didDrop = monitor.didDrop()
        if (didDrop && !greedy) {
          return
        }
        setHasDropped(true)
        setHasDroppedOnChild(didDrop)

	const offset = monitor.getClientOffset();
	handleDrop(item, offset.x, offset.y);
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        isOverCurrent: monitor.isOver({ shallow: true }),
      }),
    }),
    [greedy, setHasDropped, setHasDroppedOnChild],
  )

  function handleDrop(item, x, y) {
    setLayout((prevLayout) => {
      return prevLayout.concat({ item, x, y })
    });
  };

  return (
    <div ref={drop} className={isOverCurrent || (isOver && greedy) ? focusBgClass : ''}>
      {render && render(layout)}
    </div>
  )
}

