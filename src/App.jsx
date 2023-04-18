import { PageRoute } from "@routers/PageRoute"
import "./App.scss"
import Provider from "./Provider"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function App() {

  return (
    <Provider>
      <PageRoute />
    </Provider>
  )
}

export default App
