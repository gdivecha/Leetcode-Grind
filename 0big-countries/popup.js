import React, { useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbtack, faTrashCan, faXmark, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

import Draggable from 'react-draggable';

export const Popup = (props) => {

    const [position, setPosition] = useState({ x: 100, y: 100 });
    //const [isDragging, setIsDragging] = useState(false);

    const clientsWithNotes = props.popupContent;

    const clientNotes = props.isLoading ? [] :
        (clientsWithNotes.filter(clientInfo => clientInfo.clientName === props.selectedClient))[0].notes;

    const [currentTotalNotes, setTotalNotes] = useState(clientNotes);
    const [noteButtonHover, setNoteHover] = useState(false);
    const [currentClientNewNote, setClientNewNote] = useState('');
    const [typeNote, setNoteTyping] = useState(false);
    const [isDraggable, setIsDraggable] = useState(true);

    useEffect(() => {
        setTotalNotes(clientNotes);
    }, [props.selectedClient]);

    useEffect(() => {
        setNoteTyping(false);
        setIsDraggable(true);
    }, [props.isOpen]);

    function handleClick() {
        document.getElementById("note").value = ""
        setTotalNotes([...currentTotalNotes, currentClientNewNote]);
        //console.log(currentTotalNotes);
        setNoteTyping(!typeNote);
    }

    function handleRemove(index) {
        const list = [...currentTotalNotes];
        list.splice(index, 1);
        setTotalNotes(list);
    }

    function handleMouseEnter() {
        setNoteHover(true);
    }

    function handleMouseLeave() {
        setNoteHover(false);
    }

    return (
        props.isOpen &&
        isDraggable &&
        <Draggable
            position={position}
            onStop={(event, data) => {
                setPosition({ x: data.x, y: data.y });
                }}
        >
                <div className='z-90 absolute top-10 left-18 block border-4 border-gray-600 rounded-lg dark:bg-button-card text-gray-500 p-4 h-64 mt-5 px-5 w-64.5' >
                    <button
                        className='absolute top-0 left-11 dark:bg-[#191C1F] hover:outline-[#191C1F] dark:hover:text-gray-300 border-gray-600 rounded-full w-5 h-7 mt-3 mb-1'
                        onClick={(e) => {
                            setIsDraggable(!isDraggable);
                        }}
                    >
                        <FontAwesomeIcon icon={faThumbtack} style={{ color: '#004FFF' }} className='flex-shrink-0 h-3 mb-0.5 rounded-full text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                    </button>
                    <span className="block text-xl text-center text-white -mt-0.5">{props.title}</span>
                    <button
                        className='absolute top-0 right-11 dark:bg-[#191C1F] hover:outline-red dark:hover:text-gray-300 border-gray-600 rounded-full w-5 h-6 mt-3 mb-2'
                        onClick={(e) => {
                            props.setIsOpen(false);
                        }}
                    >
                        <FontAwesomeIcon icon={faXmark} style={{color: '#CB263A'}} className='flex-shrink-0 mt-1 w-4 h-4 rounded-full text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                    </button>
                    <button
                            className='dark:bg-[#262d33] dark:hover:bg-gray-700 dark:hover:text-gray-300 border-2 border-gray-600 rounded-full w-full h-10 mt-3 mb-2'
                            onClick={(e) => {
                                setNoteTyping(!typeNote);
                            }}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                    >
                            {props.isLoading ? '' : typeNote ?
                                <p className="inline-flex "><FontAwesomeIcon icon={faMinus} style={{ background: noteButtonHover ? '#CB263A' : 'rgb(45 55 59)', color: noteButtonHover ? '#191C1F' : '#CB263A' }} className='flex-shrink-0 w-3 h-3 p-1 mr-1 mt-1.5 rounded-full text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' /><p className="ml-1 mt-1"> Cancel New {props.contentManagement}</p></p>
                                : <p className="inline-flex "><FontAwesomeIcon icon={faPlus} style={{ background: noteButtonHover ? '#00FF94' : 'rgb(45 55 59)', color: noteButtonHover ? '#191C1F' : '#00FF94' }} className='flex-shrink-0 w-3 h-3 p-1 mr-1 mt-1.5 rounded-full text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' /><p className="ml-1 mt-1"> Add New {props.contentManagement}</p></p>}
                    </button>
                    {props.isLoading ? '' : typeNote ?
                        <div className="dark:bg-[#262d33] rounded-xl mt-2 mb-4 px-2">
                            <textarea
                                className="dark:bg-[#262d33] mt-2 rounded border-2 border-gray-600 w-full"
                                id="note"
                                name="note"
                                placeholder="The client requires..."
                                rows="5"
                                maxLength="100"
                                style={{ resize: 'none' }}
                                onChange={(e) => {
                                    setClientNewNote(e.target.value);
                                    //console.log(e.target.value);
                                }}
                                >
                            </textarea>
                            <button
                                className="dark:bg-[#4B5563] mb-2 mt-0.5 w-full dark:text-[#191C1F] rounded-lg h-7 text-sm"
                                type="submit"
                                /* onClick={() => {
                                     document.getElementById("note").value=""
                                     setTotalNotes([...currentTotalNotes, currentClientNewNote]);
                                     setNoteTyping(!typeNote);
                                 }}*/
                                onClick={() => {
                                    handleClick();
                                    setClientNewNote('');
                                }}
                            >
                                <span className="dark:text-gray-400">Submit Request</span>
                            </button>
                        </div>:''
                    }
                    {props.isLoading ? ''
                            : currentTotalNotes.map((note, index) =>
                                <div className='tootlip grid grid-flow-col grid-cols-3'>
                                    <span className="text-white">{index + 1}: </span>
                                    <span className='-ml-12 -mr-8.8 overflow-lines'>{note}</span>
                                
                                    <button
                                        onClick={() => handleRemove(index)}
                                    >
                                        <FontAwesomeIcon icon={faTrashCan} style={{ color: '#CB263A' }} className='flex-shrink-0 w-3 h-7 ml-9 p-1 px-2 rounded-full text-gray-500 dark:bg-[#191C1F] dark:hover:bg-gray-800 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                                    </button>
                                </div>
                        )
                    }
                </div>
        </Draggable>
        || (props.isOpen &&
            !isDraggable) &&
        <div className="absolute z-90" style={{left: position.x, right: position.y }}>
                <div className='absolute top-10 left-18 block border-4 border-gray-600 rounded-lg dark:bg-button-card text-gray-500 p-4 h-64 mt-5 px-5 w-64.5' >
                    <button
                        className='absolute top-0 left-11 dark:bg-[#004FFF] hover:outline-[#004FFF] dark:hover:text-gray-300 border-gray-600 rounded-full w-5 h-7 mt-3 mb-1'
                        onClick={(e) => {
                            setIsDraggable(!isDraggable);
                        }}
                    >
                        <FontAwesomeIcon icon={faThumbtack} style={{ color: '#191C1F' }} className='flex-shrink-0 h-3 mb-0.5 rounded-full text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                    </button>
                    <span className="block text-xl text-center text-white -mt-0.5">{props.title}</span>
                    <button
                        className='absolute top-0 right-11 dark:bg-[#191C1F] hover:outline-red dark:hover:text-gray-300 border-gray-600 rounded-full w-5 h-6 mt-3 mb-2'
                        onClick={(e) => {
                            props.setIsOpen(false);
                        }}
                    >
                        <FontAwesomeIcon icon={faXmark} style={{ color: '#CB263A' }} className='flex-shrink-0 mt-1 w-4 h-4 rounded-full text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                    </button>
                    <button
                        className='dark:bg-[#262d33] dark:hover:bg-gray-700 dark:hover:text-gray-300 border-2 border-gray-600 rounded-full w-full h-10 mt-3 mb-2'
                        onClick={(e) => {
                            setNoteTyping(!typeNote);
                        }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        {props.isLoading ? '' : typeNote ?
                            <p className="inline-flex "><FontAwesomeIcon icon={faMinus} style={{ background: noteButtonHover ? '#CB263A' : 'rgb(45 55 59)', color: noteButtonHover ? '#191C1F' : '#CB263A' }} className='flex-shrink-0 w-3 h-3 p-1 mr-1 mt-1.5 rounded-full text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' /><p className="ml-1 mt-1"> Cancel New {props.contentManagement}</p></p>
                            : <p className="inline-flex "><FontAwesomeIcon icon={faPlus} style={{ background: noteButtonHover ? '#00FF94' : 'rgb(45 55 59)', color: noteButtonHover ? '#191C1F' : '#00FF94' }} className='flex-shrink-0 w-3 h-3 p-1 mr-1 mt-1.5 rounded-full text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' /><p className="ml-1 mt-1"> Add New {props.contentManagement}</p></p>}
                    </button>
                    {props.isLoading ? '' : typeNote ?
                        <div className="dark:bg-[#262d33] rounded-xl mt-2 mb-4 px-2">
                            <textarea
                                className="dark:bg-[#262d33] mt-2 rounded border-2 border-gray-600 w-full"
                                id="note"
                                name="note"
                                placeholder="The client requires..."
                                rows="5"
                                maxLength="100"
                                style={{resize:'none'}}
                                onChange={(e) => {
                                    setClientNewNote(e.target.value);
                                    //console.log(e.target.value);
                                }}
                            >
                            </textarea>
                            <button
                                className="dark:bg-[#4B5563] mb-2 mt-0.5 w-full dark:text-[#191C1F] rounded-lg h-7 text-sm"
                                type="submit"
                                /* onClick={() => {
                                     document.getElementById("note").value=""
                                     setTotalNotes([...currentTotalNotes, currentClientNewNote]);
                                     setNoteTyping(!typeNote);
                                 }}*/
                                onClick={() => {
                                    handleClick();
                                    setClientNewNote('');
                                }}
                            >
                                <span className="dark:text-gray-400">Submit Request</span>
                            </button>
                        </div> : ''
                    }
                    {props.isLoading ? ''
                        : currentTotalNotes.map((note, index) =>
                            <div className='tootlip grid grid-flow-col grid-cols-3'>
                                <span className="text-white">{index + 1}: </span>
                                <span className='-ml-12 -mr-8.8 overflow-lines'>{note}</span>

                                <button
                                    onClick={() => handleRemove(index)}
                                >
                                    <FontAwesomeIcon icon={faTrashCan} style={{ color: '#CB263A' }} className='flex-shrink-0 w-3 h-7 ml-9 p-1 px-2 rounded-full text-gray-500 dark:bg-[#191C1F] dark:hover:bg-gray-800 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                                </button>
                            </div>
                        )
                    }
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
