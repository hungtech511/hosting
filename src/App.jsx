import { PageRoute } from "@routers/PageRoute"
import "./App.scss"
import Provider from "./Provider"

function App() {
  return (
    <Provider>
      <PageRoute />
    </Provider>
  )
}

export default App
