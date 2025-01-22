import { useState, useEffect } from 'react'
import nodes from './Nodes'

const nodeComponents = Object.keys(nodes).map(k => nodes[k])

const initialValues = {
  title: '',
  value: ''
}

const Sidebar = ({ selectedField, setSelectedField, setLayout }) => {
  const [fieldValues, setFieldValues] = useState(initialValues)
  const SelectedNode = selectedField ? nodes[selectedField?.component]?.configComponent : null

  const onCancelEdit = () => {
    setSelectedField(null)
  }

  const onSave = () => {
    setLayout(prevLayout => {
      const update = [...prevLayout]
      const pNodeIndx = update.findIndex(l => l.item.id === selectedField.parentNodeId)
      const nodeIndx = update[pNodeIndx].children.findIndex(n => n.item.id === selectedField.id)
      const updatedChildren = [...update[pNodeIndx].children]
      updatedChildren[nodeIndx].item = Object.assign(updatedChildren[nodeIndx].item, fieldValues)

      update[pNodeIndx].children = updatedChildren

      setFieldValues(initialValues)
      setSelectedField(null)
      return update
    })
  }

  useEffect(() => {
    if (selectedField) setFieldValues(selectedField)
  }, [selectedField])

  return (
    <div className='w-full flex flex-col justify-between h-full border-l border-solid px-4 py-2'>
      <div>
	<h3 className='border-b border-solid pb-2 font-semibold text-gray-800'>
	  {selectedField ? 'Component config' : 'Layout components'}
	</h3>
	{selectedField && SelectedNode ? 
	  <div className='flex flex-col gap-3 mt-3'>
	    <div className='shadow-sm rounded-md p-3 bg-gray-50'>
	      <SelectedNode fieldValues={fieldValues} setFieldValues={setFieldValues} configData={selectedField} setLayout={setLayout} />
	    </div>
	  </div> 
	  : 
	  <div className='flex flex-col gap-3 mt-3'>
	    {nodeComponents.map((Node, i) => (
	      <div key={i} className='shadow cursor-pointer rounded-md p-3 bg-white'>
		<Node.component />
	      </div>
	    ))}
	  </div>
	}
      </div>
      {selectedField && <div className='flex items-center gap-2'>
	<button onClick={onSave}>Save</button>
	<button onClick={onCancelEdit}>Cancel</button>
      </div>}
    </div>
  )
}

export default Sidebar
