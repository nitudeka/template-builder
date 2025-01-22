import TicketNode from './TicketNode'
import TicketFieldNode from './TicketField'
import InfoNode from './InfoNode'

const nodes = {
  ['ticket-layout']: {
    component: TicketNode,
    type: 'ticket-layout'
  },
  ['info-layout']: {
    component: InfoNode,
    type: 'info-layout'
  },
  ['ticket-field']: {
    component: TicketFieldNode,
    type: 'ticket-field'
  }
}

export default nodes
