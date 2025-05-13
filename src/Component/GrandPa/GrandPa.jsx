import Anti from "../Anti/Anti";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";

const GrandPa = () => {
    return (
        <div className=" border-2 m-3 p-10 rounded-2xl">
            <h1 className="mb-10">GrandPapa</h1>
            <div className="flex gap-3">
         
             <Dad></Dad>
             <Uncle></Uncle>
             <Anti></Anti>
            </div>
        </div>
    );
};

export default GrandPa;