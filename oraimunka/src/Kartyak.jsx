import { useState } from "react"
function Kartyak(){

    const[adatok, setAdatok] = useState({cimzett: '', szoveg: ''})

    
    return(
        <>
            <label htmlFor="cimzett">Címzet neve: </label>
            <input type="text" name="cimzett" id="cimzett"
                value={adatok.cimzett}
                onChange={(e) => setAdatok({...adatok, cimzett: e.target.value})}
            />           
            <br />
            <label htmlFor="szoveg">Kártya szöveg: </label>
            <textarea name="szoveg" id="szoveg"
                value={adatok.szoveg}
                onChange={(e) => setAdatok({...adatok, szoveg: e.target.value})}
            ></textarea>           

            <p>Címzett: {adatok.cimzett}</p>
            <p>Szöveg: {adatok.szoveg}</p>

            
        </>
    )
}
export default Kartyak