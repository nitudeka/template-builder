import { useState, useRef, useEffect } from 'react'
import { useDrop } from 'react-dnd'
import { v4 as uuidv4 } from 'uuid';
import nodes from './Nodes'
import Sidebar from './Sidebar'

const Builder = () => {
  const printContainer = useRef(null)
  const [hasDropped, setHasDropped] = useState(false)
  const [hasDroppedOnChild, setHasDroppedOnChild] = useState(false)
  const [layout, setLayout] = useState([ ]);
  const [selectedField, setSelectedField] = useState(null);

  const [{ isOver, isOverCurrent }, drop] = useDrop(
    () => ({
      accept: ['ticket', 'info'],
      drop(item, monitor) {
        const didDrop = monitor.didDrop()
        if (didDrop) {
          return
        }
        setHasDropped(true)
        setHasDroppedOnChild(didDrop)
	
	const offset = monitor.getClientOffset();
	handleDrop({...item, children: [], id: uuidv4() }, offset.x, offset.y);
      },
      collect: (monitor) => ({
        isOver: monitor.isOver(),
        isOverCurrent: monitor.isOver({ shallow: true }),
      }),
    }),
    [setHasDropped, handleDrop, setHasDroppedOnChild],
  )

  const onPrint = () => {
    const printContent = printContainer.current.innerHTML;
    const originalContent = document.body.innerHTML;

    document.body.innerHTML = printContent;

    window.print();
    localStorage.setItem('savedTemplate', JSON.stringify(layout))

    document.body.innerHTML = originalContent;
    window.location.reload();
  }

  const handleUpdateChild = (children, nodeData) => {
    setLayout(prevLayout => {
      const update = [...prevLayout]
      const nodeIndx = update.findIndex(l => l.item.id === nodeData.id)
      update[nodeIndx].children = children

      return update
    })
  }

  function handleDrop(item, x, y) {
    setLayout((prevLayout) => {
      return prevLayout.concat({ item, x, y, children: [] })
    });
  };

  useEffect(() => {
    const cachedData = localStorage.getItem('savedTemplate')
    if (cachedData) {
      setLayout(JSON.parse(cachedData))
    }
  }, [])

  return (
    <div className="builder h-screen w-screen flex">
      <div className="bg-gray-100 flex-grow flex items-center justify-center w-full">
	<div ref={printContainer}>
	  <div ref={drop} className={[isOverCurrent ? "bg-blue-100" : "bg-white", "p-2 shadow-sm flex flex-col gap-2 border border-solid a4-div overflow-hidden"].join(" ")}>
	    {layout.map(({item, children}, i) => {
	      const node = nodes[item.component]
	      const NodeComponent = node.component
	      return <NodeComponent key={i} handleUpdateChild={(children) => handleUpdateChild(children, item)} nodeData={{...item, children}} setSelectedField={setSelectedField} />
	    })}
	  </div>
	</div>
      </div>
      <div className="min-w-96 w-2/6">
	<Sidebar selectedField={selectedField} layout={layout} setLayout={setLayout} setSelectedField={setSelectedField} onPrint={onPrint} />
      </div>
    </div>
  )
}

export default Builder
