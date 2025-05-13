import Cousin from "../Cousin/Cousin";

const Uncle = () => {
    return (
        <div  className=" text-center border border-amber-500 rounded-2xl p-2">
            <h1 className="mt-3 font-black">Uncle</h1>
            <div className="grid grid-cols-2 gap-2">
                <Cousin name={'Rafsan'}></Cousin>
                <Cousin name={'Rafiya'}></Cousin>
            </div>
        </div>
    );
};

export default Uncle;