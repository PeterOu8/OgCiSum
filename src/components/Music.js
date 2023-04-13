import React, { useEffect, useState } from "react";
import { synth, guitar, piano, frenchHorn, drums} from "../data/instruments.js";
import BarTemplate from "./BarTemplate.js";
const instruments = ["piano", "french_horn", "guitar", "drums"];

/**
 * Return the sampler of the given type
 * @param type of instrument
 * @returns the sampler of specified type
 */
function getInstrument(type) {
    switch(type) {
        case "piano":
            return piano;
        case "french_horn":
            return frenchHorn;
        case "drums":
            return drums;
        default:
            return guitar;
    }
}

/**
 * Return the string of the given type
 * @param type of instrument
 * @returns the string of specified type
 */
function getInstrumentName(type) {
    switch(type) {
        case "piano":
            return "Piano";
        case "french_horn":
            return "French Horn";
        case "drums":
            return "Drums";
        default:
            return "Guitar";
    }
}

/**
 * Generate a bar box
 * @param barEnabled the status of a bar's click event
 * @param handleBarClick the click event action handler
 * @param text the text to display inside
 * @returns a bar component
 */
function Bar({barEnabled, handleBarClick, text}) {
    function barSelected() {
        if (barEnabled) return "selected";
        return "";
    }

    return (
        <div className={`bar ${barSelected()}`} onClick={handleBarClick}>
            {text}
        </div>
    );
}

/**
 * Generate a bar of instrument types
 * @param instruments all kinds of instrument
 * @param type the type of instrument
 * @param setType the update method of type
 * @returns an instrument bar component
 */
function InstrumentBars({instruments, type, setType}){
    function handleInstrumentBarClick(bar) {
        setType(bar.type);
    }
    const initialBar = [];
    instruments.forEach(instrument => {
        let barState = false;
        if (instrument == type) barState = true;
        initialBar.push({type: instrument, barEnabled: barState});
    });

    return initialBar.map(bar => 
    <Bar barEnabled={bar.barEnabled} handleBarClick = {() => handleInstrumentBarClick(bar)} text={getInstrumentName(bar.type)}/>
    );
}

/**
 * The preview button
 * @param previewing the state of previewing
 * @param setPreviewing the update of state previewing
 * @param toneObject the object to play music
 * @returns a preview button
 */
function Preview({ previewing, setPreviewing, toneObject, toneTransport }) {
    function handleButtonClick() {
        toneObject.start();
        toneTransport.stop();
        setPreviewing(!previewing);
        if(previewing) {
            toneTransport.start();
        }
    }
    return <button onClick={handleButtonClick}>{previewing ? "Stop Previewing" : "Preview"}</button>;
}

function SequnceBars({note, type, sequence, setSequence, toneObject}) {
    function sortSequence(bar, other) {
        if (bar.barID < other.barID) return -1;
        if (bar.barID > other.barID) return 1;
        return 0;
    }
    function handleBarClick(bar) {
        const now = toneObject.now();
        getInstrument(type).triggerAttackRelease(`${note}3`, "8n", now);
        let filteredSequence = sequence.filter((_bar) => _bar.barID !== bar.barID);
        setSequence([ ...filteredSequence, { ...bar, barEnabled: !bar.barEnabled } ]);
    }

    return sequence.sort(sortSequence).map(bar => <Bar key={bar.barID} barEnabled={bar.barEnabled} handleBarClick={() => handleBarClick(bar)}/>);
}

function Sequencer({type, sequenceNote, inputSequence, setPreviewing, toneObject, toneTransport, tonePart}) {
    const initialSequence = [];
    for(let bar = 1; bar <= 16; bar++) {
        initialSequence.push({
            barID: bar,
            barEnabled: inputSequence[bar - 1],
        });
    }

    const [sequence, setSequence] = useState(initialSequence);
    useEffect(() => {
        let index = instruments.indexOf(type);
        tonePart[index].clear();
        toneTransport.cancel();

        sequence.filter(bar => bar.barEnabled).forEach(bar => {
            tonePart[index].add((bar.barID - 1) / 4, `${sequenceNote}3`); // Plays the note of the sequence on 3rd octave 0.25s apart
        });
    });

    return (
        <BarTemplate text={sequenceNote}>
        <SequnceBars note={sequenceNote} type = {type} sequence={sequence} setSequence={setSequence} toneObject={toneObject}/>
        </BarTemplate>
    )
}

/**
 * The wrapper of sequencers
 * @param sample the sample passed in
 * @returns a component containing all the sequencers
 */
function Sequencers({type, sample, toneObject, toneTransport, tonePart}) {
    const [sequences, setSequences] = useState(sample);
    const initialPreviewing = false;
    const [previewing, setPreviewing] = useState(initialPreviewing);

    return(
        <>
        {sequences.map(sequence => (
            <Sequencer type={type} sequenceNote ={Object.keys(sequence)[0]} inputSequence={Object.values(sequence)[0]} setPreviewing={setPreviewing} toneObject={toneObject} toneTransport={toneTransport} tonePart={tonePart}
            />
        ))}
        <Preview previewing={previewing} setPreviewing={setPreviewing} toneObject={toneObject} toneTransport={toneTransport} />
        </>
    )
}

/**
 * Generate a music edit component
 * @param sample the sample passed in from the edit button
 * @returns a list of component bars
 */
export default function Music ({sample, setSample, toneObject, toneTransport, tonePart }){
    const [type, setType] = useState(sample.type);
    let sequences = JSON.parse(sample.recording_data);
    return (
        <>
            <BarTemplate text={"Type"}>
                <InstrumentBars instruments={instruments} type={type} setType={setType}/>
            </BarTemplate>

            <Sequencers type={type} sample={sequences} toneObject={toneObject} toneTransport={toneTransport} tonePart={tonePart}/>
        </>
    );
}