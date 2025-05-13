import { useContext } from "react";
import { assetContext } from "../GrandPa/GrandPa";

const SpecialPerson = ({asset}) => {
    const gift = useContext(assetContext)
    return (
        <div>
            <h1>Special Person</h1>
            <p>Has:{asset}</p>
            <p>Also Has :{gift}</p>
        </div>
    );
};

export default SpecialPerson;