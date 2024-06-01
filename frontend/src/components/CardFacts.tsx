import { Card, CardHeader, CardBody, CardFooter, Avatar } from "@nextui-org/react";

const CardFacts = (props: any) => {
    return (
        <Card className="bg-black max-w-[340px] h-[160px] z-50">
            <CardHeader className="justify-between">
                <div className="flex gap-5">
                    <Avatar isBordered radius="full" size="md" src="https://nextui.org/avatars/avatar-1.png" />
                    <div className="flex flex-col gap-1 items-start justify-center">
                        <h4 className="text-small font-semibold leading-none text-default-600">{props.name}</h4>
                        <h5 className="text-small tracking-tight text-default-400">{props.handle}</h5>
                    </div>
                </div>
            </CardHeader>
            <CardBody className="px-3 py-0 text-small text-default-400">
                <p>
                    {props.content}
                </p>
            </CardBody>
            <CardFooter className="gap-3">
                <div className="flex gap-1">
                    <p className="font-semibold text-default-400 text-small">{props.following}</p>
                    <p className=" text-default-400 text-small">Following</p>
                </div>
                <div className="flex gap-1">
                    <p className="font-semibold text-default-400 text-small">{props.follower}</p>
                    <p className="text-default-400 text-small">Followers</p>
                </div>
            </CardFooter>
        </Card>
    )
}

export default CardFacts