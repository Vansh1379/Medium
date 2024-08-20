
import Quote from "../../components/signup/Quote"
import SignUpcompo from "../../components/signup/SignUpcompo"


const Signup = () => {
  return (
    <div className="grid grid-cols-2">
      <div>
        <SignUpcompo />
      </div> 
      <div className=" invisible md:visible">
        <Quote />
      </div>
    </div>
  )
}

export default Signup