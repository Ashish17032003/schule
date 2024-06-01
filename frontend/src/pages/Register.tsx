import {Tabs, Tab, Input, Link, Button, Card, CardBody} from "@nextui-org/react"
import { useState } from "react";

const Register = () => {

  const [selected, setSelected] = useState("login");

  return (
    <>
      <div className="flex h-screen">
        <div className="w-1/2 p-10">
          <img src="/background/1.png" alt="Background" className="w-full h-full object-cover rounded-3xl" />
        </div>
        <div className="w-1/2 flex flex-row items-center">
          <div className="flex flex-col w-full justify-center items-center">
            <div className="max-w-full w-[540px] h-[400px] ">
              <div className="overflow-hidden">
                <Tabs
                  fullWidth
                  size="md"
                  aria-label="Tabs form"
                  selectedKey={selected}
                  onSelectionChange={setSelected}
                >
                  <Tab key="login" title="Login">
                    <form className="flex flex-col gap-4">
                      <Input isRequired label="Email" placeholder="Enter your email" type="email" />
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
                      <div className="flex gap-2 justify-end">
                        <Button fullWidth color="primary">
                          Login
                        </Button>
                      </div>
                    </form>
                  </Tab>
                  <Tab key="sign-up" title="Sign up">
                    <form className="flex flex-col gap-4 h-[300px]">
                      <Input isRequired label="Name" placeholder="Enter your name" type="password" />
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
                      <div className="flex gap-2 justify-end">
                        <Button fullWidth color="primary">
                          Sign up
                        </Button>
                      </div>
                    </form>
                  </Tab>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
