import { async } from "@firebase/util";
import { useEffect } from "react";
import GoogleButton from "react-google-button";
import { useAuth } from "../../context/auth-context";
import { useNavigate } from "react-router-dom";

const Landingpage = () =>{
const { googleLogin, user } = useAuth();
const navigate = useNavigate();
const loginHandler = async() => {
try{
await googleLogin();
}catch(error){
console.log(error);
}
}

useEffect(() => {
if(user!== null){
navigate("/homepage")
}
}, [user]);
return(
<div>
    <GoogleButton onClick={loginHandler} />
</div>
)
}

export { Landingpage };