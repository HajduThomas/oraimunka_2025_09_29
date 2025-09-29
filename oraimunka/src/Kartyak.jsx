import { useState } from "react"
function Kartyak(){

    const[nev, setNev] = useState("");

    function nevMegjelenites(event){
        setNev(event.target.value);
    }
    return(
        <>
            <input placeholder="név"  value={nev} onChange={nevMegjelenites}/>
            
            <p>Kedves: {nev}</p>
        </>
    )
}
export default Kartyak