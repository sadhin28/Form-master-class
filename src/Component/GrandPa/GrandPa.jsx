
import { createContext } from "react";
import Anti from "../Anti/Anti";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
export const assetContext = createContext('gold')
const GrandPa = () => {
     const asset = 'Diamond Ring'
   
    return (
        <div className=" border-2 m-3 p-10 rounded-2xl">
            <h1 className="mb-10 font-black text-3xl text-center">GrandPapa</h1>
           
            <assetContext.Provider value="gold">
                 <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-3 justify-center">
         
             <Dad asset={asset}></Dad>
             <Uncle asset={asset}></Uncle>
             <Anti></Anti>
            </div>
            </assetContext.Provider>
            
        </div>
    );
};

export default GrandPa;
