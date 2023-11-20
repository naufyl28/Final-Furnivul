import React from "react";
import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { NavLink } from "react-router-dom";

const Register = () => {
  return (
    <section className=" dark:bg-gray-900 pt-8 h-[100%] justify-center bg-background bg-no-repeat bg-cover bg-center">
      <div className="justify-center py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:gap-8 ">
        <div className="mt-3 pt-2 mb-5">
          <div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800 mt-8 pt-8 justify-center">
            <div className="flex gap-4 mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white text-center justify-center">
              <img src="../assets/logo-login.svg" alt="" />
            </div>
            <form className="" action="#">
              <div>
                <Label
                  htmlFor="name"
                  className="block mb-2 text-3xl font-bold text-gray-900 dark:text-white justify-center"
                >
                  Sign Up
                </Label>
                <Label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-4"
                >
                  Your name
                </Label>
                <TextInput
                  id="name"
                  placeholder="Name"
                  className="input-field"
                  required
                />
              </div>
              <div>
                <Label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white mt-4"
                >
                  Email address
                </Label>
                <TextInput
                  id="email"
                  placeholder="name@mail.com"
                  className="input-field"
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

              <div className="flex items-start mt-4 mb-4">
                <Checkbox
                  id="remember"
                  aria-describedby="remember"
                  name="remember"
                  type="checkbox"
                  className="checkbox-field"
                  required
                />
                <Label htmlFor="remember" className="ml-2 text-sm">
                  Remember this device
                </Label>
                &nbsp;
                <a
                  href="#"
                  className="ml-auto text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                >
                  Lost Password?
                </a>
              </div>
              <Button type="submit" id="btn-submit" className="submit-button">
                Register
              </Button>
              <div className="text-sm mt-3 font-medium text-gray-900 dark:text-white gap-1">
                Have an account?
                <a
                  href="../login/login.html"
                  className="text-blue-600 hover:underline dark:text-blue-500"
                >
                  <NavLink to={"/login"}>Login</NavLink>
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
