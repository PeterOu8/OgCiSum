import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";

import Template from "../components/Template";
import {toneObject, toneTransport, tonePart} from "../data/instruments.js";


/**
 * The page component to render a list of sample
 * @param update the hook to trigger update api 
 * @param setUpdate the update the state of update
 * @param samples a list of samples fetched from api
 * @returns the sample list page
 */
export default function SampleList({update, setUpdate, samples }) {

    function Sample(props) {
        return (
                <section>
                    <div>
                        <h3>
                            {props.name}
                        </h3>
                        <p>
                            {props.datetime}
                        </p>
                    </div>
                    <ul>
                        <button onClick = {share} >
                            Share
                        </button>
                        <button onClick = {preview}>
                            Preview
                        </button>
                        <Link to={`/sample/${props.id}`}>
                            <button className="darkButton">
                                Edit
                            </button>
                        </Link>
                    </ul>
                </section>
        );
    }

    function preview() {

    }

    function share() {

    }
    async function save() {

    }


    return (
        <Template title="Samples You've Created">
            {samples.map(sample => (
                                // <Sample {...sample}></Sample>
                                <Sample key = {sample.id} {...sample}></Sample>
                            ))}
            <section id="createSection">
                {/* <button onClick = {edit} className="darkButton">
                    Create Sample
                </button> */}
                <Link to={`/sample/create-sample`}>
                        <button className="darkButton">
                            Create Sample
                        </button>
                </Link>
            </section>
        </Template>
    );
    

}