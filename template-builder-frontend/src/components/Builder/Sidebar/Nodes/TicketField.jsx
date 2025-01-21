import { useDrag } from 'react-dnd'

const TicketFieldNode = () => {
  const [, drag] = useDrag(() => ({ type: "ticket-field", item: { component: "ticket-field" } }))

  return (
    <div ref={drag}>
    ticket field node
    </div>
  )
}

export default TicketFieldNode
