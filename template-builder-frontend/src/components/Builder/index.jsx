import { useState } from 'react'
import { useDrop } from 'react-dnd'
import nodes from './Nodes'
import Sidebar from './Sidebar'

const Builder = () => {
  const [hasDropped, setHasDropped] = useState(false)
  const [hasDroppedOnChild, setHasDroppedOnChild] = useState(false)
  const [layout, setLayout] = useState([ ]);

  const [{ isOver, isOverCurrent }, drop] = useDrop(
    () => ({
      accept: "ticket",
      drop(item, monitor) {
        const didDrop = monitor.didDrop()
        if (didDrop) {
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
    [setHasDropped, handleDrop, setHasDroppedOnChild],
  )

  function handleDrop(item, x, y) {
    setLayout((prevLayout) => {
      return prevLayout.concat({ item, x, y })
    });
  };

  return (
    <div className="h-screen w-screen flex">
      <div className="flex-grow flex items-center justify-center w-full p-4">
	<div ref={drop} className={[isOverCurrent ? "bg-blue-100" : "bg-white", "border border-solid a4-div overflow-hidden"].join(" ")}>
	  {layout.map(({item}, i) => {
	    const node = nodes[item.component]
	    const NodeComponent = node.component
	    
	    return <NodeComponent key={i} />
	  })}
	</div>
      </div>
      <div className="w-96">
	<Sidebar />
      </div>
    </div>
  )
}

export default Builder
