import CardFeatures from "./CardFeatures"

const Features = () => {

  const list = [
    {
      title: "Compare",
      img: "/featureCard.jpg",
      text: ""
    },
    {
      title: "Search",
      img: "/featureCard2.jpg",
      text: ""
    },
    {
      title: "Tracker",
      img: "/featureCard3.png",
      text: ""
    },
    {
      title: "Form",
      img: "/featureCard4.png",
      text: ""
    },

  ];

  return (
    <>
      <div className="flex flex-row justify-center items-center p-10 bg-[#F0F5F8]">
        <div className="w-2/5 p-4">
          <p className="text-4xl text-center text-[#002F49] font-bold">Strategies to maintain a competitive edge</p>
        </div>
        <div className="flex flex-row w-3/5">
          {list.map((item, index) => (
            <CardFeatures key={index} title={item.title} img={item.img} text={item.text} />
          ))}
        </div>
      </div>

    </>
  )
}

export default Features