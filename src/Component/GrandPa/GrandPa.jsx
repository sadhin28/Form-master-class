import Anti from "../Anti/Anti";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";

const GrandPa = () => {
     const asset = 'Diamond Ring'
    return (
        <div className=" border-2 m-3 p-10 rounded-2xl">
            <h1 className="mb-10 font-black text-3xl text-center">GrandPapa</h1>
            <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-3 justify-center">
         
             <Dad asset={asset}></Dad>
             <Uncle asset={asset}></Uncle>
             <Anti></Anti>
            </div>
        </div>
    );
};

export default GrandPa;