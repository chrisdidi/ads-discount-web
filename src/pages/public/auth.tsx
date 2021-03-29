import React from "react";
import Button from "../../components/button/button";
import Input from "../../components/input/input";
import { LOCALSTORAGE_TOKEN } from "../../constants";
import useInput from "../../hooks/useInput";
import { isLoggedInVar } from "../../providers/apollo";

const Auth = () => {
  const email = useInput("");
  const password = useInput("");

  const onSignIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    isLoggedInVar(true);
    localStorage.setItem(LOCALSTORAGE_TOKEN, "fakeToken");
  };

  return (
    <div className=" w-screen min-h-screen flex justify-center items-center p-3 md:py-12 overflow-hidden bg-yellow-500">
      <div className=" max-w-screen-md w-full bg-white rounded-lg shadow-lg p-3 animate-slide-up-03-out">
        <h1 className=" font-bold text-gray-700 text-2xl mb-2">
          Ads Discount Demo ⭐
        </h1>
        <div className=" w-full md:flex">
          <div className=" w-full p-3 bg-yellow-100 rounded-md">
            <p className=" text-base text-yellow-800">
              <span className=" font-semibold text-lg">
                This demo assumes that:
              </span>
              <br />- This only part of a complete system.
              <br />- On 'Sign In' clicked, it assumes that proper
              authentication flow is handled properly
              <br />- The auth token is fake and should not be stored in local
              storage in a real working application.
              <br />- The Ads Accounts listed belongs to the signed in user.
            </p>
          </div>
          <form className=" pt-3 md:pt-0 px-3 w-full">
            <p className=" font-semibold text-gray-600 text-xl">Sign In</p>
            <div className=" w-full pb-3">
              <Input
                {...email}
                label="E-mail"
                placeholder="e.g. your@email.com"
                hint="Both the e-mail and password don't matter!"
              />
              <Input
                {...password}
                label="Password"
                placeholder="******"
                type="password"
                hint="Any value will allow you to log in!"
              />
            </div>
            <Button
              label="Sign In"
              onClick={onSignIn}
              disabled={email.value === "" && password.value === ""}
            />
          </form>
        </div>
      </div>
    </div>
  );
};
export default Auth;
