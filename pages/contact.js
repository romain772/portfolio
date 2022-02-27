import Title from '../components/Title'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { validateInput  } from '../utils/helpers';

export default function Contact(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [submitted, setSubmitted] = useState(false)
    const [inputError , setInputError ] = useState(false)
    const inputDatas = [
        {data : 'name' , type : "text" , label : "Nom"},
        {data : 'message' , type : "textarea" , label : "Message"},
        {data : 'email' , type : "email" , label : "Email"},
    ]
    function handleChange(e){
        const data = e.target.name
        switch (data) {
            case 'name': {
                setName(e.target.value)   
                e.target.value.length>0?setInputError(true):null
            }
                break
            case 'email': setEmail(e.target.value)   
                break  
            case 'message': setMessage(e.target.value)     
                break
        }
    }
    function abortForm(e){
        e.preventDefault()
        document.querySelector('.contactform').reset()
    }
    function validate(e){
        e.preventDefault()
        validateInput(document.querySelector('.contactform'))
    }
    function handleSubmit(e){
        e.preventDefault()
        if(name===''||message===''||email==="") {
            alert('erreur')
            return
        }
        console.log('en cours d\'envoi')
        let data = {
            name,
            email,
            message
        }
        fetch('/api/contact', {
            method: 'POST',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          }).then((res) => {
                toast.warn("Message en cours d'envoi...",{
                    position: toast.POSITION.TOP_CENTER,
                    autoClose: 1500,
                })
                if (res.status === 200) {
                    console.log(res)
                    setSubmitted(true)
                    setName('')
                    setEmail('')
                    setMessage('')
                    setTimeout(() => {
                        toast.success("Message envoyé!",{
                            position: toast.POSITION.TOP_CENTER,
                            autoClose: 3000,
                        })
                        document.querySelector('.contactform').reset()
                    }, 2000);
                }else{
                    
                    setSubmitted(true)
                    setTimeout(() => {
                        toast.error("Une erreur est survenue, veuillez réessayer",{
                            position: toast.POSITION.TOP_CENTER,
                            autoClose: 5000,
                            hideProgressBar: true,
                        })
                    },2000)
                }
            })
        }
    return(
        <>
            <ToastContainer/>
            <Title title="Contact"></Title>
            <section className="p-10 min-h-[90vh] w-[80%] m-auto">
                <h1 className="text-2xl text-center pb-6 underline">Contact</h1>
                <form className="contactform w-[80%] m-auto">
                    {inputDatas.map((input)=>{
                        if(input.type==='textarea'){
                            return (                            
                                <div key={input.data} className="flex flex-col my-5">
                                    <label htmlFor={input.data} className="my-5">{input.label}</label>
                                    <textarea onChange={(e)=>{handleChange(e)}} name={input.data} id={input.data} className="appearance-none bg-transparent border-b border-gray-700 w-full text-gray-700 mr-3 focus:outline-none p-none" type='text'/>
                                </div>
                            )
                        }
                        return (                            
                            <div key={input.data} className="flex flex-col my-5">
                                <label htmlFor={input.data} className="my-5">{input.label}</label>
                                <input onChange={(e)=>{handleChange(e)}} name={input.data} id={input.data} className="appearance-none bg-transparent border-b border-gray-700 text-gray-700 mr-3 focus:outline-none" type={input.type}/>
                            </div>
                        )
                    })}
                    <div className="my-10 flex justify-around">
                        <button onClick={(e)=>{handleSubmit(e)}} className="bg-orange-500 hover:bg-transparent hover:border-orange-600 text-ml border-2 hover:shadow-lg duration-200 text-white hover:text-orange-600 py-2 px-3 rounded-lg" type="button">
                            Envoyer
                        </button>
                        <button onClick={(e)=>{abortForm(e)}} className="hover:bg-orange-500 hover:bg-transparent border-orange-600 hover:border-transparent text-ml border-2 hover:shadow-lg duration-200 hover:text-white text-orange-600 py-2 px-3 rounded-lg" type="button">
                            Annuler
                        </button>
                    </div>
                </form>
            </section>
        </>
    )
}