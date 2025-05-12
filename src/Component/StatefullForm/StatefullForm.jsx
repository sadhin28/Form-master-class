import React, { useState } from 'react';

const StatefullForm = () => {
    const [email,setemail]=useState(null);
    const [password,setpassword]=useState(null);
    const [error,seterror]=useState('')
    const hancelSubmit=e=>{
        e.preventDefault()
        if(password.length <6){
            seterror('Password must be 6 character or longer')
        }else{
            seterror('')
        }
        console.log(email)
        console.log(password)
        
    }
    const handelEmail=e=>{
        e.preventDefault();
        setemail(e.target.value)
    }
    const handelPassword = e=>{
        e.preventDefault();
        setpassword(e.target.value)
    }

    return (
        <div>
            <div className=" mx-auto card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
              
                               <form onSubmit={hancelSubmit} className="fieldset">
                                <label className="label">Name</label>
                                <input name="name" type="text" className="input" placeholder="Name" />
                                <label className="label">Email</label>
                                <input onChange={handelEmail} name="email" type="email" className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input onChange={handelPassword } name="password" type="password" className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                                {
                                    error && <p className='text-center'>{error}</p>
                                }
                               </form>
                            
                        </div>
                    </div>
        </div>
    );
};

export default StatefullForm;