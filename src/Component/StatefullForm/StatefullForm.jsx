
const StatefullForm = () => {
   const  hancelSubmit =e=>{
      e.preventDefault()
   }
    return (
        <div>
           <div className=" my-50 mx-auto card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <h1  className="text-center mt-10 font-bold text-3xl">Sign In</h1>
                        <div className="card-body">
              
                               <form onSubmit={hancelSubmit}  className="fieldset">
                                   <label className="label">Name</label>
                                <input name="name" type="text" className="input" placeholder="Your name" />
                                   <label className="label">Email</label>
                                <input name="email" type="email" className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input name="password" type="password" className="input" placeholder="Password" />
                                <div><a className="link link-hover">Log-in</a></div>
                                <button className="btn btn-neutral mt-4">Login</button>
                               
                               </form>
                            
                        </div>
                    </div>
        </div>
    );
};

export default StatefullForm;