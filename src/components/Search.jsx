import React, { useState }from 'react'
import Download from './Download';
import Image from './Image';

function Search() {
    const [url, setUrl] = useState("");
    const handleChange = (event) => {
        setUrl(event.target.value);
    }
    let saveurl = url;
    saveurl = saveurl.split("=");
    saveurl = saveurl[1];
    return (
        <>
        <div className="container my-4">
            <div className="input-group mb-3">
                <input type="text" className="form-control" onChange={handleChange} value={url} placeholder="https://www.youtube.com/watch?v=twdyUANQ2jY" aria-label="Youtube URL Goes Here" aria-describedby="basic-addon2"/>
                    <span className="input-group-text" id="basic-addon2">Enter!</span>
            </div>
        </div>
        {saveurl === undefined ? "" : <Image url={saveurl} />}
        {saveurl === undefined ? "" : <Download url={saveurl} />}
        </>
    )
}

export default Search
