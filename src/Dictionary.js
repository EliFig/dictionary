import React, { useState } from "react";
import Result from "./Result.js"
import axios from "axios";

export default function Dictionary(props){
    let[keyWord, setkeyWord] = useState("props.defaultKeyword");
    let [loaded, setLoaded] = useState(false);
    let[definition, setDefinition] = useState(null)

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
            <section>
    <form onSubmit={handleSubmit}>
            <input onChange={HandleKeyWord} type="Search" placeholder="Type a word"/>
            <button onChange={HandleKeyWord} type="button" className="btn btn-primary">Primary</button>
    
        </form>
        </section>
        <Result definition={definition}/>
        </div>
    );
        }else{
            load();
            return "Loading!"
        }
    
}