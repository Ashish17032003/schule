import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

const CardFeatures = ({title, img, text}: {title: string, img: string, text: string}) => {

  return (
    <div className=" gap-2 grid grid-cols-2 sm:grid-cols-4">  
        <Card className="w-44" shadow="sm" isPressable>
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={title}
              className="w-full object-cover h-[140px]"
              src={img}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{title}</b>
            <p className="text-default-500">{text}</p>
          </CardFooter>
        </Card>
    </div>
  )
}

export default CardFeatures