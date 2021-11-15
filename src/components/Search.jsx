import React, { useState }from 'react'
import Image from './Image';

function Search() {
    const [url, setUrl] = useState("");
    const handleChange = (event) => {
        setUrl(event.target.value);
    }
    return (
        <>
        <div className="container my-4">
            <div className="input-group mb-3">
                <input type="text" className="form-control" onChange={handleChange} value={url} placeholder="Youtube URL Goes Here" aria-label="Youtube URL Goes Here" aria-describedby="basic-addon2"/>
                    <span className="input-group-text" id="basic-addon2">Enter!</span>
            </div>
        </div>
        <Image url={url} />
        </>
    )
}

export default Search
