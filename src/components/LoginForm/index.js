import "./index.css"


export default function LooginForm({onchange_email, onchange_password}){
    return(
        <div>
            <form>
                <input type="email" placeholder="email" id="email" onChange={onchange_email}/>
                <input type="password" placeholder="password" id="password" onChange={onchange_password}/>
                <button>login</button>
            </form>
        </div>
    )
}