import nodes from './Nodes'

const nodeComponents = Object.keys(nodes).map(k => nodes[k])

const Sidebar = () => {
  return (
    <div className="w-full h-full bg-green-500">
      {nodeComponents.map((Node, i) => (
	<div key={i}>
	  <Node.component />
	</div>
      ))}
    </div>
  )
}

export default Sidebar
