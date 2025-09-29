import { useState } from "react"
function Jatek()
{
    const[db, setDb] = useState(1);
    const novel = () => setDb(db+1);
    return(
        <>
            <button onClick={novel}>1</button>
            <button onClick={novel}>2</button>
            <button onClick={novel}>3</button>
            <button onClick={novel}>4</button>
            <button onClick={novel}>5</button>

            <p>Szamok: {db}</p>
        </>
    )
}
export default Jatek