import { useState } from "react"
function Jatek()
{
    const max = 10;
    const szam = 4;
    const szamok = [];
    for(let i=1; i<=max; i++)
        szamok.push(i);

    const[tipp, setTipp] = useState(0);

    return(
        <>
            {szamok.map((e,i) => <button key={i} onClick={()=>setTipp(e)}>{ e }</button>)}
            <p>Tipped: {tipp} {szam == tipp ? "Talált!" : "Nem talált!"}</p>
        </>
    )
}
export default Jatek