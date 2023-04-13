import HomeBackground from "@layouts/Home/HomeBackground";
import HomeServices from "@layouts/Home/HomeServices";
import CallUsNow from "@layouts/Home/CallUsNow";
import SecurityFirst from "@layouts/Home/SecurityFirst";
import LatestFeatures from "@layouts/Home/LatestFeatures";

import "./Home.scss";
import ControlPanel from "@layouts/Home/ControlPanel";

const Home = () => {
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
