import { useContext } from "react";
import CardContext from "./CardContext";
function CardHead(){
    const adatok = useContext(CardContext);
    return(
        <>
            <div style={{padding: '10px', backgroundColor:'black', color: 'white'}}>
                {adatok.cimzett}
            </div>
        </>
    )
}

function CardBody(){
    const adatok = useContext(CardContext);
    return(
        <>
            <div style={{padding: '10px'}}>
                {adatok.szoveg}
            </div>
        </>

    )
}

function Card(){
    return(
        <>
            <div style={{border: "3px solid black", width: '200px'}}>
                <CardHead/>
                <CardBody/>
            </div>
        </>
    )
}
export default Card
