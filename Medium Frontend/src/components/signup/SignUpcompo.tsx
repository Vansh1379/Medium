import { Link } from "react-router-dom"
import LabledInput from "./LabledInput"


const SignUpcompo = () => {
  
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
            <LabledInput label="username" placeholder="vansh Kalra" onchange={(e) => {
              console.log(e);
            }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpcompo