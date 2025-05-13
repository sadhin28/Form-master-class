
import { useContext } from "react";
import Cousin from "../Cousin/Cousin";
import { MoneyContext } from "../GrandPa/GrandPa";

const Anti = () => {
     const [money,setmoney] = useContext(MoneyContext)
    return (
        <div  className="text-center border border-amber-500 rounded-2xl p-2">
            <h1 className="font-black mt-3">Anti</h1>
            <div className=" text-center gap-3 grid grid-cols-2">
                <Cousin  name={'Rubayet'}></Cousin>
                <Cousin name={'Rubaiya'}></Cousin>
            </div>
            <p>Money:{money}</p>
            <button onClick={()=>setmoney(money+1000)} className="btn">Add 1000 taka</button>
        </div>
    );
};

export default Anti;