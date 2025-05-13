
import SpecialPerson from "../SpecialPerson/SpecialPerson";


const Cousin = ({name,asset}) => {
   
    return (
        <div className="">
            
            <p className="border border-green-500 rounded-2xl p-2">{name}</p>
            <section>
                {
                    asset && <SpecialPerson asset={asset}></SpecialPerson>
                }
                
                
            </section>
       </div>
    );
};

export default Cousin;