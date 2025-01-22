import { useDrag } from 'react-dnd'
import ImgInfo from '../../../../assets/png/info.png'

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
