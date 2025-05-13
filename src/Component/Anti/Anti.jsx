
import Cousin from "../Cousin/Cousin";

const Anti = () => {
   
    return (
        <div  className="text-center border border-amber-500 rounded-2xl p-2">
            <h1 className="font-black mt-3">Anti</h1>
            <div className=" text-center gap-3 grid grid-cols-2">
                <Cousin  name={'Rubayet'}></Cousin>
                <Cousin name={'Rubaiya'}></Cousin>
            </div>
        </div>
    );
};

export default Anti;