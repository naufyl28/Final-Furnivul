import React from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { Form } from "react-router-dom";

const Login = () => {
  return (
    <section className="bg-cyan-800 dark:bg-gray-900 pt-8 h-[100%] justify-center bg-background bg-no-repeat bg-cover bg-center">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:gap-8 lg:gap-16 justify-center mt-8">
        <div className="mt-8 pt-8">
          <div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800 mt-8 pt-8 justify-center">
            <div className="flex gap-4 mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center justify-center">
              <img src="../assets/logo-login.svg" alt="" />
              <Label
                htmlFor="name"
                className="block mb-2 text-3xl font-bold text-gray-900 dark:text-white justify-center"
              >
                Log In
              </Label>
            </div>
            <Form id="login-form" className="mt-8 space-y-6" action="#">
              <div>
                <Label
                  htmlFor="email1"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white justify-center"
                >
                  Your email
                </Label>
                <TextInput
                  id="email1"
                  type="email"
                  placeholder="name@flowbite.com"
                  required
                />
              </div>
              <div>
                <Label
                  htmlFor="password1"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-4"
                >
                  Your password
                </Label>
                <TextInput id="password1" type="password" required />
              </div>
              <div className="flex items-start mt-2">
                <Checkbox id="remember" />
                <Label
                  htmlFor="remember"
                  className="ml-3 text-sm font-medium text-gray-500 dark:text-gray-400"
                >
                  Remember this device
                </Label>
                <a
                  href="#"
                  className="ml-auto text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Lost Password?
                </a>
              </div>
              <Button
                id="btn-login"
                type="submit"
                className="mx-auto mt-4 mb-4 text-base bg-blue-900 font-medium text-center text-white rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Login
              </Button>
              <div className="text-sm font-medium text-gray-900 dark:text-white">
                Not registered yet?
                <a
                  href="../register/register.html"
                  className="text-blue-600 hover:underline dark:text-blue-500"
                >
                  {" "}
                  Create account
                </a>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
