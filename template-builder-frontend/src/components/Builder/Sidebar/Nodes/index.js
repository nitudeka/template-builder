import TicketNode from './Ticket'
import InfoNode from './Info'
import TicketFieldNode from './TicketField'

const nodes = {
  ticket: { component: TicketNode, type: 'ticket' },
  info: { component: InfoNode, type: 'info' },
  'ticket-field': { component: TicketFieldNode, type: 'ticket-field' }
}

export default nodes
