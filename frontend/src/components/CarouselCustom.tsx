import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardCities from "./CardCities";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 3 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
    slidesToSlide: 2 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
    slidesToSlide: 1 // optional, default to 1.
  }
};

const cardData = [
  {
    src: '/delhiImg.jpg',
    text: 'Delhi'
  },
  {
    src: '/mumbaiImg.jpg',
    text: 'Mumbai'
  },
  {
    src: '/GurgaonImg.jpg',
    text: 'Gurgoan'
  },
  {
    src: '/NoidaImg.jpg',
    text: 'Noida'
  },
  {
    src: '/chennaiImg.jpg',
    text: 'Chennai'
  }
]
const CarouselCustom = () => {
  return (
    // bg-[url('/cities.jpg')]
    <div className="bg-slate-600 rounded-3xl p-5">

      <Carousel responsive={responsive}>
        {cardData.map((card, index) => (
          <CardCities key={index} src={card.src} text={card.text} />
        ))}
      </Carousel>
    </div>
  )
}

export default CarouselCustom