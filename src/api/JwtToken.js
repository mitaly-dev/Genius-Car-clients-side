import { useLocation, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"


export const accessToken=(email,navigation)=>{
   
            fetch(`https://genius-car-server-nu-opal.vercel.app/jwt`,{
                    method:'POST',
                    headers:{
                        'content-type':"application/json"
                    },
                    body:JSON.stringify({email:email})
                })
                .then(res=>res.json())
                .then(data=>{
                    localStorage.setItem("genius-token" ,data.token )
                    toast.success('Login successfull',{autoClose:1000})
                    navigation()
                })
                .catch(error=>console.log(error.message))
}