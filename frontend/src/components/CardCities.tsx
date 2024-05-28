import { Card, CardFooter, Image } from "@nextui-org/react";

const CardCities = (props:any) => {
    return (
        <>
            <Card
                isFooterBlurred
                radius="lg"
                className="border-none w-48"
            >
                <Image
                    alt="Woman listing to music"
                    className="object-cover"
                    height={200}
                    src={props.src}
                    width={200}
                />

                <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-48 h-10 shadow-small ml-1 z-10">
                    <p className="text-tiny text-white/80">{props.text}</p>
                </CardFooter>
            </Card>
        </>
    )
}

export default CardCities