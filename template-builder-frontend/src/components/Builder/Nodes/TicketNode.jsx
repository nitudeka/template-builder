import nodes from '.'
import { NodeContainer } from './Container'
import ImgLogo from '../../../assets/png/star.png'
import ImgBarcode from '../../../assets/png/barcode.png'

const TicketNode = ({ setSelectedField, nodeData, handleUpdateChild }) => {
  return (
    <NodeContainer focusBgClass='bg-red-500' containerClass='h-1/4' 
      render={() => (
	<div className='h-full'>
	  <div className='border overflow-hidden h-full border-solid p-1'>
	    <div className='flex items-center justify-between'>
	      <div className='flex items-center gap-2'>
		<img src={ImgLogo} alt='logo' className='w-8' />
		<span className='text-xs text-gray-400 border-solid pl-2 py-1 border-l'>A star airlines member</span>
	      </div>
	      <img src={ImgBarcode} alt='barcode' className='w-8 mr-2' />
	    </div>
	    <div className='flex items-start justify-start h-full'>
	      <img src={ImgBarcode} alt='barcode' className='transform rotate-90 w-8 mt-3' />
	      <div className='ml-2 flex-grow h-full'>
		<span className='text-xs text-gray-500'>Boarding Pass</span>
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
	  </div>
	)}>
    </NodeContainer>
  )
}

export default TicketNode
