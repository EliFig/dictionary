import React, { useState } from "react";


export default function Dictionary(){
    let[keyWord, setkeyWord] = useState("");
      function Search(event){
event.preventDefault();
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