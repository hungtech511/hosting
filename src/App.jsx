import { PageRoute } from "@routers/PageRoute"
import "./App.scss"
import Provider from "./Provider"
import { useEffect } from "react";

function App() {

  useEffect(() => {
		let body = document.getElementsByTagName("BODY")[0];

		body.addEventListener("mousemove", function (event) {
			parallaxed(event);

		});

		function parallaxed(e) {
			let amountMovedX = (e.clientX * -0.3 / 8);
			let amountMovedY = (e.clientY * -0.3 / 8);
			let x = document.getElementsByClassName("parallaxed");
			let i;
			for (i = 0; i < x.length; i++) {
			  x[i].style.transform='translate(' + amountMovedX + 'px,' + amountMovedY + 'px)'
			}
	  }
	}, [])

  return (
    <Provider>
      <PageRoute />
    </Provider>
  )
}

export default App
