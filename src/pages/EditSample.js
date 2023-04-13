import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

import Template from "../components/Template";
import Music from "../components/Music";
import { toneObject, tonePart, toneTransport } from "../data/instruments";


function preview() {

}

function save() {

}




/**
 * The subcomponent to render the edit page
 * @param update the hook state to check update
 * @param setUpdate the update state method to trigger update
 * @param samples the samples that are passed down from SampleList
 * @param setSamples the update method for samples to update changes locally
 * @returns the edit page
 */
export default function EditSample({update, setUpdate, samples, setSamples}) {

    /**
     * The function to handle saving after changes
     * @param sample the sample to be saved
     */
    async function save(sample) {
        const newType = sample.type;
        const id = sample.id;
        const sampleName = sample.name
        const data = sample.recording_data;
        samples.map(sample => sample.id === id? {...sample,
            name: sampleName, 
            type: newType,
            recording_data: data}: sample);
        await fetch(`http://wmp.interaction.courses/api/v1/?apiKey=wPfVY9nF&mode=update&endpoint=samples&sampleType=${newType}&sampleName=${sampleName}&id=${id}`, 
        { method: "POST", body: JSON.stringify(data)});
    }

    function createSample() {
        setUpdate(!update);
    }

    let {id} = useParams();
    let [sample] = samples.filter(sample => id === sample.id);

    //if create sample is clicked, generate an empty sample
    if (id ==="create-sample"){
        const notes = ["B", "A", "G", "F", "E", "D", "C"]

        sample = {name: "New sample", type: "guitar", recording_data: new Array()};
        notes.forEach(note=> sample.recording_data.push({[note] : new Array(16).fill(false)}));

        console.log(sample);
    }

    return (
        <Template title="Editing This Sample:">
        <section id="editSample">
            <h1>
                {sample.name}
            </h1>
            <ul>
                <button onClick = {preview}>
                            Preview
                </button>
                <button onClick = {save} className="darkButton">
                            Save
                </button>
            </ul>
        </section>
        <Music sample={sample} setSample={setSamples} toneObject={toneObject} toneTransport={toneTransport} tonePart={tonePart}/>

        </Template>     
    );
}