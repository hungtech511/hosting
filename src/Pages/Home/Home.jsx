
import HomeBackground from "@layouts/Home/HomeBackground";
import HomeServices from "@layouts/Home/HomeServices";
import CallUsNow from "@layouts/Home/CallUsNow";
import SecurityFirst from "@layouts/Home/SecurityFirst";
import LatestFeatures from "@layouts/Home/LatestFeatures";

import "./Home.scss";
import ControlPanel from "@layouts/Home/ControlPanel";

const Home = () => {


const renderBackground = () => {
	return (
		<>
			{
				listBackgroundHomeImage.map((item, index) => {
					return (
						<ItemBackground key={item?.id} className={`icon-layer ${item?.className}`} imageSrc={item?.imageSrc} />
					)
				})
			}
		</>
	)
}

const Home = () => {
  const fonts = FontSizeTheme()
  const colors = ColorTheme()
	return (
		<>
			<HomeBackground background="backgroundHome"/>
			<HomeServices />
			<CallUsNow background="backgroundHome"/>
			<SecurityFirst/>
			<LatestFeatures background="backgroundHome"/>
			<ControlPanel/>
		</>
	);
};
export default Home;