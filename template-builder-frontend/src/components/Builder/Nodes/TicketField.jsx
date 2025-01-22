const TicketFieldNode = ({ setSelectedField, nodeData, parentComponentData }) => {
  const onClick = () => {
    setSelectedField({ ...nodeData, parentNodeId: parentComponentData.id})
  }

  return (
    <div onClick={onClick} className='h-full pr-1 pt-1'>
      <div className='hover:bg-gray-200 rounded-sm h-full flex flex-col text-2xs cursor-pointer'>
	<span className='text-2xs text-gray-600'>
	{nodeData.title}
	</span>
	<span className='text-2xs font-semibold text-gray-800'>
	  {nodeData?.value?.value}
	</span>
      </div>
    </div>
  )
}

export default TicketFieldNode
