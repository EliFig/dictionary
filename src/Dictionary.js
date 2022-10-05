import React, { useState } from "react";
import Result from "./Result.js"
import "./Dictionary.css";
import axios from "axios";

export default function Dictionary(props){
    const [keyWord, setkeyWord] = useState("props.defaultKeyword");
    const [loaded, setLoaded] = useState(false);
    const [definition, setDefinition] = useState(null)

    function handleResponse(response){
        setDefinition(response.data[0]);
    }

          function load() {
    setLoaded(true);
    Search();
  }


      function Search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyWord}`;
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

        <Result definition={definition}/>
        </div>
    );
        }else{
            load();
            return "Loading!"
        }

}