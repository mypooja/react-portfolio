import React,{useState} from 'react'
import "./style.css"

export default function Contact() {
    const [formState,setFormState] = useState({
        name:"",
        email:"",
        message:""
    })
    const [errState,setErrState] = useState("")
    const validateEmail = email=> {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
      }
    const changeHandle = ({target})=>{
        const{name,value} = target;
        setFormState({
            ...formState,
            [name]:value
        })
    }

    const blurHandle = ({target})=>{
        const{name,value} = target;
        if(!value.length){
            setErrState(`${name} can't be blank`)
        }else if(name==="email"){
            if(!validateEmail(value)){
                setErrState("invalid email")
            }
        } else {
            setErrState("")
        }
        
    }
    return (
        <div className="Contact">
            <h1>Contact</h1>
            <form>
                <div>
                    <label htmlFor="name-input">Name:</label>
                    <input onBlur={blurHandle} value={formState.name} onChange={changeHandle} name="name" placeholder="name" id="name-input" type="text" />
                </div>
                <div>
                    <label htmlFor="email-input">Email:</label>
                    <input onBlur={blurHandle} value={formState.email} onChange={changeHandle} name="email" placeholder="email" id="email-input" type="text" />
                </div>
                <div>
                    <label htmlFor="message-input">Message:</label>
                    <textarea onBlur={blurHandle} value={formState.message} onChange={changeHandle} rows = "10" name="message" placeholder="message" id="message-input"></textarea>
                </div>
                <div>
                    <button disabled={errState||!formState.name ||!formState.email || !formState.message || !validateEmail(formState.email)}>Submit</button>
                </div>
            </form>
            {errState?<p>{errState}</p>:null}
        </div>
    )
}
