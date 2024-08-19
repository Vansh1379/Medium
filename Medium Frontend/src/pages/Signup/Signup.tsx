import Quote from "../../components/signup/quote"
import SignUpcompo from "../../components/signup/SignUpcompo"


const Signup = () => {
  return (
    <div className="grid grid-cols-2">
      <div>
        <SignUpcompo />
      </div>
      <div className="">
        <Quote />
      </div>
    </div>
  )
}

export default Signup