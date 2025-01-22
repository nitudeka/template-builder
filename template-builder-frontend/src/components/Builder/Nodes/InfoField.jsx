const InfoFieldNode = ({ setSelectedField, nodeData, parentComponentData }) => {
  const onClick = () => {
    setSelectedField({ ...nodeData, parentNodeId: parentComponentData.id})
  }

  return (
    <div onClick={onClick} className='w-full pr-1 pt-1'>
      <div className='flex flex-col text-2xs cursor-pointer'>
	<div dangerouslySetInnerHTML={{__html: nodeData.value || '<p>Enter some text here</p>'}}>
	</div>
      </div>
    </div>
  )
}

export default InfoFieldNode
