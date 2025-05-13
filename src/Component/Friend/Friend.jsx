import { useContext } from "react";
import { assetContext } from "../GrandPa/GrandPa";

const Friend = () => {
    const gift = useContext(assetContext)
    return (
        <div className="">
            <h1>Friend</h1>
            <h2>{gift}</h2>
        </div>
    );
};

export default Friend;