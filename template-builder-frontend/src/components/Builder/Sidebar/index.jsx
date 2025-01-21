import nodes from './Nodes'

const nodeComponents = Object.keys(nodes).map(k => nodes[k])

const Sidebar = () => {
  return (
    <div className="w-full h-full border-l border-solid px-4 py-2">
      <h3 className="border-b border-solid pb-2 font-semibold text-gray-800">Layout components</h3>
      <div className="flex flex-col gap-3 mt-3">
	{nodeComponents.map((Node, i) => (
	  <div key={i} className="shadow cursor-pointer rounded-md p-3 bg-white">
	    <Node.component />
	  </div>
	))}
      </div>
    </div>
  )
}

export default Sidebar
