import React, { useState } from "react";
import Result from "./Result.js"
import "./Dictionary.css";
import axios from "axios";
import Photos from "./Photos";

export default function Dictionary(props){
    const [keyWord, setkeyWord] = useState(props.defaultKeyword);
    const [loaded, setLoaded] = useState(false);
    const [definition, setDefinition] = useState(null)
    const [photos, setPhotos] = useState([]);

    function handleImages(response) {
    setPhotos(response.data.photos);
  }

    function handleResponse(response){
        setDefinition(response.data[0]);
        const apiUrl = `https://api.pexels.com/v1/search?query=${response.data[0].word}&per_page=3`;
    const apiKey = "563492ad6f9170000100000105ed6ac961414b48baef5536af292320";
    axios
      .get(apiUrl, { headers: { Authorization: `Bearer ${apiKey}` } })
      .then(handleImages);
    }

          function load() {
    setLoaded(true);
    Search();
  }


      function Search() {
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyWord}`;
    axios.get(apiUrl).then(handleResponse);

  }



  function handleSubmit(event) {
    event.preventDefault();
    Search();
  }

        function HandleKeyWord(event){
setkeyWord(event.target.value);
        }
        if(loaded){
    return(
        <div className="Dictionary">
    <form  className="d-flex" onSubmit={handleSubmit}>
            <input  className="form-control me-2" onChange={HandleKeyWord} type="Search" placeholder="Search a word"/>
            <button type="submit" className="btn btn-primary">Search</button>
    
        </form>
        <Photos photos={photos} />
        <Result definition={definition}/>
        </div>
    );
        }else{
            load();
            return "Loading!"
        }

}