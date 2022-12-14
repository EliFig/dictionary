import React from "react";


export default function Meaning(props){
    if (props.meaning){
    return(
        <div className="Meaning">
            <h3>{props.meaning.partOfSpeech}</h3>
{props.meaning.definitions.slice(0, 4).map(function(definition, index)
{
    return(
        <div key={index}>
            <p>{definition.definition}
            <br/>
            <em>{definition.example}</em>
            </p>
        </div>
    );
})}
</div>
    );
}else {
    return null;
}
}