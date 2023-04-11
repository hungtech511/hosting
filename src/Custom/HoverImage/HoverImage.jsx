import { useEffect,useRef } from "react";


const HoverImage = ({children}) =>{

    const parentRef = useRef(null);

    useEffect(() => {
		parentRef.current.addEventListener("mousemove", function (event) {
			parallaxed(event);
		});

		function parallaxed(e) {
			let amountMovedX = (e.clientX * -0.3 / 8);
			let amountMovedY = (e.clientY * -0.3 / 8);
			// let x = document.getElementsByClassName("parallaxed");
			// let i;
			// for (i = 0; i < x.length; i++) {
			//   x[i].style.transform='translate(' + amountMovedX + 'px,' + amountMovedY + 'px)'
			// }
			parentRef.current.querySelector(".image-wrapper").style.transform = 'translate(' + amountMovedX + 'px,' + amountMovedY + 'px)';
	  }
	}, [parentRef])

    return(
        <div ref={parentRef}>{children}</div>
    )
}
export default HoverImage;