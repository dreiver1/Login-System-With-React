import "./index.css"


export default function Button({text, onclick, type="button"}){
    return(
        <div>
                <button type={type} onClick={onclick}>{text}</button>

        </div>
    )
}