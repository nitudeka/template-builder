import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Builder from './components/Builder'

function App() {
  return (
    <>
      <DndProvider backend={HTML5Backend}>
	<Builder />
      </DndProvider>
    </>
  )
}

export default App
