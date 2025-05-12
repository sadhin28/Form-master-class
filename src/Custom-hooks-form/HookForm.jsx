import useInputState from "./hooks/useInputState";

const HookForm = () => {
    const [name,handleNameChange] = useInputState('Rojoni')
    console.log('Form Data:',name)
    const handleSubmit = e=>{
        e.preventDefault()
    }
    return (
        <div>
             <div className=" mx-auto card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
              
                               <form onSubmit={handleSubmit} className="fieldset">
                                <label className="label">Name</label>
                                <input value={name} onChange={handleNameChange} name="name" type="text" className="input" placeholder="Name" />
                                <label className="label">Email</label>
                                <input  name="email" type="email" className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input  name="password" type="password" className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                                
                               </form>
                            
                        </div>
                    </div>
        </div>
    );
};

export default HookForm;