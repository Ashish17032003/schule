import CardTestimonial from "./CardTestimonial.tsx"
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

const Testimonial = () => {

    const cardData = [
        {
            name: "Hatching Dragons",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe quaerat nemo iste excepturi facilis, deleniti inventore eum quasi nisi. Iure quibusdam, omnis, provident earum eum eveniet temporibus placeat vitae quaerat incidunt error, mollitia doloremque commodi reprehenderit. Ex deleniti provident minus exercitationem facere excepturi, sapiente temporibus debitis asperiores earum porro molestias?",
            image: "Biscuits are more than just a tasty treat for our children - they actually play a significant role in their early years stages and developments, offering various benefits.",
        },
        {
            name: "Hatching Dragons",
            text: "@DragonNurseries",
            image: "Biscuits are more than just a tasty treat for our children - they actually play a significant role in their early years stages and developments, offering various benefits.",
        },
        {
            name: "Hatching Dragons",
            text: "@DragonNurseries",
            image: "Biscuits are more than just a tasty treat for our children - they actually play a significant role in their early years stages and developments, offering various benefits.",
        }
    ]

    return (
        <div className="mt-20 py-6 bg-yellow-950">
            <Carousel responsive={responsive} showDots={true} infinite={true} autoPlay={true} autoPlaySpeed={2000}>
                {cardData.map((card, index) => (
                    <div key={index} className="flex flex-row justify-center items-center w-screen my-10">
                        <CardTestimonial name={card.name} text={card.text} image={card.image}/>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}

export default Testimonial