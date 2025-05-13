
import { createContext, useState } from "react";
import Anti from "../Anti/Anti";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
export const assetContext = createContext('gold')
export const MoneyContext =createContext(1000);
const GrandPa = () => {
     const asset = 'Diamond Ring'
     const [money,setmoney] = useState(1000)
    return (
        <div className=" border-2 m-3 p-10 rounded-2xl">
            <h1 className="mb-10 font-black text-3xl text-center">GrandPapa</h1>
            <p className="text-center mb-5 font-black">Net Money: {money}</p>
           <MoneyContext.Provider value={[money,setmoney]}>
              <assetContext.Provider value="gold">
            <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-3 justify-center">
             <Dad asset={asset}></Dad>
             <Uncle asset={asset}></Uncle>
             <Anti></Anti>
            </div>
            </assetContext.Provider>
           </MoneyContext.Provider>
        </div>
    );
};

export default GrandPa;
