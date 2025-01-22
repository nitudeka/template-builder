import nodes from '.'
import { NodeContainer } from './Container'

const InfoNode = ({ setSelectedField, nodeData, handleUpdateChild }) => {
  return (
    <div className='h-2/4'>
      <NodeContainer focusBgClass='bg-green-100' containerClass='h-full' acceptTypes={['ticket-field', 'info-field']}
	nodeChildren={nodeData?.children || []}
	updateChild={handleUpdateChild}
	render={(layout) => (
	  <div className='h-full'>
	    <div className='border overflow-hidden h-full border-solid px-2 py-1'>
	      <div className='h-full w-full flex flex-col gap-1'>
		{layout.map(({item}, i) => {
		  const node = nodes[item.component]
		  const NodeComponent = node.component
		  
		  return <NodeComponent parentComponentData={nodeData} nodeData={item} setSelectedField={setSelectedField} key={i} />
		})}
	      </div>
	    </div>
	  </div>
	)}>
      </NodeContainer>
    </div>
  )
}

export default InfoNode
