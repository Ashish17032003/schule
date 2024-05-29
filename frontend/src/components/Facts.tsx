import CardFacts from "./CardFacts"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Facts = () => {

    const cardData = [
        {
            name: "Hatching Dragons",
            handle: "@DragonNurseries",
            content: "Biscuits are more than just a tasty treat for our children - they actually play a significant role in their early years stages and developments, offering various benefits.",
            following: '3k',
            follower: '1k'
        },
        {
            name: "Hatching Dragons",
            handle: "@DragonNurseries",
            content: "Young children sleep so much due to learning, rather than rest.",
            following: '3k',
            follower: '1k'
        },
        {
            name: "Hatching Dragons",
            handle: "@DragonNurseries",
            content: "Young children learn different languages incredibly well.",
            following: '3k',
            follower: '1k'
        }
    ]

    return (
        <div className="my-20 py-6 bg-yellow-950">
            <Carousel responsive={responsive} showDots={true} infinite={true} autoPlay={true} autoPlaySpeed={2000}>
                {cardData.map((card, index) => (
                    <div key={index} className="flex flex-row justify-center items-center w-screen my-10">
                        <CardFacts name={card.name} handle={card.handle} content={card.content} follower={card.follower} following={card.following} />
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default Facts