import { useDrag } from 'react-dnd'
import Editor from 'react-simple-wysiwyg';
import ImgInfo from '../../../../assets/png/info.png'

export const NodeConfig = ({ fieldValues, setFieldValues }) => {
  const onChange = (indx, value) => {
    const updatedData = {...fieldValues}
    updatedData.infoContenat[indx] = value
    setFieldValues(updatedData)
  }

  return (
    <div>
      {fieldValues.infoContent.map((info, i) => (
	<Editor value={info} key={i} onChange={({target}) => onChange(i, target.value)} />
      ))}
    </div>
  )
}

const InfoNode = () => {
  const [, drag] = useDrag(() => ({
    type: "info",
    item: {
      component: "info-layout",
    } 
  }))

  return (
    <div ref={drag} className='flex items-center justify-start gap-4'>
      <img src={ImgInfo} className='w-8' /> 
      <span className='font-semibold text-gray-800'>Info</span>
    </div>
  )
}

export default InfoNode
