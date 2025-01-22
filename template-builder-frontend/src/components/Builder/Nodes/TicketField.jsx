const TicketFieldNode = ({ setSelectedField, nodeData, parentComponentData }) => {
  const onClick = () => {
    setSelectedField({ ...nodeData, parentNodeId: parentComponentData.id})
  }

  return (
    <div onClick={onClick} className='pr-1 pt-1'>
      <div className='flex flex-col text-2xs'>
	<span className='text-2xs text-gray-600'>
	{nodeData.title || 'Title'}
	</span>
	<span className='text-2xs font-semibold text-gray-800'>
	  {nodeData?.value?.value || 'Value'}
	</span>
      </div>
    </div>
  )
}

export default TicketFieldNode
