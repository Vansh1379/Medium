import { Link } from "react-router-dom"
import LabledInput from "./LabledInput"
import { SignUpInput } from "@vanshkalra1379/medium-common"
import { useState } from "react"
import axios from "axios"
import { BACKEND_URL } from "../../config"
import { useNavigate } from "react-router-dom"


const AuthCommon = ({ type }: { type: "signup" | "signin" }) => {

  const navigate = useNavigate();

  const [postInputs, setPostInputs] = useState<SignUpInput>({
    name: "",
    username: "",
    password: ""
  });

  const sendRequest = async () => {
    try {
      const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`, postInputs);
      const jwt = response.data;
      localStorage.setItem("token", jwt);
      navigate("/blogs");
    }
    catch (e) {
      console.error(`This is error while signup in ract compo authcommon ${e}`);
    }
  }

  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <div>
          <div className="text-3xl font-bold font-serif">
            Create an account
          </div>
          <div className="text-slate-400 flex justify-center font-serif ">
            {type === "signin" ? "Don't have an account?" : "Already have an account?"}
            <Link to={type === "signin" ? "/signup" : "/signin"} className="pl-2 underline"> {type === "signin" ? "Signup" : "Login"}</Link>
          </div>
          <div className="pt-5">
            {type === "signup" ? <LabledInput label="username" placeholder="vansh Kalra" onchange={(e) => {
              setPostInputs(c => ({
                ...c,
                name: e.target.value,
              }))

            }} /> : null}
            <LabledInput label="email" placeholder="vanshkalra1379@gmail.com" onchange={(e) => {
              setPostInputs(c => ({
                ...c,
                username: e.target.value,
              }))
            }} />
            <LabledInput label="password" type={"password"} placeholder="123456" onchange={(e) => {
              setPostInputs(c => ({
                ...c,
                password: e.target.value,
              }))
            }} />
          </div>
          <div className="mt-4">
            <button onClick={sendRequest} type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 w-full">{type === "signup" ? "signup" : "Login"}</button>

          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthCommon