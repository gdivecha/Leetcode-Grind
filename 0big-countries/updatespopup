import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faLeftRight, faArrowTrendUp, faArrowTrendDown, faFaceSmileBeam, faFaceMeh, faThumbtack, faFaceFrownOpen, faQuestion, faNoteSticky, faCircleCheck, faCircleXmark, faComment, faPenToSquare, faCaretDown, faCaretUp, faCircleRight, faTrashCan, faXmark, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { ThemeContext } from "./../../components/ThemeContext/ThemeContext";

import Draggable from 'react-draggable';

export const UpdatesPopUp = (props) => {

    const [position, setPosition] = useState({ x: 100, y: 100 });
    //const [isDragging, setIsDragging] = useState(false);

    const clientsWithNotes = props.notesContent;
    const clientsWithJustification = props.riskContent;
    const clientsWithSatisfaction = props.moodContent;

    const clientNotes = props.isLoading ? [] :
        (clientsWithNotes.filter(clientInfo => clientInfo.clientName === props.selectedClient))[0].notes;

    const clientJustification = props.isLoading ? [] :
        (clientsWithJustification.filter(clientInfo => clientInfo.clientName === props.selectedClient))[0].notes;

    const clientSatisfaction = props.isLoading ? [] :
        (clientsWithSatisfaction.filter(clientInfo => clientInfo.clientName === props.selectedClient))[0].notes;

    /*
    console.log(clientNotes);
    console.log(clientJustification);
    console.log(clientSatisfaction);
    */

    const { toggle } = React.useContext(ThemeContext);

    const [currentTotalNotes, setTotalNotes] = useState(clientNotes);
    const [noteButtonHover, setNoteHover] = useState(false);
    const [currentClientNewNote, setClientNewNote] = useState('');
    const [typeNote, setNoteTyping] = useState(false);
    const [editNote, setEditNote] = useState(false);
    const [editedNote, setNoteEdited] = useState('');
    const [editNoteIndex, setEditNoteIndex] = useState(-1);
    const [removeNote, setRemoveNote] = useState(false);
    const [removeNoteIndex, setRemoveNoteIndex] = useState(-1);

    const [currentTotalJustification, setTotalJustification] = useState(clientJustification);
    const [justificationButtonHover, setJustificationHover] = useState(false);
    const [currentClientNewJustification, setClientNewJustification] = useState('');
    const [typeJustification, setJustificationTyping] = useState(false);
    const [editJustification, setEditJustification] = useState(false);
    const [editedJustification, setJustificationEdited] = useState('');
    const [editJustificationIndex, setEditJustificationIndex] = useState(-1);
    const [removeJustification, setRemoveJustification] = useState(false);
    const [removeJustificationIndex, setRemoveJustificationIndex] = useState(-1);

    const [currentTotalMood, setTotalMood] = useState(clientSatisfaction);
    const [moodButtonHover, setMoodHover] = useState(false);
    const [currentClientNewMood, setClientNewMood] = useState('');
    const [typeMood, setMoodTyping] = useState(false);
    const [editMood, setEditMood] = useState(false);
    const [editedMood, setMoodEdited] = useState('');
    const [editMoodIndex, setEditMoodIndex] = useState(-1);
    const [removeMood, setRemoveMood] = useState(false);
    const [removeMoodIndex, setRemoveMoodIndex] = useState(-1);

    const [isDraggable, setIsDraggable] = useState(false);

    const [viewNotes, setNoteView] = useState(false);
    const [viewJustification, setJustificationView] = useState(false);
    const [viewMood, setMoodView] = useState(false);

    const [currentEditing, setCurrentEditing] = useState('');

    useEffect(() => {
        setTotalNotes(clientNotes);
        setTotalJustification(clientJustification);
        setTotalMood(clientSatisfaction);
        setNoteView(false);
        setJustificationView(false);
        setMoodView(false);
        setCurrentEditing('');
    }, [props.selectedClient]);

    useEffect(() => {
        setNoteTyping(false);
        setJustificationTyping(false);
        setMoodTyping(false);
        setIsDraggable(false);
        setNoteView(false);
        setJustificationView(false);
        setMoodView(false);
        setCurrentEditing('');
    }, [props.isOpen]);

    
    useEffect(() => {
        if (viewJustification==false) {
            setJustificationTyping(false);
            setEditJustification(false);
            setJustificationEdited(false);
            setEditJustificationIndex(-1);
            setRemoveJustificationIndex(-1);
            setRemoveJustification(false);
            setCurrentEditing('');
        }
    }, [viewJustification]);

    useEffect(() => {
        if (viewNotes==false) {
            setNoteTyping(false);
            setEditNote(false);
            setRemoveNote(false);
            setNoteEdited(false);
            setEditNoteIndex(-1);
            setRemoveNoteIndex(-1);
            setRemoveNote(false);
            setCurrentEditing('');
        }
    }, [viewNotes]);

    useEffect(() => {
        if (viewMood ==false) {
            setMoodTyping(false);
            setRemoveMood(false);
            setEditMood(false);
            setMoodEdited(false);
            setEditMoodIndex(-1);
            setRemoveMoodIndex(-1);
            setRemoveMood(false);
            setCurrentEditing('');
        }
    }, [viewMood]);

    useEffect(() => {
        if (editNoteIndex !== -1 || removeNoteIndex!== -1) {
            setEditJustificationIndex(-1);
            setEditMoodIndex(-1);
            setRemoveJustificationIndex(-1);
            setRemoveMoodIndex(-1);
            setEditJustification(false);
            setEditMood(false);
            setRemoveJustification(false);
            setRemoveMood(false);
            setNoteEdited('');
            setCurrentEditing('');
        }
    }, [editNoteIndex, removeNoteIndex]);

    useEffect(() => {
        if (editJustificationIndex !== -1 || removeJustificationIndex!== -1) {
            setEditNoteIndex(-1);
            setEditMoodIndex(-1);
            setRemoveNoteIndex(-1);
            setRemoveMoodIndex(-1);
            setEditNote(false);
            setEditMood(false);
            setRemoveNote(false);
            setRemoveMood(false);
            setJustificationEdited('');
            setCurrentEditing('');
        }
    }, [editJustificationIndex, removeJustificationIndex]);

    useEffect(() => {
        if (editMoodIndex !== -1 || removeMoodIndex !== -1) {
            setEditJustificationIndex(-1);
            setEditNoteIndex(-1);
            setRemoveJustificationIndex(-1);
            setRemoveNoteIndex(-1);
            setEditNote(false);
            setEditJustification(false);
            setRemoveNote(false);
            setRemoveJustification(false);
            setMoodEdited('');
            setCurrentEditing('');
        }
    }, [editMoodIndex, removeMoodIndex]);

    useEffect(() => {
        if (typeNote) {
            setJustificationTyping(false);
            setMoodTyping(false);
            setCurrentEditing('');
        }
    }, [typeNote]);

    useEffect(() => {
        if (typeJustification) {
            setNoteTyping(false);
            setMoodTyping(false);
            setCurrentEditing('');
        }
    }, [typeJustification]);

    useEffect(() => {
        if (typeMood) {
            setJustificationTyping(false);
            setNoteTyping(false);
            setCurrentEditing('');
        }
    }, [typeMood]);


    // The last 3 use effects can be used to mak eit so that when you click on notes, the justification and satisfaction sections collapse
    // and similar behavior with the other 2 as well
    // comment out these last 3 useeffects to disable this behavior
    /*
    useEffect(() => {
        if (viewNotes) {
            setJustificationView(false);
            setMoodView(false);
        }
    }, [viewNotes]);

    useEffect(() => {
        if (viewJustification) {
            setNoteView(false);
            setMoodView(false);
        }
    }, [viewJustification]);

    useEffect(() => {
        if (viewMood) {
            setNoteView(false);
            setJustificationView(false);
        }
    }, [viewMood]);
    */



    function handleNoteClick() {
        document.getElementById("note").value = ""
        if (currentClientNewNote!=="") {
            setTotalNotes([currentClientNewNote, ...currentTotalNotes]);
        }
        //console.log(currentTotalNotes);
        setNoteTyping(!typeNote);
    }

    function handleJustificationClick() {
        document.getElementById("risk").value = ""
        if (currentClientNewJustification !== "") {
            setTotalJustification([currentClientNewJustification, ...currentTotalJustification]);
        }
        //console.log(currentTotalJustification);
        setJustificationTyping(!typeJustification);
    }

    function handleMoodClick() {
        document.getElementById("mood").value = ""
        if (currentClientNewMood !== "") {
            setTotalMood([currentClientNewMood, ...currentTotalMood]);
        }
        //console.log(currentTotalMood);
        setMoodTyping(!typeMood);
    }

    function handleNoteRemove(index) {
        const list = [...currentTotalNotes];
        list.splice(index, 1);
        setTotalNotes(list);
    }

    function handleJustificationRemove(index) {
        const list = [...currentTotalJustification];
        list.splice(index, 1);
        setTotalJustification(list);
    }

    function handleMoodRemove(index) {
        const list = [...currentTotalMood];
        list.splice(index, 1);
        setTotalMood(list);
    }

    function handleNoteEdit(index, editedNote) {
        const list = [...currentTotalNotes];
        list.splice(index, 1, editedNote);
        setTotalNotes(list);
    }

    function handleJustificationEdit(index, editedJustification) {
        const list = [...currentTotalJustification];
        list.splice(index, 1, editedJustification);
        setTotalJustification(list);
    }

    function handleMoodEdit(index, editedMood) {
        const list = [...currentTotalMood];
        list.splice(index, 1, editedMood);
        setTotalMood(list);
    }

    function handleNoteMouseEnter() {
        setNoteHover(true);
    }

    function handleJustificationMouseEnter() {
        setJustificationHover(true);
    }

    function handleMoodMouseEnter() {
        setMoodHover(true);
    }

    function handleNoteMouseLeave() {
        setNoteHover(false);
    }

    function handleJustificationMouseLeave() {
        setJustificationHover(false);
    }

    function handleMoodMouseLeave() {
        setMoodHover(false);
    }

    return (
        props.isOpen &&
        isDraggable &&
        <Draggable
            position={position}
            onStop={(event, data) => {
                setPosition({ x: data.x<0?0:data.x, y: data.y<-100?-100:data.y });
            }}
            >
                <div className={`z-90 absolute top-10 left-18 block border-4 ${toggle ? 'border-frost' : 'border-gray-600'} rounded-lg ${toggle ? 'filter-blur-frost' : 'filter-blur-dark'} text-gray-500 pb-2 pt-4 mt-5 px-5 ${(viewNotes || viewJustification || viewMood) ? 'w-130' : 'w-55'}`} >
                    <button
                        className={`absolute top-0 left-11 bg-gray-350 dark:bg-[#191C1F] ${toggle ? 'hover:outline-[#669EFF]' :'hover:outline-[#191C1F]'} dark:hover:text-gray-300 border-gray-600 rounded-full w-5 h-7 mt-3 mb-1`}
                        onClick={(e) => {
                            setIsDraggable(!isDraggable);
                        }}
                    >
                        <FontAwesomeIcon icon={faThumbtack} style={{ color: toggle ?'#669eff':'#004FFF' }} className='flex-shrink-0 h-3 mb-0.5 rounded-full text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                    </button>
                    <span className={`block text-xl text-center text-white -mt-0.5 ${toggle ? 'text-bg-[#191C1F]' : 'text-white'}`}>Status</span>
                    <button
                        className='absolute top-0 right-11  bg-gray-350 dark:bg-[#191C1F] hover:outline-red dark:hover:text-gray-300 border-gray-600 rounded-full w-5 h-6 mt-3 mb-2'
                        onClick={(e) => {
                            props.setIsOpen(false);
                        }}
                    >
                        <FontAwesomeIcon icon={faXmark} style={{ color: '#CB263A' }} className='flex-shrink-0 mt-1 w-4 h-4 rounded-full text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                    </button>
                    <div className="max-height-200 rounded-xl padding-and-margin">
                        <div className="mt-2">
                            <div className="py-2">
                                <button
                                    className={`block bg-gray-350 dark:bg-[#41454E] px-2 w-full rounded text-lg text-center -mt-0.5 dark:hover:bg-opaque-0.6`}
                                    onClick={() => {
                                        setNoteView(!viewNotes);
                                    }}
                                >
                                    <table>
                                        <tr>
                                            <td><FontAwesomeIcon icon={faEye} className=' flex-shrink-0 h-3 mb-0.5 mr-2 rounded-full text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white ml-2' /></td>
                                            <td><p classname="inline-block text-gray-500 dark:text-gray-400">Notes</p></td>
                                            <td>{viewNotes ? <FontAwesomeIcon icon={faCaretUp} className='flex-shrink-0 h-3 mb-0.5 rounded-full text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white ml-2' />
                                                : <FontAwesomeIcon icon={faCaretDown} className=' flex-shrink-0 h-3 mb-0.5 rounded-full text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white ml-2' />
                                            }</td>
                                        </tr>
                                    </table>
                                </button>

                                {viewNotes ?
                                    <div className={`bg-blue-150 dark:bg-[#11161B] rounded-2xl border  ${toggle ? 'border-blue-500' :'border-gray-600'} px-3 mt-2 mb-2 `}>
                                        <button
                                            className='bg-med-gray-100 dark:bg-[#262d33] hover:text-frost hover:bg-frost dark:hover:bg-gray-700 dark:hover:text-gray-300 rounded-lg w-full h-10 mt-3 mb-2'
                                            onClick={(e) => {
                                                if (typeNote == false) {
                                                    setEditNoteIndex(-1);
                                                    setEditNote(false);
                                                    setRemoveNoteIndex(-1);
                                                    setRemoveNote(false);
                                                    setRemoveNote(false);
                                                    setEditJustificationIndex(-1);
                                                    setEditJustification(false);
                                                    setRemoveJustificationIndex(-1);
                                                    setRemoveJustification(false);
                                                    setEditMoodIndex(-1);
                                                    setEditMood(false);
                                                    setRemoveMoodIndex(-1);
                                                    setRemoveMood(false);
                                                }
                                                else {
                                                    setClientNewNote('');
                                                }
                                                setNoteTyping(!typeNote);
                                            }}
                                            onMouseEnter={handleNoteMouseEnter}
                                            onMouseLeave={handleNoteMouseLeave}
                                        >
                                            {props.isLoading ? '' : typeNote ?
                                                <p className="inline-flex "><FontAwesomeIcon icon={faMinus} style={{ background: noteButtonHover ? (toggle ? '#D91E34' : '#CB263A') : (toggle ? '#DAE2F9' : 'rgb(45 55 59)'), color: noteButtonHover ? (toggle ? '#FFF' : '#191C1F') : (toggle ? '#D91E34' : '#CB263A') }} className='flex-shrink-0 w-3 h-3 p-1 mr-1 mt-1.5 rounded-full text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' /><p className="ml-1 mt-1"> Cancel New Note</p></p>
                                                : <p className="inline-flex "><FontAwesomeIcon icon={faPlus} style={{ background: noteButtonHover ? (toggle ? '#00D354' : '#00FF94') : (toggle ? '#DAE2F9' : 'rgb(45 55 59)'), color: noteButtonHover ? (toggle ? '#FFF' : '#191C1F') : (toggle ? '#00D354' : '#00FF94') }} className='flex-shrink-0 w-3 h-3 p-1 mr-1 mt-1.5 rounded-full text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' /><p className="ml-1 mt-1"> Add New Note</p></p>}
                                        </button>
                                        {props.isLoading ? '' : typeNote ?
                                            <div className="bg-gray-350 dark:bg-[#262d33] rounded-xl mt-1 mb-4 px-2">
                                                <textarea
                                                    className={`dark:bg-[#262d33] mt-2 rounded border-2 ${toggle ? 'border-blue-500' :'border-gray-600'} w-full`}
                                                    id="note"
                                                    name="note"
                                                    placeholder="The client requires..."
                                                    rows="5"
                                                    maxLength="440"
                                                    style={{ resize: 'none' }}
                                                    defaultValue={currentClientNewNote}
                                                    onChange={(e) => {
                                                        setClientNewNote(e.target.value);
                                                    }}
                                                >
                                                </textarea>
                                                <button
                                                    className="bg-white hover:bg-frost-lighter dark:bg-[#4B5563] dark:hover:bg-opaque-0.6 mb-2 mt-0.5 w-full dark:text-[#191C1F] rounded-lg h-7 text-sm"
                                                    type="submit"
                                                    onClick={() => {
                                                        handleNoteClick();
                                                        setClientNewNote('');
                                                    }}
                                                >
                                                    <span className="dark:text-gray-400">Submit Note</span>
                                                </button>
                                            </div> : ''
                                        }
                                        <div className={`mb-1 ${currentTotalNotes.length > 3 ? 'overflow-y-auto  h-33' : currentTotalNotes.length !== 0 ? 'mb-2.75' : ''}`}>
                                            <table>
                                                {props.isLoading ? ''
                                                    : currentTotalNotes.map((note, index) =>
                                                        <tr>
                                                            <td className="w-12">
                                                                <FontAwesomeIcon icon={faCircleRight} className='h-5 mt-2 mb-0.5 rounded-full text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                                                            </td>
                                                            <td className="w-115">
                                                                {editNote && (index === editNoteIndex) ?
                                                                    <div className="inline-flex">
                                                                        <input
                                                                            type="text"
                                                                            placeholder={note}
                                                                            defaultValue={note}
                                                                            className={` bg-gray-350 dark:bg-[#262d33] h-10 rounded-xl border-2  w-112.5 ${toggle ? 'border-frost' : 'border-gray-600'}`}
                                                                            defaultValue={currentEditing==''?note:currentEditing}
                                                                            onChange={(e) => {
                                                                                setNoteEdited(e.target.value);
                                                                                setCurrentEditing(e.target.value);
                                                                            }}
                                                                        >
                                                                        </input>
                                                                    </div>
                                                                    : editNote && (index !== editNoteIndex) ?
                                                                        <span className='overflow-lines'>{note}</span>
                                                                        : <span className='overflow-lines -ml-4'>{note}</span>
                                                                }
                                                            </td>
                                                            {!editNote ?
                                                                <td>
                                                                    <button
                                                                        onClick={() => {
                                                                            setNoteTyping(false);
                                                                            setJustificationTyping(false);
                                                                            setMoodTyping(false);
                                                                            setRemoveNote(false);
                                                                            setRemoveNoteIndex(-1);
                                                                            setEditNoteIndex(index);
                                                                            setEditNote(true);
                                                                            setCurrentEditing('');
                                                                        }}
                                                                    >
                                                                        <FontAwesomeIcon icon={faPenToSquare} className=' w-3 h-7 ml-1 p-1 px-2 rounded-full bg-gray-350 hover:bg-frost dark:text-blue-500 text-gray-500 dark:bg-[#191C1F] dark:hover:bg-gray-800 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                                                                    </button>
                                                                </td>
                                                                : editNote && (index == editNoteIndex) ? <div className="h-8 w-14 bg-gray-350 dark:bg-[#191C1F] rounded-full px-1 py-1 mt-1 ml-0.5">
                                                                    <button
                                                                        onClick={() => {
                                                                            if (editedNote == '') {
                                                                                handleNoteEdit(index, note);
                                                                            }
                                                                            else {
                                                                                handleNoteEdit(index, editedNote);
                                                                            }
                                                                            setNoteTyping(false);
                                                                            setRemoveNote(false);
                                                                            setRemoveNoteIndex(-1);
                                                                            setEditNoteIndex(-1);
                                                                            setEditNote(false);
                                                                            setCurrentEditing('');
                                                                        }}
                                                                    >
                                                                        <FontAwesomeIcon icon={faCircleCheck} style={{ color: toggle ? '#00D354' : '#00FF94' }} className=' w-4 p-1 hover:bg-frost  rounded-full dark:text-blue-500 text-gray-500 dark:bg-[#191C1F] dark:hover:bg-gray-800 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                                                                    </button>
                                                                    <button
                                                                        onClick={() => {
                                                                            setNoteTyping(false);
                                                                            setRemoveNote(false);
                                                                            setRemoveNoteIndex(-1);
                                                                            setEditNoteIndex(-1);
                                                                            setEditNote(false);
                                                                            setCurrentEditing('');
                                                                        }}
                                                                    >
                                                                        <FontAwesomeIcon icon={faCircleXmark} style={{ color: '#CB263A' }} className=' w-4 p-1 hover:bg-frost  rounded-full dark:text-blue-500 text-gray-500 dark:bg-[#191C1F] dark:hover:bg-gray-800 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                                                                    </button>
                                                                </div> : editNote && (index !== editNoteIndex) ?
                                                                    <button
                                                                        onClick={() => {
                                                                            setNoteTyping(false);
                                                                            setRemoveNote(false);
                                                                            setRemoveNoteIndex(-1);
                                                                            setEditNoteIndex(index);
                                                                                setEditNote(true);
                                                                                setCurrentEditing('');
                                                                        }}
                                                                    >
                                                                            <FontAwesomeIcon icon={faPenToSquare} className=' w-3 h-6 mt-1 p-1 px-5.5 ml-0.5 rounded-full  bg-gray-350 hover:bg-frost  dark:text-blue-500 text-gray-500 dark:bg-[#191C1F] dark:hover:bg-gray-800 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                                                                    </button>
                                                                    : ''
                                                            }
                                                            {removeNote && (index == removeNoteIndex) ?
                                                                <div className="h-8 w-14 bg-gray-350 dark:bg-[#191C1F] rounded-full px-1 py-1 mt-1 ml-0.5">
                                                                    <button
                                                                        onClick={() => {
                                                                            setNoteTyping(false);
                                                                            setEditNoteIndex(-1);
                                                                            setEditNote(false);
                                                                            handleNoteRemove(index);
                                                                            setRemoveNoteIndex(-1);
                                                                            setRemoveNote(false);
                                                                        }}
                                                                    >
                                                                        <FontAwesomeIcon icon={faCircleCheck} style={{ color: toggle ? '#00D354' : '#00FF94' }} className=' w-4 p-1 rounded-full  hover:bg-frost dark:text-blue-500 text-gray-500 dark:bg-[#191C1F] dark:hover:bg-gray-800 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                                                                    </button>
                                                                    <button
                                                                        onClick={() => {
                                                                            setNoteTyping(false);
                                                                            setEditNoteIndex(-1);
                                                                            setEditNote(false);
                                                                            setRemoveNoteIndex(-1);
                                                                            setRemoveNote(false);
                                                                        }}
                                                                    >
                                                                        <FontAwesomeIcon icon={faCircleXmark} style={{ color: '#CB263A' }} className=' w-4 p-1 rounded-full  hover:bg-frost dark:text-blue-500 text-gray-500 dark:bg-[#191C1F] dark:hover:bg-gray-800 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                                                                    </button>
                                                                </div>
                                                                : removeNote && (index !== removeNoteIndex) ?
                                                                    <td>
                                                                        <button
                                                                            onClick={() => {
                                                                                setNoteTyping(false);
                                                                                setEditNoteIndex(-1);
                                                                                setEditNote(false);
                                                                                setRemoveNoteIndex(index);
                                                                                setRemoveNote(true);
                                                                                setCurrentEditing('');
                                                                            }}
                                                                        >
                                                                            <FontAwesomeIcon icon={faTrashCan} style={{ color: '#CB263A' }} className=' w-3 h-6 mt-1 p-1 mr-1 px-5.5 ml-0.5  bg-gray-350 hover:bg-frost rounded-full dark:text-blue-500 text-gray-500 dark:bg-[#191C1F] dark:hover:bg-[#371F1F] transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                                                                        </button>
                                                                    </td>
                                                                    : <td>
                                                                        <button
                                                                            onClick={() => {
                                                                                setNoteTyping(false);
                                                                                setJustificationTyping(false);
                                                                                setMoodTyping(false);
                                                                                setEditNoteIndex(-1);
                                                                                setEditNote(false);
                                                                                setRemoveNoteIndex(index);
                                                                                setRemoveNote(true);
                                                                                setCurrentEditing('');
                                                                            }}
                                                                        >
                                                                            <FontAwesomeIcon icon={faTrashCan} style={{ color: '#CB263A' }} className=' w-3 h-7 ml-1 mr-2 p-1 px-2 rounded-full  bg-gray-350 hover:bg-frost text-gray-500 dark:bg-[#191C1F] dark:hover:bg-[#371F1F] transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                                                                        </button>
                                                                    </td>
                                                            }
                                                        </tr>
                                                    )
                                                }
                                            </table>
                                        </div>
                                    </div> : ''
                                }
                            </div>
                            <div className="py-2">
                                <button
                                    className="block bg-gray-350 dark:bg-[#41454E] px-2 w-full rounded text-lg text-center -mt-0.5 dark:hover:bg-opaque-0.6"
                                    onClick={() => {
                                        setJustificationView(!viewJustification);
                                    }}
                                >
                                    <table>
                                        <tr>
                                            <td><FontAwesomeIcon icon={props.trender === 'greater' ? faArrowTrendUp : (props.trender === 'lower' ? faArrowTrendDown : faLeftRight)} className='mr-3 flex-shrink-0 h-3 mb-0.5 rounded-full text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white ml-2' /></td>
                                            <td><p classname="inline-block text-gray-500 dark:text-gray-400">Risk</p></td>
                                            <td>{viewJustification ? <FontAwesomeIcon icon={faCaretUp} className='flex-shrink-0 h-3 mb-0.5 rounded-full text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white ml-2' />
                                                : <FontAwesomeIcon icon={faCaretDown} className=' flex-shrink-0 h-3 mb-0.5 rounded-full text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white ml-2' />
                                            }</td>
                                        </tr>
                                    </table>
                                </button>

                                {viewJustification ?
                                    <div className={`bg-blue-150 dark:bg-[#11161B] rounded-2xl border ${toggle ? 'border-blue-500' :'border-gray-600'} px-3 mt-2 mb-2`}>
                                        <button
                                            className='bg-med-gray-100 dark:bg-[#262d33] hover:text-frost hover:bg-frost dark:hover:bg-gray-700 dark:hover:text-gray-300 rounded-lg w-full h-10 mt-3 mb-2'
                                            onClick={(e) => {
                                                if (typeJustification == false) {
                                                    setEditNoteIndex(-1);
                                                    setEditNote(false);
                                                    setRemoveNoteIndex(-1);
                                                    setRemoveNote(false);
                                                    setEditJustificationIndex(-1);
                                                    setEditJustification(false);
                                                    setRemoveJustificationIndex(-1);
                                                    setRemoveJustification(false);
                                                    setEditMoodIndex(-1);
                                                    setEditMood(false);
                                                    setRemoveMoodIndex(-1);
                                                    setRemoveMood(false);
                                                }
                                                else {
                                                    setClientNewJustification('');
                                                }
                                                setJustificationTyping(!typeJustification);
                                            }}
                                            onMouseEnter={handleJustificationMouseEnter}
                                            onMouseLeave={handleJustificationMouseLeave}
                                        >
                                            {props.isLoading ? '' : typeJustification ?
                                                <p className="inline-flex "><FontAwesomeIcon icon={faMinus} style={{ background: justificationButtonHover ? (toggle ? '#D91E34' : '#CB263A') : (toggle ? '#DAE2F9' : 'rgb(45 55 59)'), color: justificationButtonHover ? (toggle ? '#FFF' : '#191C1F') : (toggle ? '#D91E34' : '#CB263A') }} className='flex-shrink-0 w-3 h-3 p-1 mr-1 mt-1.5 rounded-full text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' /><p className="ml-1 mt-1"> Cancel New Rationale</p></p>
                                                : <p className="inline-flex "><FontAwesomeIcon icon={faPlus} style={{ background: justificationButtonHover ? (toggle ? '#00D354' : '#00FF94') : (toggle ? '#DAE2F9' : 'rgb(45 55 59)'), color: justificationButtonHover ? (toggle ? '#FFF' : '#191C1F') : (toggle ? '#00D354' : '#00FF94') }} className='flex-shrink-0 w-3 h-3 p-1 mr-1 mt-1.5 rounded-full text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' /><p className="ml-1 mt-1"> Add New Rationale</p></p>}
                                        </button>
                                        {props.isLoading ? '' : typeJustification ?
                                            <div className="bg-gray-350 dark:bg-[#262d33] rounded-xl mt-1 mb-4 px-2">
                                                <textarea
                                                    className={`dark:bg-[#262d33] mt-2 rounded border-2 ${toggle ? 'border-blue-500' :'border-gray-600'} w-full`}
                                                    id="risk"
                                                    name="risk"
                                                    placeholder="This is why ..."
                                                    rows="5"
                                                    maxLength="440"
                                                    style={{ resize: 'none' }}
                                                    defaultValue={currentClientNewJustification}
                                                    onChange={(e) => {
                                                        setClientNewJustification(e.target.value);
                                                    }}
                                                >
                                                </textarea>
                                                <button
                                                    className="bg-white hover:bg-frost-lighter dark:bg-[#4B5563] dark:hover:bg-opaque-0.6 mb-2 mt-0.5 w-full dark:text-[#191C1F] rounded-lg h-7 text-sm"
                                                    type="submit"
                                                    onClick={() => {
                                                        handleJustificationClick();
                                                        setClientNewJustification('');
                                                    }}
                                                >
                                                    <span className="dark:text-gray-400">Submit Rationale</span>
                                                </button>
                                            </div> : ''
                                        }
                                        <div className={`mb-1 ${currentTotalJustification.length > 3 ? 'overflow-y-auto  h-33' : currentTotalJustification.length !== 0 ? 'mb-2.75' : ''}`}>
                                            <table>
                                                {props.isLoading ? ''
                                                    : currentTotalJustification.map((justification, index) =>
                                                        <tr className='tootlip '>
                                                            <td className="w-12">
                                                                <FontAwesomeIcon icon={faCircleRight} className='h-5 mt-2 mb-0.5 rounded-full text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                                                            </td>
                                                            <td className="w-115">
                                                                {editJustification && (index === editJustificationIndex) ?
                                                                    <div className="inline-flex">
                                                                        <input
                                                                            type="text"
                                                                            placeholder={justification}
                                                                            defaultValue={currentEditing == '' ? justification : currentEditing}
                                                                            className={` bg-gray-350  dark:bg-[#262d33] h-10 rounded-xl border-2 border-gray-600 w-112.5 ${toggle ? 'border-frost' : 'border-gray-600'}`}
                                                                            onChange={(e) => {
                                                                                setJustificationEdited(e.target.value);
                                                                                setCurrentEditing(e.target.value);
                                                                            }}
                                                                        >
                                                                        </input>
                                                                    </div>
                                                                    : editJustification && (index !== editJustificationIndex) ?
                                                                        <span className='overflow-lines'>{justification}</span>
                                                                        : <span className='overflow-lines -ml-4'>{justification}</span>
                                                                }
                                                            </td>
                                                            {!editJustification ?
                                                                <td>
                                                                    <button
                                                                        onClick={() => {
                                                                            setNoteTyping(false);
                                                                            setJustificationTyping(false);
                                                                            setMoodTyping(false);
                                                                            setRemoveJustification(false);
                                                                            setRemoveJustificationIndex(-1);
                                                                            setEditJustificationIndex(index);
                                                                            setEditJustification(true);
                                                                            setCurrentEditing('');
                                                                        }}
                                                                    >
                                                                        <FontAwesomeIcon icon={faPenToSquare} className=' w-3 h-7 ml-1 p-1 px-2 rounded-full bg-gray-350 hover:bg-frost dark:text-blue-500 text-gray-500 dark:bg-[#191C1F] dark:hover:bg-gray-800 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                                                                    </button>
                                                                </td>
                                                                : editJustification && (index == editJustificationIndex) ? <div className="h-8 w-14 bg-gray-350 dark:bg-[#191C1F] rounded-full px-1 py-1 mt-1 ml-0.5">
                                                                    <button
                                                                        onClick={() => {
                                                                            if (editedJustification == '') {
                                                                                handleJustificationEdit(index, justification);
                                                                            }
                                                                            else {
                                                                                handleJustificationEdit(index, editedJustification);
                                                                            }
                                                                            setJustificationTyping(false);
                                                                            setRemoveJustification(false);
                                                                            setRemoveJustificationIndex(-1);
                                                                            setEditJustificationIndex(-1);
                                                                            setEditJustification(false);
                                                                            setCurrentEditing('');
                                                                        }}
                                                                    >
                                                                        <FontAwesomeIcon icon={faCircleCheck} style={{ color: '#00FF94' }} className=' w-4 p-1 rounded-full  hover:bg-frost dark:text-blue-500 text-gray-500 dark:bg-[#191C1F] dark:hover:bg-gray-800 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                                                                    </button>
                                                                    <button
                                                                        onClick={() => {
                                                                            setJustificationTyping(false);
                                                                            setRemoveJustification(false);
                                                                            setRemoveJustificationIndex(-1);
                                                                            setEditJustificationIndex(-1);
                                                                            setEditJustification(false);
                                                                            setCurrentEditing('');
                                                                        }}
                                                                    >
                                                                        <FontAwesomeIcon icon={faCircleXmark} style={{ color: '#CB263A' }} className=' w-4 p-1 rounded-full hover:bg-frost  dark:text-blue-500 text-gray-500 dark:bg-[#191C1F] dark:hover:bg-gray-800 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                                                                    </button>
                                                                </div> : editJustification && (index !== editJustificationIndex) ?
                                                                    <button
                                                                        onClick={() => {
                                                                            setJustificationTyping(false);
                                                                            setRemoveJustification(false);
                                                                            setRemoveJustificationIndex(-1);
                                                                            setEditJustificationIndex(index);
                                                                                setEditJustification(true);
                                                                                setCurrentEditing('');
                                                                        }}
                                                                    >
                                                                            <FontAwesomeIcon icon={faPenToSquare} className=' w-3 h-6 mt-1 p-1 px-5.5 ml-0.5 rounded-full bg-gray-350 hover:bg-frost  dark:text-blue-500 text-gray-500 dark:bg-[#191C1F] dark:hover:bg-gray-800 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                                                                    </button>
                                                                    : ''
                                                            }
                                                            {removeJustification && (index == removeJustificationIndex) ?
                                                                <div className="h-8 w-14 bg-gray-350 dark:bg-[#191C1F] rounded-full px-1 py-1 mt-1 ml-0.5">
                                                                    <button
                                                                        onClick={() => {
                                                                            setJustificationTyping(false);
                                                                            setEditJustificationIndex(-1);
                                                                            setEditJustification(false);
                                                                            handleJustificationRemove(index);
                                                                            setRemoveJustificationIndex(-1);
                                                                            setRemoveJustification(false);
                                                                        }}
                                                                    >
                                                                        <FontAwesomeIcon icon={faCircleCheck} style={{ color: toggle ? '#00D354' : '#00FF94' }} className=' w-4 p-1 rounded-full  hover:bg-frost dark:text-blue-500 text-gray-500 dark:bg-[#191C1F] dark:hover:bg-gray-800 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                                                                    </button>
                                                                    <button
                                                                        onClick={() => {
                                                                            setJustificationTyping(false);
                                                                            setEditJustificationIndex(-1);
                                                                            setEditJustification(false);
                                                                            setRemoveJustificationIndex(-1);
                                                                            setRemoveJustification(false);
                                                                        }}
                                                                    >
                                                                        <FontAwesomeIcon icon={faCircleXmark} style={{ color: '#CB263A' }} className=' w-4 p-1 rounded-full  hover:bg-frost dark:text-blue-500 text-gray-500 dark:bg-[#191C1F] dark:hover:bg-gray-800 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                                                                    </button>
                                                                </div>
                                                                : removeJustification && (index !== removeJustificationIndex) ?
                                                                    <td>
                                                                        <button
                                                                            onClick={() => {
                                                                                setJustificationTyping(false);
                                                                                setEditJustificationIndex(-1);
                                                                                setEditJustification(false);
                                                                                setRemoveJustificationIndex(index);
                                                                                setRemoveJustification(true);
                                                                                setCurrentEditing('');
                                                                            }}
                                                                        >
                                                                            <FontAwesomeIcon icon={faTrashCan} style={{ color: '#CB263A' }} className=' w-3 h-6 mt-1 p-1 mr-1 px-5.5 ml-0.5  bg-gray-350 hover:bg-frost rounded-full dark:text-blue-500 text-gray-500 dark:bg-[#191C1F] dark:hover:bg-[#371F1F] transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                                                                        </button>
                                                                    </td>
                                                                    :
                                                                    <td>
                                                                        <button
                                                                            onClick={() => {
                                                                                setNoteTyping(false);
                                                                                setJustificationTyping(false);
                                                                                setMoodTyping(false);
                                                                                setEditJustificationIndex(-1);
                                                                                setEditJustification(false);
                                                                                setRemoveJustificationIndex(index);
                                                                                setRemoveJustification(true);
                                                                                setCurrentEditing('');
                                                                            }}
                                                                        >
                                                                            <FontAwesomeIcon icon={faTrashCan} style={{ color: '#CB263A' }} className=' w-3 h-7 ml-1 mr-2 p-1 px-2 rounded-full bg-gray-350 hover:bg-frost  text-gray-500 dark:bg-[#191C1F] dark:hover:bg-[#371F1F] transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                                                                        </button>
                                                                    </td>
                                                            }
                                                        </tr>
                                                    )
                                                }
                                            </table>
                                        </div>
                                    </div> : ''
                                }
                            </div>
                            <div className="py-2">
                                <button
                                    className="block bg-gray-350 dark:bg-[#41454E] px-2 w-full rounded text-lg text-center -mt-0.5 dark:hover:bg-opaque-0.6"
                                    onClick={() => {
                                        setMoodView(!viewMood);
                                    }}
                                >
                                    <table>
                                        <tr>
                                            <td><FontAwesomeIcon icon={props.viber == 1 ? faFaceFrownOpen : (props.viber == 2 ? faFaceMeh : faFaceSmileBeam)} className=' flex-shrink-0 h-3 mb-0.5 mr-1.8 rounded-full text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white ml-2' /></td>
                                            <td><p classname="inline-block text-gray-500 dark:text-gray-400">Mood</p></td>
                                            <td>{viewMood ? <FontAwesomeIcon icon={faCaretUp} className='flex-shrink-0 h-3 mb-0.5 rounded-full text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white ml-2' />
                                                : <FontAwesomeIcon icon={faCaretDown} className=' flex-shrink-0 h-3 mb-0.5 rounded-full text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white ml-2' />
                                            }</td>
                                        </tr>
                                    </table>
                                </button>
                                {viewMood ?
                                    <div className={`bg-blue-150 dark:bg-[#11161B] rounded-2xl border ${toggle ? 'border-blue-500' :'border-gray-600'} px-3 mt-2 mb-2 `}>
                                        <button
                                            className='bg-med-gray-100 dark:bg-[#262d33] hover:text-frost hover:bg-frost dark:hover:bg-gray-700 dark:hover:text-gray-300 rounded-lg w-full h-10 mt-3 mb-2'
                                            onClick={(e) => {
                                                if (typeMood == false) {
                                                    setEditNoteIndex(-1);
                                                    setEditNote(false);
                                                    setRemoveNoteIndex(-1);
                                                    setRemoveNote(false);
                                                    setEditJustificationIndex(-1);
                                                    setEditJustification(false);
                                                    setRemoveJustificationIndex(-1);
                                                    setRemoveJustification(false);
                                                    setEditMoodIndex(-1);
                                                    setEditMood(false);
                                                    setRemoveMoodIndex(-1);
                                                    setRemoveMood(false);
                                                }
                                                else {
                                                    setClientNewMood('');
                                                }
                                                setMoodTyping(!typeMood);
                                            }}
                                            onMouseEnter={handleMoodMouseEnter}
                                            onMouseLeave={handleMoodMouseLeave}
                                        >
                                            {props.isLoading ? '' : typeMood ?
                                                <p className="inline-flex "><FontAwesomeIcon icon={faMinus} style={{ background: moodButtonHover ? (toggle ? '#D91E34' : '#CB263A') : (toggle ? '#DAE2F9' : 'rgb(45 55 59)'), color: moodButtonHover ? (toggle ? '#FFF' : '#191C1F') : (toggle ? '#D91E34' : '#CB263A') }} className='flex-shrink-0 w-3 h-3 p-1 mr-1 mt-1.5 rounded-full text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' /><p className="ml-1 mt-1"> Cancel New Feedback</p></p>
                                                : <p className="inline-flex "><FontAwesomeIcon icon={faPlus} style={{ background: moodButtonHover ? (toggle ? '#00D354' : '#00FF94') : (toggle ? '#DAE2F9' : 'rgb(45 55 59)'), color: moodButtonHover ? (toggle ? '#FFF' : '#191C1F') : (toggle ? '#00D354' : '#00FF94') }} className='flex-shrink-0 w-3 h-3 p-1 mr-1 mt-1.5 rounded-full text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' /><p className="ml-1 mt-1"> Add New Feedback</p></p>}
                                        </button>
                                        {props.isLoading ? '' : typeMood ?
                                            <div className="bg-gray-350 dark:bg-[#262d33] rounded-xl mt-1 mb-4 px-2">
                                                <textarea
                                                    className={`dark:bg-[#262d33] mt-2 rounded border-2 ${toggle ? 'border-blue-500' :'border-gray-600'} w-full`}
                                                    id="mood"
                                                    name="mood"
                                                    placeholder="The client is ..."
                                                    rows="5"
                                                    maxLength="440"
                                                    style={{ resize: 'none' }}
                                                    defaultValue={currentClientNewMood}
                                                    onChange={(e) => {
                                                        setClientNewMood(e.target.value);
                                                    }}
                                                >
                                                </textarea>
                                                <button
                                                    className="bg-white hover:bg-frost-lighter dark:bg-[#4B5563] dark:hover:bg-opaque-0.6 mb-2 mt-0.5 w-full dark:text-[#191C1F] rounded-lg h-7 text-sm"
                                                    type="submit"
                                                    onClick={() => {
                                                        handleMoodClick();
                                                        setClientNewMood('');
                                                    }}
                                                >
                                                    <span className="dark:text-gray-400">Submit Feedback</span>
                                                </button>
                                            </div> : ''
                                        }
                                        <div className={`mb-1 ${currentTotalMood.length > 3 ? 'overflow-y-auto  h-33' : currentTotalMood.length !== 0 ? 'mb-2.75' : ''}`}>
                                            <table>
                                                {props.isLoading ? ''
                                                    : currentTotalMood.map((mood, index) =>
                                                        <tr className='tootlip '>
                                                            <td className="w-12">
                                                                <FontAwesomeIcon icon={faCircleRight} className='h-5 mt-2 mb-0.5 rounded-full text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                                                            </td>
                                                            <td className="w-115">
                                                                {editMood && (index === editMoodIndex) ?
                                                                    <div className="inline-flex">
                                                                        <input
                                                                            type="text"
                                                                            placeholder={mood}
                                                                            defaultValue={currentEditing == '' ? mood : currentEditing}
                                                                            className={`  bg-gray-350 dark:bg-[#262d33] h-10 rounded-xl border-2  w-112.5 ${toggle ? 'border-frost' : 'border-gray-600'}`}
                                                                            onChange={(e) => {
                                                                                setMoodEdited(e.target.value);
                                                                                setCurrentEditing(e.target.value);
                                                                            }}
                                                                        >
                                                                        </input>
                                                                    </div>
                                                                    : editMood && (index !== editMoodIndex) ?
                                                                        <span className='overflow-lines'>{mood}</span>
                                                                        : <span className='overflow-lines -ml-4'>{mood}</span>
                                                                }
                                                            </td>
                                                            {!editMood ?
                                                                <td>
                                                                    <button
                                                                        onClick={() => {
                                                                            setNoteTyping(false);
                                                                            setJustificationTyping(false);
                                                                            setMoodTyping(false);
                                                                            setRemoveMood(false);
                                                                            setRemoveMoodIndex(-1);
                                                                            setEditMoodIndex(index);
                                                                            setEditMood(true);
                                                                            setCurrentEditing('');
                                                                        }}
                                                                    >
                                                                        <FontAwesomeIcon icon={faPenToSquare} className=' w-3 h-7 ml-1 p-1 px-2 rounded-full bg-gray-350 hover:bg-frost dark:text-blue-500 text-gray-500 dark:bg-[#191C1F] dark:hover:bg-gray-800 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                                                                    </button>
                                                                </td>
                                                                : editMood && (index == editMoodIndex) ? <div className="h-8 w-14 bg-gray-350 dark:bg-[#191C1F] rounded-full px-1 py-1 mt-1 ml-0.5">
                                                                    <button
                                                                        onClick={() => {
                                                                            if (editedMood == '') {
                                                                                handleMoodEdit(index, mood);
                                                                            }
                                                                            else {
                                                                                handleMoodEdit(index, editedMood);
                                                                            }
                                                                            setMoodTyping(false);
                                                                            setRemoveMood(false);
                                                                            setRemoveMoodIndex(-1);
                                                                            setEditMoodIndex(-1);
                                                                            setEditMood(false);
                                                                            setCurrentEditing('');
                                                                        }}
                                                                    >
                                                                        <FontAwesomeIcon icon={faCircleCheck} style={{ color: toggle ? '#00D354' : '#00FF94' }} className=' w-4 p-1 rounded-full hover:bg-frost  dark:text-blue-500 text-gray-500 dark:bg-[#191C1F] dark:hover:bg-gray-800 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                                                                    </button>
                                                                    <button
                                                                        onClick={() => {
                                                                            setMoodTyping(false);
                                                                            setRemoveMood(false);
                                                                            setRemoveMoodIndex(-1);
                                                                            setEditMoodIndex(-1);
                                                                            setEditMood(false);
                                                                            setCurrentEditing('');
                                                                        }}
                                                                    >
                                                                        <FontAwesomeIcon icon={faCircleXmark} style={{ color: '#CB263A' }} className=' w-4 p-1 rounded-full hover:bg-frost  dark:text-blue-500 text-gray-500 dark:bg-[#191C1F] dark:hover:bg-gray-800 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                                                                    </button>
                                                                </div> : editMood && (index !== editMoodIndex) ?
                                                                    <button
                                                                        onClick={() => {
                                                                            setMoodTyping(false);
                                                                            setRemoveMood(false);
                                                                            setRemoveMoodIndex(-1);
                                                                            setEditMoodIndex(index);
                                                                                setEditMood(true);
                                                                                setCurrentEditing('');
                                                                        }}
                                                                    >
                                                                            <FontAwesomeIcon icon={faPenToSquare} className=' w-3 h-6 mt-1 p-1 px-5.5 ml-0.5 rounded-full bg-gray-350 hover:bg-frost  dark:text-blue-500 text-gray-500 dark:bg-[#191C1F] dark:hover:bg-gray-800 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                                                                    </button>
                                                                    : ''
                                                            }
                                                            {removeMood && (index == removeMoodIndex) ?
                                                                <div className="h-8 w-14 bg-gray-350 dark:bg-[#191C1F] rounded-full px-1 py-1 mt-1.5 ml-0.5">
                                                                    <button
                                                                        onClick={() => {
                                                                            setMoodTyping(false);
                                                                            setEditMoodIndex(-1);
                                                                            setEditMood(false);
                                                                            handleMoodRemove(index);
                                                                            setRemoveMoodIndex(-1);
                                                                            setRemoveMood(false);
                                                                        }}
                                                                    >
                                                                        <FontAwesomeIcon icon={faCircleCheck} style={{ color: toggle ? '#00D354' : '#00FF94' }} className=' w-4 p-1 rounded-full hover:bg-frost  dark:text-blue-500 text-gray-500 dark:bg-[#191C1F] dark:hover:bg-gray-800 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                                                                    </button>
                                                                    <button
                                                                        onClick={() => {
                                                                            setMoodTyping(false);
                                                                            setEditMoodIndex(-1);
                                                                            setEditMood(false);
                                                                            setRemoveMoodIndex(-1);
                                                                            setRemoveMood(false);
                                                                        }}
                                                                    >
                                                                        <FontAwesomeIcon icon={faCircleXmark} style={{ color: '#CB263A' }} className=' w-4 p-1 rounded-full hover:bg-frost  dark:text-blue-500 text-gray-500 dark:bg-[#191C1F] dark:hover:bg-gray-800 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                                                                    </button>
                                                                </div>
                                                                : removeMood && (index !== removeMoodIndex) ?
                                                                    <td>
                                                                        <button
                                                                            onClick={() => {
                                                                                setMoodTyping(false);
                                                                                setEditMoodIndex(-1);
                                                                                setEditMood(false);
                                                                                setRemoveMoodIndex(index);
                                                                                setRemoveMood(true);
                                                                                setCurrentEditing('');
                                                                            }}
                                                                        >
                                                                            <FontAwesomeIcon icon={faTrashCan} style={{ color: '#CB263A' }} className=' w-3 h-6 mt-1 p-1 mr-1 px-5.5 ml-0.5  bg-gray-350 hover:bg-frost rounded-full dark:text-blue-500 text-gray-500 dark:bg-[#191C1F] dark:hover:bg-[#371F1F] transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                                                                        </button>
                                                                    </td>
                                                                    :
                                                                    <td>
                                                                        <button
                                                                            onClick={() => {
                                                                                setNoteTyping(false);
                                                                                setJustificationTyping(false);
                                                                                setMoodTyping(false);
                                                                                setEditMoodIndex(-1);
                                                                                setEditMood(false);
                                                                                setRemoveMoodIndex(index);
                                                                                setRemoveMood(true);
                                                                                setCurrentEditing('');
                                                                            }}
                                                                        >
                                                                            <FontAwesomeIcon icon={faTrashCan} style={{ color: '#CB263A' }} className=' w-3 h-7 ml-1 mr-2 p-1 px-2 rounded-full  bg-gray-350 hover:bg-frost text-gray-500 dark:bg-[#191C1F] dark:hover:bg-[#371F1F] transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                                                                        </button>
                                                                    </td>
                                                            }
                                                        </tr>
                                                    )
                                                }
                                            </table>
                                        </div>
                                    </div> : ''
                                }
                            </div>
                        </div>
                    </div>
            </div>
        </Draggable>
        || (props.isOpen &&
            !isDraggable) &&
        <div style={{ left: position.x < 0 ? 0 : position.x, right: position.y < -150 ? -150 : position.y }} className={`z-90 absolute top-10 left-18 block border-4 ${toggle ? 'border-frost' : 'border-gray-600'} rounded-lg ${toggle ? 'filter-blur-frost' : 'filter-blur-dark'} text-gray-500 pb-2 pt-4 mt-5 px-5 ${(viewNotes || viewJustification || viewMood) ? 'w-130' : 'w-55'}`} >
            <button
                    className={`absolute top-0 left-11 bg-blue-400 dark:bg-[#004FFF] ${toggle ?'hover:outline-[#b0ceff30]':'hover:outline-[#004FFF]'} dark:hover:text-gray-300 border-gray-600 rounded-full w-5 h-7 mt-3 mb-1`}
                onClick={(e) => {
                    setIsDraggable(!isDraggable);
                }}
            >
                <FontAwesomeIcon icon={faThumbtack} style={{ color: toggle?'#FFF':'#191C1F' }} className='flex-shrink-0 h-3 mb-0.5 rounded-full text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
            </button>
                <span className={`block text-xl text-center text-white -mt-0.5 ${toggle ? 'text-bg-[#191C1F]' : 'text-white'}`}>Status</span>
            <button
                    className='absolute top-0 right-11 bg-gray-350 dark:bg-[#191C1F] hover:outline-red dark:hover:text-gray-300 border-gray-600 rounded-full w-5 h-6 mt-3 mb-2'
                onClick={(e) => {
                    props.setIsOpen(false);
                }}
            >
                <FontAwesomeIcon icon={faXmark} style={{ color: '#CB263A' }} className='flex-shrink-0 mt-1 w-4 h-4 rounded-full text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                </button>
                <div className="max-height-200 rounded-xl">
                <div className="mt-2">
                    <div className="py-2">
                        <button
                                className="block bg-gray-350 dark:bg-[#41454E] px-2 w-full rounded text-lg text-center -mt-0.5 dark:hover:bg-opaque-0.6"
                            onClick={() => {
                                setNoteView(!viewNotes);
                            }}
                        >
                            <table>
                                <tr>
                                    <td><FontAwesomeIcon icon={faEye} className=' flex-shrink-0 h-3 mb-0.5 mr-2 rounded-full text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white ml-2' /></td>
                                        <td><p classname="inline-block text-gray-500 dark:text-gray-400">Notes</p></td>
                                    <td>{viewNotes ? <FontAwesomeIcon icon={faCaretUp} className='flex-shrink-0 h-3 mb-0.5 rounded-full text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white ml-2' />
                                        : <FontAwesomeIcon icon={faCaretDown} className=' flex-shrink-0 h-3 mb-0.5 rounded-full text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white ml-2' />
                                    }</td>
                                </tr>
                            </table>
                        </button>

                        {viewNotes ?
                                <div className={`bg-blue-150 dark:bg-[#11161B] rounded-2xl border ${toggle ? 'border-blue-500' :'border-gray-600'} px-3 mt-2 mb-2`}>
                                <button
                                        className='bg-med-gray-100 dark:bg-[#262d33] hover:text-frost hover:bg-frost dark:hover:bg-gray-700 dark:hover:text-gray-300 rounded-lg w-full h-10 mt-3 mb-2'
                                    onClick={(e) => {
                                        if (typeNote == false) {
                                            setEditNoteIndex(-1);
                                            setEditNote(false);
                                            setRemoveNoteIndex(-1);
                                            setRemoveNote(false);
                                            setEditJustificationIndex(-1);
                                            setEditJustification(false);
                                            setRemoveJustificationIndex(-1);
                                            setRemoveJustification(false);
                                            setEditMoodIndex(-1);
                                            setEditMood(false);
                                            setRemoveMoodIndex(-1);
                                            setRemoveMood(false);
                                        }
                                        else {
                                            setClientNewNote('');
                                        }
                                        setNoteTyping(!typeNote);
                                    }}
                                    onMouseEnter={handleNoteMouseEnter}
                                    onMouseLeave={handleNoteMouseLeave}
                                >
                                    {props.isLoading ? '' : typeNote ?
                                            <p className="inline-flex "><FontAwesomeIcon icon={faMinus} style={{ background: noteButtonHover ? (toggle ? '#D91E34' : '#CB263A') : (toggle ? '#DAE2F9' : 'rgb(45 55 59)'), color: noteButtonHover ? (toggle ? '#FFF' : '#191C1F') : (toggle ? '#D91E34' : '#CB263A') }} className='flex-shrink-0 w-3 h-3 p-1 mr-1 mt-1.5 rounded-full text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' /><p className="ml-1 mt-1"> Cancel New Note</p></p>
                                            : <p className="inline-flex "><FontAwesomeIcon icon={faPlus} style={{ background: noteButtonHover ? (toggle ? '#00D354' : '#00FF94') : (toggle ? '#DAE2F9' : 'rgb(45 55 59)'), color: noteButtonHover ? (toggle ? '#FFF' : '#191C1F') : (toggle ? '#00D354' : '#00FF94') }} className='flex-shrink-0 w-3 h-3 p-1 mr-1 mt-1.5 rounded-full text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' /><p className="ml-1 mt-1"> Add New Note</p></p>}
                                </button>
                                {props.isLoading ? '' : typeNote ?
                                        <div className="bg-gray-350 dark:bg-[#262d33] rounded-xl mt-1 mb-4 px-2">
                                        <textarea
                                                className={`dark:bg-[#262d33] mt-2 rounded border-2 ${toggle ? 'border-blue-500' :'border-gray-600'} w-full`}
                                            id="note"
                                            name="note"
                                            placeholder="The client requires..."
                                            rows="5"
                                            maxLength="440"
                                                style={{ resize: 'none' }}
                                                defaultValue={currentClientNewNote}
                                            onChange={(e) => {
                                                setClientNewNote(e.target.value);
                                            }}
                                        >
                                        </textarea>
                                        <button
                                                className="bg-white hover:bg-frost-lighter dark:bg-[#4B5563] dark:hover:bg-opaque-0.6 mb-2 mt-0.5 w-full dark:text-[#191C1F] rounded-lg h-7 text-sm"
                                            type="submit"
                                            onClick={() => {
                                                handleNoteClick();
                                                setClientNewNote('');
                                            }}
                                        >
                                            <span className="dark:text-gray-400">Submit Note</span>
                                        </button>
                                    </div> : ''
                                }
                                    <div className={`mb-1 ${currentTotalNotes.length > 3 ? 'overflow-y-auto  h-33' : currentTotalNotes.length !== 0 ? 'mb-2.75' : ''}`}>
                                    <table>
                                        {props.isLoading ? ''
                                            : currentTotalNotes.map((note, index) =>
                                                <tr>
                                                    <td className="w-12">
                                                        <FontAwesomeIcon icon={faCircleRight} className='h-5 mt-2 mb-0.5 rounded-full text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                                                    </td>
                                                    <td className="w-115 tooltipnote">
                                                        {editNote && (index === editNoteIndex) ?
                                                            <div className="inline-flex">
                                                                <input
                                                                    type="text"
                                                                    placeholder={note}
                                                                    /*}
                                                                    defaultValue={note}
                                                                    className="dark:bg-[#262d33] h-10 rounded-xl border-2 border-gray-600 w-112.5"
                                                                    onChange={(e) => {
                                                                        setNoteEdited(e.target.value);
                                                                    }}*/
                                                                    className={`${toggle ? 'border-frost' : 'border-gray-600'} bg-gray-350 dark:bg-[#262d33] h-10 rounded-xl border-2  w-112.5`}
                                                                    defaultValue={currentEditing == '' ? note : currentEditing}
                                                                    onChange={(e) => {
                                                                        setNoteEdited(e.target.value);
                                                                        setCurrentEditing(e.target.value);
                                                                    }}
                                                                >
                                                                </input>
                                                            </div>
                                                            : editNote && (index !== editNoteIndex) ?
                                                                <span className='overflow-lines'>{note}</span>
                                                                : <span className='overflow-lines -ml-4'>{note}</span>
                                                        }
                                                        <span className='tooltipnotetext'>{note}</span>
                                                    </td>
                                                    {!editNote ?
                                                        <td>
                                                            <button
                                                                onClick={() => {
                                                                    setNoteTyping(false);
                                                                    setJustificationTyping(false);
                                                                    setMoodTyping(false);
                                                                    setRemoveNote(false);
                                                                    setRemoveNoteIndex(-1);
                                                                    setEditNoteIndex(index);
                                                                    setEditNote(true);
                                                                    setCurrentEditing('');
                                                                }}
                                                            >
                                                                <FontAwesomeIcon icon={faPenToSquare} className=' w-3 h-7 ml-1 p-1 px-2 rounded-full dark:text-blue-500 text-gray-500 bg-gray-350 hover:bg-frost dark:bg-[#191C1F] dark:hover:bg-gray-800 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                                                            </button>
                                                        </td>
                                                        : editNote && (index == editNoteIndex) ? <div className="h-8 w-14 bg-gray-350 dark:bg-[#191C1F] rounded-full px-1 py-1 mt-1 ml-0.5">
                                                            <button
                                                                onClick={() => {
                                                                    if (editedNote == '') {
                                                                        handleNoteEdit(index, note);
                                                                    }
                                                                    else {
                                                                        handleNoteEdit(index, editedNote);
                                                                    }
                                                                    setNoteTyping(false);
                                                                    setRemoveNote(false);
                                                                    setRemoveNoteIndex(-1);
                                                                    setEditNoteIndex(-1);
                                                                    setEditNote(false);
                                                                    setCurrentEditing('');
                                                                }}
                                                            >
                                                                <FontAwesomeIcon icon={faCircleCheck} style={{ color: toggle ? '#00D354' : '#00FF94' }} className=' w-4 p-1 rounded-full dark:text-blue-500 text-gray-500 hover:bg-frost dark:bg-[#191C1F] dark:hover:bg-gray-800 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                                                            </button>
                                                            <button
                                                                onClick={() => {
                                                                    setNoteTyping(false);
                                                                    setRemoveNote(false);
                                                                    setRemoveNoteIndex(-1);
                                                                    setEditNoteIndex(-1);
                                                                    setEditNote(false);
                                                                    setCurrentEditing('');
                                                                }}
                                                            >
                                                                <FontAwesomeIcon icon={faCircleXmark} style={{ color: '#CB263A' }} className=' w-4 p-1 rounded-full dark:text-blue-500 text-gray-500 hover:bg-frost dark:bg-[#191C1F] dark:hover:bg-gray-800 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                                                            </button>
                                                        </div> : editNote && (index !== editNoteIndex) ?
                                                            <button
                                                                onClick={() => {
                                                                    setNoteTyping(false);
                                                                    setRemoveNote(false);
                                                                    setRemoveNoteIndex(-1);
                                                                    setEditNoteIndex(index);
                                                                        setEditNote(true);
                                                                        setCurrentEditing('');
                                                                }}
                                                            >
                                                                    <FontAwesomeIcon icon={faPenToSquare} className=' w-3 h-6 mt-1 p-1 px-5.5 ml-0.5 rounded-full dark:text-blue-500 text-gray-500 bg-gray-350 hover:bg-frost dark:bg-[#191C1F] dark:hover:bg-gray-800 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                                                            </button>
                                                            : ''
                                                    }
                                                    {removeNote && (index == removeNoteIndex) ?
                                                        <div className="h-8 w-14 bg-gray-350 dark:bg-[#191C1F] rounded-full px-1 py-1 mt-1 ml-0.5">
                                                            <button
                                                                onClick={() => {
                                                                    setNoteTyping(false);
                                                                    setEditNoteIndex(-1);
                                                                    setEditNote(false);
                                                                    handleNoteRemove(index);
                                                                    setRemoveNoteIndex(-1);
                                                                    setRemoveNote(false);
                                                                }}
                                                            >
                                                                <FontAwesomeIcon icon={faCircleCheck} style={{ color: toggle ? '#00D354' : '#00FF94' }} className=' w-4 p-1 rounded-full dark:text-blue-500 text-gray-500 hover:bg-frost dark:bg-[#191C1F] dark:hover:bg-gray-800 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                                                            </button>
                                                            <button
                                                                onClick={() => {
                                                                    setNoteTyping(false);
                                                                    setEditNoteIndex(-1);
                                                                    setEditNote(false);
                                                                    setRemoveNoteIndex(-1);
                                                                    setRemoveNote(false);
                                                                }}
                                                            >
                                                                <FontAwesomeIcon icon={faCircleXmark} style={{ color: '#CB263A' }} className=' w-4 p-1 rounded-full dark:text-blue-500 text-gray-500 hover:bg-frost dark:bg-[#191C1F] dark:hover:bg-gray-800 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                                                            </button>
                                                        </div>
                                                        : removeNote && (index !== removeNoteIndex) ?
                                                            <td>
                                                                <button
                                                                    onClick={() => {
                                                                        setNoteTyping(false);
                                                                        setEditNoteIndex(-1);
                                                                        setEditNote(false);
                                                                        setRemoveNoteIndex(index);
                                                                        setRemoveNote(true);
                                                                        setCurrentEditing('');
                                                                    }}
                                                                >
                                                                    <FontAwesomeIcon icon={faTrashCan} style={{ color: '#CB263A' }} className=' w-3 h-6 mt-1 p-1 mr-1 px-5.5 ml-0.5 rounded-full dark:text-blue-500 text-gray-500 bg-gray-350 hover:bg-frost dark:bg-[#191C1F] dark:hover:bg-[#371F1F] transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                                                                </button>
                                                            </td>
                                                            : <td>
                                                                <button
                                                                    onClick={() => {
                                                                        setNoteTyping(false);
                                                                        setJustificationTyping(false);
                                                                        setMoodTyping(false);
                                                                        setEditNoteIndex(-1);
                                                                        setEditNote(false);
                                                                        setRemoveNoteIndex(index);
                                                                        setRemoveNote(true);
                                                                        setCurrentEditing('');
                                                                    }}
                                                                >
                                                                    <FontAwesomeIcon icon={faTrashCan} style={{ color: '#CB263A' }} className=' w-3 h-7 ml-1 mr-2 p-1 px-2 rounded-full text-gray-500 bg-gray-350 hover:bg-frost dark:bg-[#191C1F] dark:hover:bg-[#371F1F] transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                                                                </button>
                                                            </td>
                                                    }
                                                </tr>
                                            )
                                        }
                                    </table>
                                </div>
                            </div> : ''
                        }
                    </div>
                    <div className="py-2">
                        <button
                                className="block bg-gray-350 dark:bg-[#41454E] px-2 w-full rounded text-lg text-center -mt-0.5 dark:hover:bg-opaque-0.6"
                            onClick={() => {
                                setJustificationView(!viewJustification);
                            }}
                        >
                            <table>
                                <tr>
                                        <td><FontAwesomeIcon icon={props.trender === 'greater' ? faArrowTrendUp : (props.trender === 'lower' ? faArrowTrendDown : faLeftRight)} className=' flex-shrink-0 h-3 mb-0.5 mr-3 rounded-full text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white ml-2' /></td>
                                        <td><p classname="inline-block text-gray-500 dark:text-gray-400">Risk</p></td>
                                    <td>{viewJustification ? <FontAwesomeIcon icon={faCaretUp} className='flex-shrink-0 h-3 mb-0.5 rounded-full text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white ml-2' />
                                        : <FontAwesomeIcon icon={faCaretDown} className=' flex-shrink-0 h-3 mb-0.5 rounded-full text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white ml-2' />
                                    }</td>
                                </tr>
                            </table>
                        </button>

                        {viewJustification ?
                                <div className={`bg-blue-150 dark:bg-[#11161B] rounded-2xl border ${toggle ? 'border-blue-500' :'border-gray-600'} px-3 mt-2 mb-2`}>
                                <button
                                        className=' bg-med-gray-100 dark:bg-[#262d33] hover:text-frost hover:bg-frost dark:hover:bg-gray-700 dark:hover:text-gray-300 rounded-lg w-full h-10 mt-3 mb-2'
                                    onClick={(e) => {
                                        if (typeJustification == false) {
                                            setEditNoteIndex(-1);
                                            setEditNote(false);
                                            setRemoveNoteIndex(-1);
                                            setRemoveNote(false);
                                            setEditJustificationIndex(-1);
                                            setEditJustification(false);
                                            setRemoveJustificationIndex(-1);
                                            setRemoveJustification(false);
                                            setEditMoodIndex(-1);
                                            setEditMood(false);
                                            setRemoveMoodIndex(-1);
                                            setRemoveMood(false);
                                        }
                                        else {
                                            setClientNewJustification('');
                                        }
                                        setJustificationTyping(!typeJustification);
                                    }}
                                    onMouseEnter={handleJustificationMouseEnter}
                                    onMouseLeave={handleJustificationMouseLeave}
                                >
                                    {props.isLoading ? '' : typeJustification ?
                                            <p className="inline-flex "><FontAwesomeIcon icon={faMinus} style={{ background: justificationButtonHover ? (toggle ? '#D91E34' : '#CB263A') : (toggle ? '#DAE2F9' : 'rgb(45 55 59)'), color: justificationButtonHover ? (toggle ? '#FFF' : '#191C1F') : (toggle ? '#D91E34' : '#CB263A') }} className='flex-shrink-0 w-3 h-3 p-1 mr-1 mt-1.5 rounded-full text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' /><p className="ml-1 mt-1"> Cancel New Rationale</p></p>
                                            : <p className="inline-flex "><FontAwesomeIcon icon={faPlus} style={{ background: justificationButtonHover ? (toggle ? '#00D354' : '#00FF94') : (toggle ? '#DAE2F9' : 'rgb(45 55 59)'), color: justificationButtonHover ? (toggle ? '#FFF' : '#191C1F') : (toggle ? '#00D354' : '#00FF94') }} className='flex-shrink-0 w-3 h-3 p-1 mr-1 mt-1.5 rounded-full text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' /><p className="ml-1 mt-1"> Add New Rationale</p></p>}
                                </button>
                                {props.isLoading ? '' : typeJustification ?
                                        <div className="bg-gray-350 dark:bg-[#262d33] rounded-xl mt-1 mb-4 px-2">
                                        <textarea
                                                className={`dark:bg-[#262d33] mt-2 rounded border-2 w-full ${toggle ? 'border-blue-500' :'border-gray-600'}`}
                                            id="risk"
                                            name="risk"
                                            placeholder="This is why ..."
                                            rows="5"
                                            maxLength="440"
                                                style={{ resize: 'none' }}
                                                defaultValue={currentClientNewJustification}
                                            onChange={(e) => {
                                                setClientNewJustification(e.target.value);
                                            }}
                                        >
                                        </textarea>
                                        <button
                                                className="bg-white hover:bg-frost-lighter dark:bg-[#4B5563] dark:hover:bg-opaque-0.6 mb-2 mt-0.5 w-full dark:text-[#191C1F] rounded-lg h-7 text-sm"
                                            type="submit"
                                            onClick={() => {
                                                handleJustificationClick();
                                                setClientNewJustification('');
                                            }}
                                        >
                                            <span className="dark:text-gray-400">Submit Rationale</span>
                                        </button>
                                    </div> : ''
                                }
                                <div className={`mb-1 ${currentTotalJustification.length > 3 ? 'overflow-y-auto  h-33' : currentTotalJustification.length !== 0 ? 'mb-2.75' : ''}`}>
                                    <table>
                                        {props.isLoading ? ''
                                            : currentTotalJustification.map((justification, index) =>
                                                <tr className='tootlip '>
                                                    <td className="w-12">
                                                        <FontAwesomeIcon icon={faCircleRight} className='h-5 mt-2 mb-0.5 rounded-full text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                                                    </td>
                                                    <td className="w-115 tooltipnote">
                                                        {editJustification && (index === editJustificationIndex) ?
                                                            <div className="inline-flex">
                                                                <input
                                                                    type="text"
                                                                    placeholder={justification}
                                                                    defaultValue={currentEditing == '' ? justification : currentEditing}
                                                                    className={` bg-gray-350  dark:bg-[#262d33] h-10 rounded-xl border-2  w-112.5 ${toggle ? 'border-frost' : 'border-gray-600'}`}
                                                                    onChange={(e) => {
                                                                        setJustificationEdited(e.target.value);
                                                                        setCurrentEditing(e.target.value);
                                                                    }}
                                                                >
                                                                </input>
                                                            </div>
                                                            : editJustification && (index !== editJustificationIndex) ?
                                                                <span className='overflow-lines'>{justification}</span>
                                                                : <span className='overflow-lines -ml-4'>{justification}</span>
                                                        }
                                                        <span className='tooltipnotetext'>{justification}</span>
                                                    </td>
                                                    {!editJustification ?
                                                        <td>
                                                            <button
                                                                onClick={() => {
                                                                    setNoteTyping(false);
                                                                    setJustificationTyping(false);
                                                                    setMoodTyping(false);
                                                                    setRemoveJustification(false);
                                                                    setRemoveJustificationIndex(-1);
                                                                    setEditJustificationIndex(index);
                                                                    setEditJustification(true);
                                                                    setCurrentEditing('');
                                                                }}
                                                            >
                                                                <FontAwesomeIcon icon={faPenToSquare} className=' w-3 h-7 ml-1 p-1 px-2 rounded-full dark:text-blue-500 bg-gray-350 hover:bg-frost text-gray-500 dark:bg-[#191C1F] dark:hover:bg-gray-800 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                                                            </button>
                                                        </td>
                                                        : editJustification && (index == editJustificationIndex) ? <div className="h-8 w-14 bg-gray-350 dark:bg-[#191C1F] rounded-full px-1 py-1 mt-1 ml-0.5">
                                                            <button
                                                                onClick={() => {
                                                                    if (editedJustification == '') {
                                                                        handleJustificationEdit(index, justification);
                                                                    }
                                                                    else {
                                                                        handleJustificationEdit(index, editedJustification);
                                                                    }
                                                                    setJustificationTyping(false);
                                                                    setRemoveJustification(false);
                                                                    setRemoveJustificationIndex(-1);
                                                                    setEditJustificationIndex(-1);
                                                                    setEditJustification(false);
                                                                    setCurrentEditing('');
                                                                }}
                                                            >
                                                                <FontAwesomeIcon icon={faCircleCheck} style={{ color: toggle ? '#00D354' : '#00FF94' }} className=' w-4 p-1 rounded-full hover:bg-frost dark:text-blue-500 text-gray-500 dark:bg-[#191C1F] dark:hover:bg-gray-800 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                                                            </button>
                                                            <button
                                                                onClick={() => {
                                                                    setJustificationTyping(false);
                                                                    setRemoveJustification(false);
                                                                    setRemoveJustificationIndex(-1);
                                                                    setEditJustificationIndex(-1);
                                                                    setEditJustification(false);
                                                                    setCurrentEditing('');
                                                                }}
                                                            >
                                                                <FontAwesomeIcon icon={faCircleXmark} style={{ color: '#CB263A' }} className=' w-4 p-1 rounded-full hover:bg-frost  dark:text-blue-500 text-gray-500 dark:bg-[#191C1F] dark:hover:bg-gray-800 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                                                            </button>
                                                        </div> : editJustification && (index !== editJustificationIndex) ?
                                                            <button
                                                                onClick={() => {
                                                                    setJustificationTyping(false);
                                                                    setRemoveJustification(false);
                                                                    setRemoveJustificationIndex(-1);
                                                                    setEditJustificationIndex(index);
                                                                        setEditJustification(true);
                                                                        setCurrentEditing('');
                                                                }}
                                                            >
                                                                    <FontAwesomeIcon icon={faPenToSquare} className=' w-3 h-6 mt-1 p-1 px-5.5 ml-0.5 rounded-full dark:text-blue-500 text-gray-500 bg-gray-350 hover:bg-frost dark:bg-[#191C1F] dark:hover:bg-gray-800 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                                                            </button>
                                                            : ''
                                                    }
                                                    {removeJustification && (index == removeJustificationIndex) ?
                                                        <div className="h-8 w-14 bg-gray-350 dark:bg-[#191C1F] rounded-full px-1 py-1 mt-1 ml-0.5">
                                                            <button
                                                                onClick={() => {
                                                                    setJustificationTyping(false);
                                                                    setEditJustificationIndex(-1);
                                                                    setEditJustification(false);
                                                                    handleJustificationRemove(index);
                                                                    setRemoveJustificationIndex(-1);
                                                                    setRemoveJustification(false);
                                                                }}
                                                            >
                                                                <FontAwesomeIcon icon={faCircleCheck} style={{ color: toggle ? '#00D354' : '#00FF94' }} className=' w-4 p-1 rounded-full dark:text-blue-500 hover:bg-frost text-gray-500 dark:bg-[#191C1F] dark:hover:bg-gray-800 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                                                            </button>
                                                            <button
                                                                onClick={() => {
                                                                    setJustificationTyping(false);
                                                                    setEditJustificationIndex(-1);
                                                                    setEditJustification(false);
                                                                    setRemoveJustificationIndex(-1);
                                                                    setRemoveJustification(false);
                                                                }}
                                                            >
                                                                <FontAwesomeIcon icon={faCircleXmark} style={{ color: '#CB263A' }} className=' w-4 p-1 rounded-full dark:text-blue-500 hover:bg-frost text-gray-500 dark:bg-[#191C1F] dark:hover:bg-gray-800 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                                                            </button>
                                                        </div>
                                                        : removeJustification && (index !== removeJustificationIndex) ?
                                                            <td>
                                                                <button
                                                                    onClick={() => {
                                                                        setJustificationTyping(false);
                                                                        setEditJustificationIndex(-1);
                                                                        setEditJustification(false);
                                                                        setRemoveJustificationIndex(index);
                                                                        setRemoveJustification(true);
                                                                        setCurrentEditing('');
                                                                    }}
                                                                >
                                                                    <FontAwesomeIcon icon={faTrashCan} style={{ color: '#CB263A' }} className=' w-3 h-6 mt-1 p-1 mr-1 px-5.5 ml-0.5 rounded-full bg-gray-350 hover:bg-frost dark:text-blue-500 text-gray-500 dark:bg-[#191C1F] dark:hover:bg-[#371F1F] transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                                                                </button>
                                                            </td>
                                                            :
                                                            <td>
                                                                <button
                                                                    onClick={() => {
                                                                        setNoteTyping(false);
                                                                        setJustificationTyping(false);
                                                                        setMoodTyping(false);
                                                                        setEditJustificationIndex(-1);
                                                                        setEditJustification(false);
                                                                        setRemoveJustificationIndex(index);
                                                                        setRemoveJustification(true);
                                                                        setCurrentEditing('');
                                                                    }}
                                                                >
                                                                    <FontAwesomeIcon icon={faTrashCan} style={{ color: '#CB263A' }} className=' w-3 h-7 ml-1 mr-2 p-1 px-2 rounded-full bg-gray-350 hover:bg-frost text-gray-500 dark:bg-[#191C1F] dark:hover:bg-[#371F1F] transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                                                                </button>
                                                            </td>
                                                    }
                                                </tr>
                                            )
                                        }
                                    </table>
                                </div>
                            </div> : ''
                        }
                    </div>
                    <div className="py-2">
                        <button
                                className="block bg-gray-350 dark:bg-[#41454E] px-2 w-full rounded text-lg text-center -mt-0.5 dark:hover:bg-opaque-0.6"
                            onClick={() => {
                                setMoodView(!viewMood);
                            }}
                        >
                            <table>
                                <tr>
                                        <td><FontAwesomeIcon icon={props.viber == 1 ? faFaceFrownOpen : (props.viber == 2 ? faFaceMeh : faFaceSmileBeam)} className=' flex-shrink-0 h-3 mb-0.5 mr-1.8 rounded-full text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white ml-2' /></td>
                                        <td><p classname="inline-block text-gray-500 dark:text-gray-400">Mood</p></td>
                                    <td>{viewMood ? <FontAwesomeIcon icon={faCaretUp} className='flex-shrink-0 h-3 mb-0.5 rounded-full text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white ml-2' />
                                        : <FontAwesomeIcon icon={faCaretDown} className=' flex-shrink-0 h-3 mb-0.5 rounded-full text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white ml-2' />
                                    }</td>
                                </tr>
                            </table>
                        </button>
                        {viewMood ?
                                <div className={`bg-blue-150 dark:bg-[#11161B] rounded-2xl border ${toggle ? 'border-blue-500' :'border-gray-600'} px-3 mt-2 mb-2 `}>
                                <button
                                        className='bg-med-gray-100 dark:bg-[#262d33] hover:text-frost hover:bg-frost dark:hover:bg-gray-700 dark:hover:text-gray-300 rounded-lg w-full h-10 mt-3 mb-2'
                                    onClick={(e) => {
                                        if (typeMood == false) {
                                            setEditNoteIndex(-1);
                                            setEditNote(false);
                                            setRemoveNoteIndex(-1);
                                            setRemoveNote(false);
                                            setEditJustificationIndex(-1);
                                            setEditJustification(false);
                                            setRemoveJustificationIndex(-1);
                                            setRemoveJustification(false);
                                            setEditMoodIndex(-1);
                                            setEditMood(false);
                                            setRemoveMoodIndex(-1);
                                            setRemoveMood(false);
                                        }
                                        else {
                                            setClientNewMood('');
                                        }
                                        setMoodTyping(!typeMood);
                                    }}
                                    onMouseEnter={handleMoodMouseEnter}
                                    onMouseLeave={handleMoodMouseLeave}
                                >
                                    {props.isLoading ? '' : typeMood ?
                                            <p className="inline-flex "><FontAwesomeIcon icon={faMinus} style={{ background: moodButtonHover ? (toggle ? '#D91E34' : '#CB263A') : (toggle ? (toggle ? '#FFF' : '#191C1F') : (toggle ? '#D91E34' : '#CB263A')), color: moodButtonHover ? '#191C1F' : '#CB263A' }} className='flex-shrink-0 w-3 h-3 p-1 mr-1 mt-1.5 rounded-full text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' /><p className="ml-1 mt-1"> Cancel New Feedback</p></p>
                                            : <p className="inline-flex "><FontAwesomeIcon icon={faPlus} style={{ background: moodButtonHover ? (toggle ? '#00D354' : '#00FF94') : (toggle ? '#DAE2F9' : 'rgb(45 55 59)'), color: moodButtonHover ? (toggle ? '#FFF' : '#191C1F') : (toggle ? '#00D354' : '#00FF94') }} className='flex-shrink-0 w-3 h-3 p-1 mr-1 mt-1.5 rounded-full text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' /><p className="ml-1 mt-1"> Add New Feedback</p></p>}
                                </button>
                                {props.isLoading ? '' : typeMood ?
                                        <div className="bg-gray-350 dark:bg-[#262d33] rounded-xl mt-1 mb-4 px-2">
                                        <textarea
                                                className={`dark:bg-[#262d33] mt-2 rounded border-2 w-full ${toggle ? 'border-blue-500' :'border-gray-600'}`}
                                            id="mood"
                                            name="mood"
                                            placeholder="The client is ..."
                                            rows="5"
                                            maxLength="440"
                                                style={{ resize: 'none' }}
                                                defaultValue={currentClientNewMood}
                                            onChange={(e) => {
                                                setClientNewMood(e.target.value);
                                            }}
                                        >
                                        </textarea>
                                        <button
                                                className="bg-white hover:bg-frost-lighter dark:bg-[#4B5563] dark:hover:bg-opaque-0.6 mb-2 mt-0.5 w-full dark:text-[#191C1F] rounded-lg h-7 text-sm"
                                            type="submit"
                                            onClick={() => {
                                                handleMoodClick();
                                                setClientNewMood('');
                                            }}
                                        >
                                            <span className="dark:text-gray-400">Submit Feedback</span>
                                        </button>
                                    </div> : ''
                                }
                                <div className={`mb-1 ${currentTotalMood.length > 3 ? 'overflow-y-auto  h-33' : currentTotalMood.length !== 0 ? 'mb-2.75' : ''}`}>
                                    <table>
                                        {props.isLoading ? ''
                                            : currentTotalMood.map((mood, index) =>
                                                <tr className='tootlip '>
                                                    <td className="w-12">
                                                        <FontAwesomeIcon icon={faCircleRight} className='h-5 mt-2 mb-0.5 rounded-full text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                                                    </td>
                                                    <td className="w-115 tooltipnote">
                                                        {editMood && (index === editMoodIndex) ?
                                                            <div className="inline-flex">
                                                                <input
                                                                    type="text"
                                                                    placeholder={mood}
                                                                    defaultValue={currentEditing == '' ? mood : currentEditing}
                                                                    className={` bg-gray-350  dark:bg-[#262d33] h-10 rounded-xl border-2 w-112.5 ${toggle ? 'border-frost' : 'border-gray-600'}`}
                                                                    onChange={(e) => {
                                                                        setMoodEdited(e.target.value);
                                                                        setCurrentEditing(e.target.value);
                                                                    }}
                                                                >
                                                                </input>
                                                            </div>
                                                            : editMood && (index !== editMoodIndex) ?
                                                                <span className='overflow-lines'>{mood}</span>
                                                                : <span className='overflow-lines -ml-4'>{mood}</span>
                                                        }
                                                        <span className='tooltipnotetext'>{mood}</span>
                                                    </td>
                                                    {!editMood ?
                                                        <td>
                                                            <button
                                                                onClick={() => {
                                                                    setNoteTyping(false);
                                                                    setJustificationTyping(false);
                                                                    setMoodTyping(false);
                                                                    setRemoveMood(false);
                                                                    setRemoveMoodIndex(-1);
                                                                    setEditMoodIndex(index);
                                                                    setEditMood(true);
                                                                    setCurrentEditing('');
                                                                }}
                                                            >
                                                                <FontAwesomeIcon icon={faPenToSquare} className=' w-3 h-7 ml-1 p-1 px-2 rounded-full dark:text-blue-500 bg-gray-350 hover:bg-frost text-gray-500 dark:bg-[#191C1F] dark:hover:bg-gray-800 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                                                            </button>
                                                        </td>
                                                        : editMood && (index == editMoodIndex) ? <div className="h-8 w-14 bg-gray-350 dark:bg-[#191C1F] rounded-full px-1 py-1 mt-1 ml-0.5">
                                                            <button
                                                                onClick={() => {
                                                                    if (editedMood == '') {
                                                                        handleMoodEdit(index, mood);
                                                                    }
                                                                    else {
                                                                        handleMoodEdit(index, editedMood);
                                                                    }
                                                                    setMoodTyping(false);
                                                                    setRemoveMood(false);
                                                                    setRemoveMoodIndex(-1);
                                                                    setEditMoodIndex(-1);
                                                                    setEditMood(false);
                                                                    setCurrentEditing('');
                                                                }}
                                                            >
                                                                <FontAwesomeIcon icon={faCircleCheck} style={{ color: toggle ? '#00D354' : '#00FF94' }} className=' w-4 p-1 hover:bg-frost  rounded-full dark:text-blue-500 text-gray-500 dark:bg-[#191C1F] dark:hover:bg-gray-800 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                                                            </button>
                                                            <button
                                                                onClick={() => {
                                                                    setMoodTyping(false);
                                                                    setRemoveMood(false);
                                                                    setRemoveMoodIndex(-1);
                                                                    setEditMoodIndex(-1);
                                                                    setEditMood(false);
                                                                    setCurrentEditing('');
                                                                }}
                                                            >
                                                                <FontAwesomeIcon icon={faCircleXmark} style={{ color: '#CB263A' }} className=' w-4 p-1 hover:bg-frost  rounded-full dark:text-blue-500 text-gray-500 dark:bg-[#191C1F] dark:hover:bg-gray-800 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                                                            </button>
                                                        </div> : editMood && (index !== editMoodIndex) ?
                                                            <button
                                                                onClick={() => {
                                                                    setMoodTyping(false);
                                                                    setRemoveMood(false);
                                                                    setRemoveMoodIndex(-1);
                                                                    setEditMoodIndex(index);
                                                                        setEditMood(true);
                                                                        setCurrentEditing('');
                                                                }}
                                                            >
                                                                    <FontAwesomeIcon icon={faPenToSquare} className=' w-3 h-6 mt-1 p-1 px-5.5 ml-0.5 rounded-full dark:text-blue-500  bg-gray-350 hover:bg-frost  text-gray-500 dark:bg-[#191C1F] dark:hover:bg-gray-800 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                                                            </button>
                                                            : ''
                                                    }
                                                    {removeMood && (index == removeMoodIndex) ?
                                                        <div className="h-8 w-14 bg-gray-350 dark:bg-[#191C1F] rounded-full px-1 py-1 mt-1.5 ml-0.5">
                                                            <button
                                                                onClick={() => {
                                                                    setMoodTyping(false);
                                                                    setEditMoodIndex(-1);
                                                                    setEditMood(false);
                                                                    handleMoodRemove(index);
                                                                    setRemoveMoodIndex(-1);
                                                                    setRemoveMood(false);
                                                                }}
                                                            >
                                                                <FontAwesomeIcon icon={faCircleCheck} style={{ color: toggle ? '#00D354' : '#00FF94' }} className=' w-4 p-1 rounded-full dark:text-blue-500 hover:bg-frost  text-gray-500 dark:bg-[#191C1F] dark:hover:bg-gray-800 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                                                            </button>
                                                            <button
                                                                onClick={() => {
                                                                    setMoodTyping(false);
                                                                    setEditMoodIndex(-1);
                                                                    setEditMood(false);
                                                                    setRemoveMoodIndex(-1);
                                                                    setRemoveMood(false);
                                                                }}
                                                            >
                                                                <FontAwesomeIcon icon={faCircleXmark} style={{ color: '#CB263A' }} className=' w-4 p-1 rounded-full dark:text-blue-500 hover:bg-frost  text-gray-500 dark:bg-[#191C1F] dark:hover:bg-gray-800 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                                                            </button>
                                                        </div>
                                                        : removeMood && (index !== removeMoodIndex) ?
                                                            <td>
                                                                <button
                                                                    onClick={() => {
                                                                        setMoodTyping(false);
                                                                        setEditMoodIndex(-1);
                                                                        setEditMood(false);
                                                                        setRemoveMoodIndex(index);
                                                                        setRemoveMood(true);
                                                                        setCurrentEditing('');
                                                                    }}
                                                                >
                                                                    <FontAwesomeIcon icon={faTrashCan} style={{ color: '#CB263A' }} className=' w-3 h-6 mt-1 p-1 mr-1 px-5.5 ml-0.5 bg-gray-350 hover:bg-frost  rounded-full dark:text-blue-500 text-gray-500 dark:bg-[#191C1F] dark:hover:bg-[#371F1F] transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                                                                </button>
                                                            </td>
                                                            :
                                                            <td>
                                                                <button
                                                                    onClick={() => {
                                                                        setNoteTyping(false);
                                                                        setJustificationTyping(false);
                                                                        setMoodTyping(false);
                                                                        setEditMoodIndex(-1);
                                                                        setEditMood(false);
                                                                        setRemoveMoodIndex(index);
                                                                        setRemoveMood(true);
                                                                        setCurrentEditing('');
                                                                    }}
                                                                >
                                                                    <FontAwesomeIcon icon={faTrashCan} style={{ color: '#CB263A' }} className=' w-3 h-7 ml-1 mr-2 p-1 px-2 rounded-full  bg-gray-350 hover:bg-frost text-gray-500 dark:bg-[#191C1F] dark:hover:bg-[#371F1F] transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                                                                </button>
                                                            </td>
                                                    }
                                                </tr>
                                            )
                                        }
                                    </table>
                                </div>
                            </div> : ''
                        }
                    </div>
                    </div>
                </div>
        </div>
        
    );
    


    /*
    function handleMouseDown(e) {
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
        setPosition({
            x: e.clientX - e.target.offsetLeft,
            y: e.clientY - e.target.offsetTop,
        });
        setIsDragging(true);
        e.preventDefault();
        
    }

    function handleMouseMove(e) {
        e.preventDefault();
        if (!isDragging) {
            return;
        }
        e.preventDefault();
        setPosition({
            x: e.clientX - position.x,
            y: e.clientY - position.y
        });
        
    }

    function handleMouseUp(e) {
        e.preventDefault();
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
        setIsDragging(false);
    }
    */
    //return memoizedPopUp;
}
