import React, { useState, useEffect, FormControl } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFaceMeh, faEye, faNoteSticky, faEyeSlash, faFaceFrownOpen, faLeftRight, faArrowTrendUp, faArrowTrendDown, faFaceSmileBeam} from '@fortawesome/free-solid-svg-icons';
//import { Notes } from './Notes';
import { Popup } from './Popup';
import { UpdatesPopUp } from './UpdatesPopUp';
import { ThemeContext } from "./../../components/ThemeContext/ThemeContext";


export const ClientStatus = (props) => {
    const clientStatuses = [{ clientName: "Hyperscale", clientRisk: "yg", clientSatisfaction: 3 },
                            { clientName: "Amazon UK", clientRisk: "yr", clientSatisfaction: 2 },
                            { clientName: "UPS", clientRisk: "ry", clientSatisfaction: 1 },
                            { clientName: "EHI", clientRisk: "gy", clientSatisfaction: 3 },
                            { clientName: "NewClient", clientRisk: "gg", clientSatisfaction: 2 }];
    const clientsWithJustification = [{ clientName: "Hyperscale", notes: ["Latest WFM test has passed"] },
                                        { clientName: "Amazon UK", notes: ["Latest WFM test has passed"] },
                                        { clientName: "UPS", notes: [] },
                                        { clientName: "EHI", notes: ["Waiting for payroll test completion"] },
                                        { clientName: "NewClient", notes: ["Waiting for payroll test completion, Latest WFM test has passed"] }];
    const clientsWithSatisfaction = [{ clientName: "Hyperscale", notes: ["The Client is very confident about this - move onto the next task"] },
                                        { clientName: "Amazon UK", notes: ["The client seesm to be hesitant about this - report to this person"] },
                                        { clientName: "UPS", notes: ["The client needs this to be looking like this in a few days"] },
                                        { clientName: "EHI", notes: ["EHI is extremely happy with this - just focus on this aspect"] },
                                        { clientName: "NewClient", notes: ["NewClient suggests that this is what we should be doing"] }];
    const clientsWithNotes = [{ clientName: "Hyperscale", notes: ["Hyperscale wants it to be like this", "Add so and so items", "They are satisfied with what they see but want this value", "Hyperscale recommends we look at this source"] },
                                { clientName: "Amazon UK", notes: ["Amazon UK approves this methodology", "This is what they said to Perf Eng"] },
                                { clientName: "UPS", notes: ["UPS likes this", "They did so and so and want us to do so and so", "This value cannot be reached"] },
                                { clientName: "EHI", notes: ["They can ask for this", "EHI is picky about this", "This needs updating", "Tell them why this is this way"] },
                                { clientName: "NewClient", notes: ["Here's what they need to work on and have it done"] }];

    const [currentRisk, setRisk] = useState(clientStatuses[0].clientRisk);
    const [currentSatisfaction, setSatisfaction] = useState(clientStatuses[0].clientSatisfaction);
    const [riskJustificationView, setJustificationView] = useState(false);
    const [viewClientMood, setMoodView] = useState(false);
    const [viewNotes, setNoteView] = useState(false);
    const [viewUpdates, setUpdatesView] = useState(false);
    const { toggle } = React.useContext(ThemeContext);



    const [loading, setLoading] = useState(props.isLoading);

    const clientRiskAssessment = loading ? {} :
        (clientStatuses.filter(clientInfo => clientInfo.clientName === props.selectedClient))[0].clientRisk;

    const clientSatisfactionNum = loading ? {} :
        (clientStatuses.filter(clientInfo => clientInfo.clientName === props.selectedClient))[0].clientSatisfaction;

    function getColorRank(colorProfiles) {
        let current = colorProfiles[0];
        let future = colorProfiles[1];
        let currentRank = 0;
        let futureRank = 0;
        switch (current) {
            case 'y':
                currentRank = 1;
                break;
            case 'g':
                currentRank = 2;
                break;
            case 'r':
                currentRank = 0;
                break;
        }
        switch (future) {
            case 'y':
                futureRank = 1;
                break;
            case 'g':
                futureRank = 2;
                break;
            case 'r':
                futureRank = 0;
                break;
        }
        if (currentRank === futureRank) {
            return 'equal';
        }
        else if (currentRank > futureRank) {
            return 'lower';
        }
        else if (currentRank < futureRank) {
            return 'greater';
        }
    }

    function getColor(colorProfile) {
        switch (colorProfile) {
            case 'r':
                return toggle ?'#D91E34':'#FF0000';
            case 'y':
                return toggle ?'#FFB800':'#FFD600';
            case 'g':
                return toggle ?'#00D354':'#00FF94';
        }
    }

    function getTrendProjection(projection) {
        let current = projection[0];
        let future = projection[1];
        switch (current) {
            case 'y':
                current = 'YELLOW';
                break;
            case 'g':
                current = 'GREEN';
                break;
            case 'r':
                current = 'RED';
                break;
        }
        switch (future) {
            case 'y':
                future = 'YELLOW';
                break;
            case 'g':
                future = 'GREEN';
                break;
            case 'r':
                future = 'RED';
                break;
        }
        return (
            <>
                <p style={{ color: getColor(projection[0]) }}>{current}</p>Trending<p style={{ color: getColor(projection[1]) }}>{future}</p>
            </>
        );
    }

    function getClientVibe(satisfactionStatus) {
        const vibeMapper = {
            1: <><span>{props.selectedClient} is </span><span style={{ color: toggle ? '#D91E34' : '#FF0000' }}>Dissatisfied</span></>,
            2: <><span>{props.selectedClient} is </span><span style={{ color: toggle ? '#FFB800' : '#F8EE00' }}>Neutral</span></>,
            3: <><span>{props.selectedClient} is </span><span style={{ color: toggle ?'#00D354':'#00FF94' }}>Confident</span></>
        };
        return vibeMapper[satisfactionStatus];
    }

    useEffect(() => {
        setLoading(true);
        setRisk(clientRiskAssessment);
        setSatisfaction(clientSatisfactionNum);
        setJustificationView(false);
        setMoodView(false);
        setUpdatesView(false);
        setLoading(false);
        setNoteView(false);
    }, [props.selectedClient]);

    if (loading) return <div>Loading Status...</div>

    return (
        <div className={`block rounded-xl bg-[#C0D0E8] dark:bg-button-card text-gray-500 py-3 h-48 my-2 mx-2 w-61.6  ${toggle ? ' shadow-frost' :'shadow - dark'}`} >
            <span className={`block text-xl text-center ${toggle ?'text-bg-[#191C1F]':'text-white'}`}>Status</span>
            <button
                className="inline-flex ml-3.5 dark:text-gray-400 bg-gray-350 dark:bg-[#262d33] dark:hover:bg-opaque-0.6 rounded-lg mt-4 h-28 justify-center mx-auto"
                onClick={(e) => {
                    setUpdatesView(!viewUpdates);
                    setNoteView(!viewNotes);
                }}
            >
                <div
                    className='tooltip h-28 justify-center w-16 ml-1 mt-4'
                >
                    <p className='text-sm text-center uppercase text-gray-500 dark:text-gray-400'>Notes</p>
                    {/*<FontAwesomeIcon icon={faNoteSticky} className='flex-shrink-0 w-5 h-4 mr-1 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                    */ }
                    {loading ? ''
                        : viewNotes ? <FontAwesomeIcon icon={faEye} style={{ border: toggle ? '3px solid #FFF' : '5px solid #191C1F', color: toggle ? '#FFF' : '#262d33' }} className={`${toggle ? 'mt-3.1' :'mt-2.5'} p-2 flex-shrink-0 w-5 rounded-full h-5 transition bg-blue-400 dark:bg-blue-600 duration-75 group-hover:text-gray-900 dark:group-hover:text-white`} />
                            : <FontAwesomeIcon icon={faEyeSlash} style={{ border: toggle ? '3px solid #FFF' : '5px solid #191C1F', color: toggle ? '#FFF' : '#262d33' }} className={`${toggle ? 'mt-3.1' :'mt-2.5'} p-2 flex-shrink-0 w-5 rounded-full h-5 transition bg-blue-400 dark:bg-blue-600 duration-75 group-hover:text-gray-900 dark:group-hover:text-white`} />
                    }
                    {/*
                    <FontAwesomeIcon icon={faMapLocationDot} style={{ color: getColor(currentRisk[0]) }} className='p-2 ml-3 flex-shrink-0 w-12 h-10 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white' />
                    <FontAwesomeIcon icon={faMapPin} style={{ color: getColor(currentRisk[1]) }} className='p-2 pr-0 -ml-3 flex-shrink-0 w-12 h-10  transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white' />
                    <FontAwesomeIcon icon={faArrowTrendUp} style={{ color: '#F00' }} className='p-2 ml-1 mt-0.5 dark:bg-[#262d33] rounded-full flex-shrink-0 w-12 h-12 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white' />
                    */ }
                    <span className={`${toggle ? 'tooltiptextfrost' :'tooltiptext'} mt-20 -ml-30`}>{loading ? '' : `${viewNotes ? 'Hide' : 'Show'} Notes`}</span>
                </div >
                <div
                    className='tooltip h-28 justify-center w-18 mt-4'
                >

                    <p className='text-sm text-center uppercase text-gray-500 dark:text-gray-400'>Risk</p>
                    {loading ? ''
                        : getColorRank(currentRisk) === 'greater' ? <FontAwesomeIcon icon={faArrowTrendUp} style={{ border: toggle ? '3px solid #FFF' : '5px solid #191C1F', backgroundColor: toggle ? '#FFF' : '', color: toggle ? '#FFF' : '#262d33', background: `linear-gradient(to right,${getColor(currentRisk[0])}, ${getColor(currentRisk[1])})` }} className={`${toggle ? 'mt-3.1' :'mt-2.5'} mx-1 py-1 flex-shrink-0 w-12 rounded-full h-7 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white`} />
                            : getColorRank(currentRisk) === 'lower' ? <FontAwesomeIcon icon={faArrowTrendDown} style={{ border: toggle ? '3px solid #FFF' : '5px solid #191C1F', backgroundColor: toggle ? '#FFF' : '', color: toggle ? '#FFF' : '#262d33', background: `linear-gradient(to right,${getColor(currentRisk[0])}, ${getColor(currentRisk[1])})` }} className={`${toggle ? 'mt-3.1' : 'mt-2.5'} mx-1 py-1 flex-shrink-0 w-12 rounded-full h-7 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white`} />
                                : <FontAwesomeIcon icon={faLeftRight} style={{ border: toggle ? '3px solid #FFF' : '5px solid #191C1F', backgroundColor: toggle ? '#FFF' : '', color: toggle ? '#FFF' : '#262d33', background: `linear-gradient(to right,${getColor(currentRisk[0])}, ${getColor(currentRisk[1])})` }} className={`${toggle ? 'mt-3.1' : 'mt-2.5'} mx-1 py-1 flex-shrink-0 w-12 rounded-full h-7 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white`} />}
                    {/*
                            <FontAwesomeIcon icon={faMapLocationDot} style={{ color: getColor(currentRisk[0]) }} className='p-2 ml-3 flex-shrink-0 w-12 h-10 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white' />
                            <FontAwesomeIcon icon={faMapPin} style={{ color: getColor(currentRisk[1]) }} className='p-2 pr-0 -ml-3 flex-shrink-0 w-12 h-10  transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white' />
                            <FontAwesomeIcon icon={faArrowTrendUp} style={{ color: '#F00' }} className='p-2 ml-1 mt-0.5 dark:bg-[#262d33] rounded-full flex-shrink-0 w-12 h-12 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white' />
                            */ }
                    <span className={`${toggle ?'tooltiptextfrost':'tooltiptext'} mt-13 -ml-30`}>{loading ? '' : getTrendProjection(currentRisk)}</span>
                </div>
                <div
                    className='tooltip mr-1 w-16 h-28 justify-center mt-4'
                    onClick={() => {
                        //setMoodView(!viewClientMood);
                    }}
                >                                                                                                                                                                       
                    <p className='text-sm text-center uppercase text-gray-500 dark:text-gray-400'>Mood</p>
                    {loading ? '' :
                        currentSatisfaction == 1 ? <FontAwesomeIcon icon={faFaceFrownOpen} style={{ border: toggle ? '3px solid #FFF' : '5px solid #191C1F', backgroundColor: toggle ? '#FFF' : '', color: toggle ? '#D91E34' : '#F00' }} className={`${toggle ? 'mt-3.1' : 'mt-2.5'} mb-3 dark:bg-[#262d33] rounded-full flex-shrink-0  h-8 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white`} />
                            : currentSatisfaction == 2 ? <FontAwesomeIcon icon={faFaceMeh} style={{ border: toggle ? '3px solid #FFF' : '5px solid #191C1F', backgroundColor: toggle ? '#FFF' : '', color: toggle ? '#FFB800' : '#FFD600' }} className={`${toggle ? 'mt-3.1' : 'mt-2.5'} mb-3 dark:bg-[#262d33] rounded-full flex-shrink-0  h-8 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white`} />
                                : <FontAwesomeIcon icon={faFaceSmileBeam} style={{ border: toggle ? '3px solid #FFF' : '5px solid #191C1F', backgroundColor: toggle ? '#FFF' : '', color: toggle ? '#00D354' : '#00FF94' }} className={`${toggle ? 'mt-3.1' : 'mt-2.5'} mb-3 dark:bg-[#262d33] rounded-full flex-shrink-0  h-8 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white`} />
                    }
                    <span className={`${toggle ?'tooltiptextfrost':'tooltiptext'} mt-20 -ml-20`}>
                        {loading ? '' : getClientVibe(currentSatisfaction)}
                    </span>
                </div>
                {/* }
                <Popup selectedClient={props.selectedClient} popupContent={clientsWithJustification} itemType={'Justification'} isLoading={loading} isOpen={riskJustificationView} setIsOpen={setJustificationView} title={'Justification'} contentManagement={'Rationale'} />
                <Popup selectedClient={props.selectedClient} popupContent={clientsWithSatisfaction} itemType={'Mood'} isLoading={loading} isOpen={viewClientMood} setIsOpen={setMoodView} title={'Satisfaction'} contentManagement={'Feedback'} />
                <Popup selectedClient={props.selectedClient} popupContent={clientsWithNotes} itemType={'Note'} isLoading={loading} isOpen={viewNotes} setIsOpen={setNoteView} title={'Notes and Alerts'} contentManagement={'Note'} />
                */}
            </button>
            <UpdatesPopUp selectedClient={props.selectedClient} notesContent={clientsWithNotes} riskContent={clientsWithJustification} moodContent={clientsWithSatisfaction} isOpen={viewUpdates} setIsOpen={setUpdatesView} trender={getColorRank(currentRisk)} viber={currentSatisfaction} />
        </div>
        );
}
