import { Input } from "@nextui-org/react";
// import { SearchIcon } from "./SearchIcon";
import { Tabs, Tab } from "@nextui-org/react";
import { SearchIcon } from "./SearchIcon";
import { useState } from "react";
import CarouselCustom from "./CarouselCustom";

const Body = () => {
  
    const [text, setText] = useState("Day School")

  return (
    <>
      <div className="flex flex-row justify-center items-center m-5">
        <div className="w-[580px] h-[270px] px-8 rounded-2xl flex flex-col space-y-5 justify-center items-center bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg">
          <Tabs aria-label="Options">
            <Tab onClick={() => setText('Day School')} key="daySchool" title="Day School"></Tab>
            <Tab onClick={() => setText('Boarding School')} key="boardingSchool" title="Boarding School"></Tab>
            <Tab onClick={() => setText('Day Boarding School')} key="dayBoardingSchool" title="Day Boarding School"></Tab>
            <Tab onClick={() => setText('Play School')} key="playSchool" title="Play School"></Tab>
          </Tabs>
          <Input
            label="Search"
            isClearable
            radius="lg"
            classNames={{
              label: "text-black/50 dark:text-white/90",
              input: [
                "bg-transparent",
                "text-black/90 dark:text-white/90",
                "placeholder:text-default-700/50 dark:placeholder:text-white/60",
              ],
              innerWrapper: "bg-transparent",
              inputWrapper: [
                "shadow-xl",
                "bg-default-200/50",
                "dark:bg-default/60",
                "backdrop-blur-xl",
                "backdrop-saturate-200",
                "hover:bg-default-200/70",
                "dark:hover:bg-default/70",
                "group-data-[focus=true]:bg-default-200/50",
                "dark:group-data-[focus=true]:bg-default/60",
                "!cursor-text",
              ],
            }}
            placeholder= {text}
            startContent={
              <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
            }
          />
        </div>
      </div>

        <div className="m-10">
            <CarouselCustom/>
        </div>
    </>
  );
};

export default Body;
