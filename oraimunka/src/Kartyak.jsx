import { useState } from "react"
function Kartyak(){

    const[nev, setNev] = useState("");

    function nevMegjelenites(event){
        setNev(event.target.value);
    }
    return(
        <>
            <input placeholder="név"  value={nev} onChange={nevMegjelenites}/>
            
            <p>Kedves: <strong> {nev}</strong></p>
        </>
    )
}
export default Kartyak