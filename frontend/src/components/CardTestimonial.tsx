import { Card, CardBody, Image } from "@nextui-org/react";

export default function CardTestimonial({name, image, text}: {name: string, image: string, text: string}) {
  return (
    <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px]"
    >
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <div className="relative col-span-6 md:col-span-4">
            <Image
              alt="Album cover"
              className="object-cover"
              height={200}
              shadow="md"
              src="https://nextui.org/images/album-cover.png"
              width="100%"
            />
          </div>

          <div className="flex flex-col col-span-6 md:col-span-8 max-h-[200px] overflow-y-auto">
            <div className="flex justify-between items-start ">
              <div className="flex flex-col gap-2 p-1">
                <h1 className="text-2xl font-medium mt-2">{name}</h1>
                <h3 className="font-semibold text-foreground/90">{text}</h3>
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
