import TicketNode from './TicketNode'
import TicketFieldNode from './TicketField'

const nodes = {
  ['ticket-layout']: {
    component: TicketNode,
    type: 'ticket-layout'
  },
  ['ticket-field']: {
    component: TicketFieldNode,
    type: 'ticket-field'
  }
}

export default nodes
