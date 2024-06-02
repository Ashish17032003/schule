import { Tabs, Tab, Input, Link, Button } from "@nextui-org/react";
import { useState } from "react";

const Register = () => {
  const [selected, setSelected] = useState("login");

  return (
    <>
      <div className="flex md:flex-row flex-col h-screen">
        <div className="md:block hidden p-10 w-1/2">
          <img src="/background/5.png" alt="Background" className="rounded-3xl w-full h-full object-cover" />
        </div>
        <div className="flex flex-col justify-center lg:w-1/2 h-screen lg:px-32 sm:px-8">
          <span className="text-center mb-4">Welcome to FormsDunia..!</span>
          {/* <div className="flex flex-col justify-center items-center"> */}
            <Tabs
              fullWidth
              size="md"
              aria-label="Tabs form"
              selectedKey={selected}
              onSelectionChange={setSelected}
            >
              <Tab key="login" title="Login">
                <form className="flex flex-col gap-4">
                  <Input className="rounded-2xl" isRequired label="Email" placeholder="Enter your email" type="email" />
                  <Input
                    isRequired
                    label="Password"
                    placeholder="Enter your password"
                    type="password"
                  />
                  <p className="text-center text-small">
                    Need to create an account?{" "}
                    <Link size="sm" onPress={() => setSelected("sign-up")}>
                      Sign up
                    </Link>
                  </p>
                  <div className="flex justify-end gap-2">
                    <Button fullWidth color="primary">
                      Login
                    </Button>
                  </div>
                </form>
              </Tab>
              <Tab key="sign-up" title="Sign up">
                <form className="flex flex-col gap-4 h-[300px]">
                  <Input isRequired label="Name" placeholder="Enter your name" type="text" />
                  <Input isRequired label="Email" placeholder="Enter your email" type="email" />
                  <Input
                    isRequired
                    label="Password"
                    placeholder="Enter your password"
                    type="password"
                  />
                  <p className="text-center text-small">
                    Already have an account?{" "}
                    <Link size="sm" onPress={() => setSelected("login")}>
                      Login
                    </Link>
                  </p>
                  <div className="flex justify-end gap-2">
                    <Button fullWidth color="primary">
                      Sign up
                    </Button>
                  </div>
                </form>
              </Tab>
            </Tabs>
          {/* </div> */}
        </div>
      </div>
    </>
  );
};

export default Register;
