import TicketNode from './Ticket'
import InfoNode from './Info'
import InfoFieldNode, { NodeConfig as InfoFieldNodeConfig } from './InfoField'
import TicketFieldNode, { NodeConfig as TicketFieldNodeConfig } from './TicketField'

const nodes = {
  ticket: { component: TicketNode, type: 'ticket' },
  'ticket-field': { component: TicketFieldNode, type: 'ticket-field', configComponent: TicketFieldNodeConfig },
  info: { component: InfoNode, type: 'info' },
  'info-field': { component: InfoFieldNode, type: 'info-field', configComponent: InfoFieldNodeConfig },
}

export default nodes
