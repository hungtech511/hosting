import { ListAnimationIcon } from "@utils/constant";
import ItemBackground from "@components/ItemBackground";

import "./AnimationImage.scss";

const AnimationImage = () => {
    return (
        <div className="inner-column">
            {
                ListAnimationIcon.map((item, index) => {
                    return (
                        <ItemBackground key={index} className={item?.className} imageSrc={item?.imageSrc}></ItemBackground>
                    )
                })
            }
            <div className="image">
                <img src="public/image/AnimationImage/people.png" alt="user" />
            </div>
        </div>
    )
}

export default AnimationImage;