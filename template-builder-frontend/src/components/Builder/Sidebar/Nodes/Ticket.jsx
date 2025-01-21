import { useDrag } from 'react-dnd'

const TicketNode = () => {
  const [, drag] = useDrag(() => ({ type: "ticket", item: { component: "ticket-layout" } }))

  return (
    <div ref={drag}>
    ticket node
    </div>
  )
}

export default TicketNode
