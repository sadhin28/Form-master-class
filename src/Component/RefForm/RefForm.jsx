import { useEffect, useRef } from "react";

const RefForm = () => {
    const nameRef =useRef(null);
    const emailRef=useRef(null);
    const passwordRef=useRef(null);
    useEffect(()=>{
        nameRef.current.focus()
    },[])
    const hnadelSubmit =e=>{
        e.preventDefault()
        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);

    }
    return (
        <div className=" mx-auto card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
              
                               <form onSubmit={hnadelSubmit} className="fieldset">
                                <label className="label">Name</label>
                                <input ref={nameRef} name="name" type="text" className="input" placeholder="Name" />
                                <label className="label">Email</label>
                                <input ref={emailRef} name="email" type="email" className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input ref={passwordRef}  name="password" type="password" className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                               
                               </form>
                            
                        </div>
        </div>
       
                    
    );
};

export default RefForm;