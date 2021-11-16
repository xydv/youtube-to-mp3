import React, { useState }from 'react'
import Download from './Download';
import Image from './Image';

function Search() {
    const [url, setUrl] = useState("");
    const handleChange = (event) => {
        setUrl(event.target.value);
    }
    let saveurl = url;
    let id = "";
    if(saveurl.includes("youtu.be")){
        saveurl = saveurl.split(".be/");
        id = saveurl[1];
    }
    else if(saveurl.includes("=")){
        saveurl = saveurl.split("=");
        id = saveurl[1];
    }
    else if(saveurl.length === 11){
        id = saveurl;
    }
    else {
        id = undefined;
    }
    return (
        <>
        <div className="container my-4">
            <div className="input-group mb-3">
                <input type="text" className="form-control" onChange={handleChange} value={url} placeholder="https://www.youtube.com/watch?v=twdyUANQ2jY" aria-label="Youtube URL Goes Here" aria-describedby="basic-addon2"/>
                    <span className="input-group-text" id="basic-addon2"><i className="bi bi-arrow-right-square-fill"></i></span>
            </div>
        </div>
        {id === undefined ? "" : <Image url={id} />}
        {id === undefined ? "" : <Download url={id} />}
        </>
    )
}

export default Search
