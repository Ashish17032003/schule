import "react-multi-carousel/lib/styles.css";
import { Image } from "@nextui-org/image";

const City = () => {
  return (
    <>
      <Image
        isZoomed
        width={440}
        height={310}
        alt="NextUI Fruit Image with Zoom"
        src="/delhiImg.jpg"
      />
    </>
  );
};

export default City;
