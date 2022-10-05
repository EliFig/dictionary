import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./Result.css";

export default function Result(props){
    if(props.definition){
    return (
    <div className="Result">
          <h1>{props.definition.word}</h1>
 {props.definition.phonetics.slice(1, 2).map(function (phonetic, index) {
            return <Phonetic phonetic={phonetic} key={index} />;
          })}
        
        {props.definition.meanings.map(function(meaning, index) {
            return (
            <div key={index}>
                <Meaning meaning={meaning} />
        
        </div>
        );
            })}
            </div>
    );

    }else{
        return null;
    }
}