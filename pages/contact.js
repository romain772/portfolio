import { useState } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {errorClassname} from '../utils/helpers'
import Title from '../components/Title'
import LinkedIn from "../components/svg/Linkedin";
import Link from 'next/link'

export default function Contact(){
    const [submitted, setSubmitted] = useState(false)
    function submitForm(data,e){
        e.preventDefault()
        toast.warn("Message en cours d'envoi...",{
            position: toast.POSITION.TOP_CENTER,
            autoClose: 1500,
        })
        let maildata = {
            name : data.name,
            email : data.email,
            message : data.message
        }
        fetch('/api/contact', {
            method: 'POST',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(maildata)
          }).then((res) => {
                if (res.status === 200) {
                    console.log(res)
                    setSubmitted(true)
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
    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required('Merci d\'indiquer votre nom.'),
        message: Yup.string()
            .required('Merci de laisser un message.')
            .min(10, 'Votre message doit contenir au moins 10 caractères.'),
        email: Yup.string()
            .required('Merci de renseigner votre adresse Email.')
            .email('Le format de l\'adresse Email est invalide.'),
    })
    const formOptions = { resolver: yupResolver(validationSchema) };
    const { register, handleSubmit, reset, formState: { errors } } = useForm(formOptions);
    function onSubmit(data,e) {
        submitForm(data,e)
    }
    return(
        <>
            <ToastContainer/>
            <Title title="Contact"></Title>
            <section className="p-10 min-h-[90vh] w-[80%] m-auto">
                <h1 className="text-2xl text-center pb-6 underline">Contactez moi : </h1>
                <div className="grid grid-cols-2">
                    <div>
                        <ul className="pt-8">
                            <li className="flex items-end my-8">
                                <h3 className="text-xl">- Sur LinkedIn : </h3>
                                <Link href="https://www.linkedin.com/in/romain-breuil">
                                    <a target="blank" className="ml-6" >
                                        <LinkedIn color="fill-cyan-800" hoverColor="hover:fill-red-600"/>
                                    </a>
                                </Link>
                            </li>    
                            <li className="flex items-end my-8">
                                <h3 className="text-xl">- Par Email : </h3>
                                <a href="mailto:romain.breuil@gmx.com" className="ml-6 transition-150 text-gray-600 hover:text-red-600 hover:text-xl" >
                                    romain.breuil@gmx.com
                                </a>
                            </li>     
                            <li className="flex items-end my-8">
                            <h3 className="text-xl">- A l aide du formulaire de contact</h3>
                            </li>                               
                        </ul>
                    </div>
                    <div>
                        <form className="contactform max-w-[650px] m-auto" onSubmit={handleSubmit(onSubmit)}>
                            <div className="flex flex-col my-5">
                                <label htmlFor="name" className="py-2">Nom :</label>
                                <input type="text" {...register("name")} name="name" className="appearance-none bg-transparent border-b border-gray-700 text-gray-700 mr-3 focus:outline-none my-2 p-2"/>
                                {errors.name&&<span className={errorClassname}>{errors.name.message}</span>}
                            </div>
                            <div className="flex flex-col my-5">
                                <label htmlFor="message" className="py-2">Message : </label>
                                <textarea  type='text' {...register("message")} name="message" className="appearance-none bg-transparent border h-[100px] border-gray-700 w-full text-gray-700 mr-3 focus:outline-none p-2 resize rounded-md"/>
                                {errors.message&&<span className={errorClassname}>{errors.message.message}</span>}
                            </div>
                            <div className="flex flex-col my-5">
                                <label htmlFor="email" className="py-2">Email : </label>
                                <input type="text" {...register("email")} name={"email"} className="appearance-none bg-transparent border-b border-gray-700 text-gray-700 mr-3 focus:outline-none my-2 p-2"/>
                                {errors.email&&<p className={errorClassname}>{errors.email.message}</p>}
                            </div>
                            <div className="my-10 flex justify-around">
                                <button className="bg-orange-500 hover:bg-transparent hover:border-orange-600 text-ml border-2 hover:shadow-lg duration-200 text-white hover:text-orange-600 py-2 px-3 rounded-lg" type="submit">
                                    Envoyer
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}