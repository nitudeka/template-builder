import nodes from '.'
import { NodeContainer } from './Container'
import ImgLogo from '../../../assets/png/star.png'
import ImgBarcode from '../../../assets/png/barcode.png'

const TicketNode = () => {
  return (
    <NodeContainer focusBgClass='bg-red-500' acceptTypes={['header']} 
      render={() => (
	<div className='p-2 pb-0'>
	  <div className='border border-solid p-1'>
	    <div className='flex items-center justify-between'>
	      <div className='flex items-center gap-2'>
		<img src={ImgLogo} alt='logo' className='w-8' />
		<span className='text-xs text-gray-400 border-solid pl-2 py-1 border-l'>A star airlines member</span>
	      </div>
	      <img src={ImgBarcode} alt='barcode' className='w-8 mr-2' />
	    </div>
	    <div className='flex items-start justify-start'>
	      <img src={ImgBarcode} alt='barcode' className='transform rotate-90 w-8 mt-3' />
	      <div className='ml-2 flex-grow'>
	      <span className='text-xs text-gray-500'>Boarding Pass</span>
	      <NodeContainer focusBgClass='bg-green-100' acceptTypes={['ticket-field']}
		render={(layout) => (
		  <div className='w-full min-h-28 grid-gap-0 grid grid-cols-6 grid-flow-row'>
		    {layout.map(({item}, i) => {
		      const node = nodes[item.component]
		      const NodeComponent = node.component
		      
		      return <NodeComponent key={i} />
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
