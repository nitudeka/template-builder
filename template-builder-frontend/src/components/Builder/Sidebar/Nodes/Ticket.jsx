import { useDrag } from 'react-dnd'
import ImgTicket from '../../../../assets/png/ticket.png'

const TicketNode = () => {
  const [, drag] = useDrag(() => ({
    type: "ticket",
    item: {
      component: "ticket-layout",
    } 
  }))

  return (
    <div ref={drag} className='flex items-center justify-start gap-4'>
      <img src={ImgTicket} className='w-8' /> 
      <span className='font-semibold text-gray-800'>Ticket</span>
    </div>
  )
}

export default TicketNode
