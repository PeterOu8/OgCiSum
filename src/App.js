import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { toneObject } from "./data/instruments";

import styles from "./css/styles.css";

import SampleList from "./pages/SampleList";
import EditSample from "./pages/EditSample";

/**
 * Main Application handler linking to each page and components
 * @returns The main APP component
 */
export default function App() {
    const initalSamples = [];
    const [ update, setUpdate ] = useState(true);
    const [ samples, setSamples ] = useState(initalSamples);

    /**
     * Fetches all of the created sample from the api and set the hook state
     */
    async function getCreatedSamples() {
        const response = await fetch("http://wmp.interaction.courses/api/v1/?apiKey=wPfVY9nF&mode=read&endpoint=samples&limit=999&order=asc", { method: "GET"});
        const json = await response.json();
        setSamples(json.samples);
    }

    /**
     * Fetch the samples created once and set the hook on the first rendering
     */
    useEffect(() => {
            getCreatedSamples();
        }, [update]); // Runs on the first render using [] parameter and rerun when state changes
        
    return (
		<BrowserRouter>
            <Routes>
                <Route path="/" element={<SampleList samples ={samples} />} />
                <Route path="sample/:id" element={<EditSample update ={update} setUpdate ={setUpdate} samples={samples} setSamples={setSamples}/>} />    
                {/* <Route path="sample/:id" element={<SampleList update ={update} setUpdate ={setUpdate} samples={samples} setSamples={setSamples}/>} /> */}
            </Routes>
		</BrowserRouter>
    );
}