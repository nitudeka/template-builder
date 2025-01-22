import nodes from '.'
import { NodeContainer } from './Container'
import ImgLogo from '../../../assets/png/star.png'
import ImgBarcode from '../../../assets/png/barcode.png'

const InfoNode = ({ setSelectedField, nodeData, handleUpdateChild }) => {
  return (
    <NodeContainer focusBgClass='bg-red-500' containerClass='h-2/4' acceptTypes={['header']} 
      render={() => (
	<div className='h-full'>
	  <div className='border overflow-hidden h-full border-solid p-1'>
	    <div className='flex items-start justify-start h-full'>
	      <NodeContainer focusBgClass='bg-green-100' containerClass='h-full' acceptTypes={['ticket-field']}
		nodeChildren={nodeData?.children || []}
		updateChild={handleUpdateChild}
		render={(layout) => (
		  <div className='w-full grid-gap-0 grid grid-rows-3 grid-cols-6'>
		    {layout.map(({item}, i) => {
		      const node = nodes[item.component]
		      const NodeComponent = node.component
		      
		      return <NodeComponent parentComponentData={nodeData} nodeData={item} setSelectedField={setSelectedField} key={i} />
		    })}
		  </div>
		)}>
		</NodeContainer>
	      </div>
	    </div>
	  </div>
	)}>
    </NodeContainer>
  )
}

export default InfoNode
