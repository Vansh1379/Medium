import AuthCommon from "../../components/AuthCompo/AuthCommon"
import Quote from "../../components/AuthCompo/Quote"

const SignIn = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div>
        <AuthCommon type="signin" />
      </div>
      <div className=" hidden lg:block">
        <Quote />
      </div>
    </div>
  )
}

export default SignIn