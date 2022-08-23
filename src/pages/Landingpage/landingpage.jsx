import { async } from "@firebase/util";
import { useEffect } from "react";
import GoogleButton from "react-google-button";
import { useAuth } from "../../context/auth-context";

const Landingpage = () =>{
const { googleLogin, user } = useAuth();
const loginHandler = async() => {
try{
await googleLogin();
}catch(error){
console.log(error);
}
}

return(
<div>
    <GoogleButton onClick={loginHandler} />
</div>
)
}

export { Landingpage };