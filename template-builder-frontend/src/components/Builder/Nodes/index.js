import TicketNode from './TicketNode'
import TicketFieldNode from './TicketField'
import InfoNode from './InfoNode'
import InfoFieldNode from './InfoField'

const nodes = {
  ['ticket-layout']: {
    component: TicketNode,
    type: 'ticket-layout'
  },
  ['info-layout']: {
    component: InfoNode,
    type: 'info-layout'
  },
  ['info-field']: {
    component: InfoFieldNode,
    type: 'info-field'
  },
  ['ticket-field']: {
    component: TicketFieldNode,
    type: 'ticket-field'
  }
}

export default nodes
