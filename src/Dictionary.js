import React, { useState } from "react";
import axios from "axios";

export default function Dictionary(){
    let[keyWord, setkeyWord] = useState("");

    function handleResponse(response){
        console.log(response.data[0]);
    }
      function Search(event){
event.preventDefault();
let apiUrl= `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
axios.get({apiUrl}).then(handleResponse);

alert(`Searching for ${keyWord}`);
        }

        function HandleKeyWord(event){
setkeyWord(event.target.value);
        }
    return(
    <form onSubmit={Search}>
            <input onChange={HandleKeyWord} type="Search" placeholder="Type a word" outoFocus={true}/>
            <button onChange={HandleKeyWord} type="button" class="btn btn-primary">Primary</button>
    
        </form>
    )
    
}