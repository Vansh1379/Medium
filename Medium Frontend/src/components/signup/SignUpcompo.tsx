import { Link } from "react-router-dom"
import LabledInput from "./LabledInput"
import { SignUpInput } from "@vanshkalra1379/medium-common"
import { useState } from "react"


const SignUpcompo = () => {

  const [postInputs, setPostInputs] = useState<SignUpInput>({
    name: "",
    username: "",
    password: ""
  });

  return (
    <div className="h-screen flex justify-center flex-col">
      <div className="flex justify-center">
        <div>
          <div className="text-3xl font-bold font-serif">
            Create an account
          </div>
          <div className="text-slate-400 flex justify-center font-serif ">
            Already have an account?
            <Link to={"/singin"} className="pl-2 underline"> Login</Link>
          </div>
          <div>
            <LabledInput label="name" placeholder="vansh Kalra" onchange={(e) => {
              setPostInputs(c=>({
                ...c,
                name: e.target.value,
              }))
            }} />
             <LabledInput label="username" placeholder="vanshkalra1379@gmail.com" onchange={(e) => {
              setPostInputs(c=>({
                ...c,
                name: e.target.value,
              }))
            }} />
             <LabledInput label="password" placeholder="123456" onchange={(e) => {
              setPostInputs(c=>({
                ...c,
                name: e.target.value,
              }))
            }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpcompo