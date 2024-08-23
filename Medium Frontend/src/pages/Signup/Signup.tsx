
import Quote from "../../components/AuthCompo/Quote"
import AuthCommon from "../../components/AuthCompo/AuthCommon"


const Signup = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div>
        <AuthCommon type="signup" />
      </div>
      <div className=" hidden lg:block">
        <Quote />
      </div>
    </div>
  )
}

export default Signup