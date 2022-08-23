import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Button from "../../components/Buttom"
import LooginForm from "../../components/LoginForm"
import useAuth from "../../HOOKS/useAuth"
import "./index.css"



export default function Singnin(){
    const navigate = useNavigate();
    const { singin } = useAuth();
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const addEmail = (e) => {return setEmail(e.target.value), setError(""); };
    const addPassword = (e) => {return setPassword(e.target.value), setError(""); };
        
    
    const handleLogin = ()=>{
        console.log("clicou " + email, password)
        if(!email && !password){
            setError('Preencha todos os campos')
            return;
        }

        const res = singin(email, password)

        if(res){
            setError(res)
            return console.log(res)
        }

        navigate("/home")
        return;
    }

    return(
        <div>
            <div className="Content">
                <h1>Singnin</h1>
                <LooginForm 
                onchange_email={addEmail}
                onchange_password={addPassword}
                />
                <Button  text={"login"} onclick={handleLogin}></Button>
            </div>
        </div>
    )
}