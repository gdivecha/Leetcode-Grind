import React, { useState, useEffect, FormControl } from 'react';
import { ThemeContext } from "./../../components/ThemeContext/ThemeContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as echarts from 'echarts-for-react';
import { faEye, faNoteSticky, faEyeSlash, faLocationDot, faFaceFrown, faFaceMeh, faFaceFrownOpen, faLeftRight, faEquals, faArrowRightArrowLeft, faMapLocationDot, faMapPin, faArrowTrendUp, faArrowTrendDown, faArrowRight, faBullseye, faCrosshairs, faFaceDizzy, faFaceSmileBeam, faFaceGrimace, faFaceAngry, faFaceGrinStars, faFaceGrinBeamSweat, faAngleDoubleLeft, faAngleLeft, faAngleRight, faAngleDoubleRight, faArrowUp, faArrowDown, faRocket, faPeopleRoof, faIdCard, faBarcode, faGlobe, faBug, faMagnifyingGlassChart, faCircleNodes, faCircleInfo, faRepeat } from '@fortawesome/free-solid-svg-icons';
import Select from 'react-select';
import makeAnimated from 'react-select/animated'
import TestRuns from './../results/analysis/TestRuns';
import { RequestRT, getRequests } from './../results/analysis/RequestRT';
import axios from 'axios';
import { PieChart } from '../../components/chart/PieChart';
import { Label } from 'reactstrap';
import { RecommendedSKU } from './RecommendedSKU';
import { Popup } from './Popup';
import { GoLiveTracker } from './GoLiveTracker';
import { ClientStatus } from './ClientStatus';
import { Information } from './Information';

export const ClientNotes = (props) => {
    const clientsWithNotes = [{ clientName: "Hyperscale", notes: ["Hyperscale wants it to be like this", "Add so and so items", "They are satisfied with what they see but want this value", "Hyperscale recommends we look at this source"] },
    { clientName: "Amazon UK", notes: ["Amazon UK approves this methodology", "This is what they said to Perf Eng"] },
    { clientName: "UPS", notes: ["UPS likes this", "They did so and so and want us to do so and so", "This value cannot be reached"] },
    { clientName: "EHI", notes: ["They can ask for this", "EHI is picky about this", "This needs updating", "Tell them why this is this way"] },
    { clientName: "NewClient", notes: ["Here's what they need to work on and have it done"] }];

    const [loading, setLoading] = useState(props.isLoading);
    const [viewNotes, setNoteView] = useState(false);

    useEffect(() => {
        setLoading(true);
        setNoteView(false);
        setLoading(false);
    }, [props.selectedClient]);

    if (loading) return <div>Loading Notes...</div>

    return (
        <div className='block rounded-xl dark:bg-button-card text-gray-500 p-4 h-48 w-32 my-2 mx-2' >
            <span className="block text-xl text-center text-white -mt-0.5">Notes</span>
            <div className="inline-flex">
                <button
                    onClick={(e) => {
                        setNoteView(!viewNotes);
                    }}
                    className='tooltip dark:text-gray-400 zoom dark:bg-[#262d33] dark:hover:bg-opaque-0.6 rounded-lg mt-4 h-28 p-3 justify-center mx-auto w-24 '
                >
                    <p className='text-sm text-center uppercase'>Display</p>
                    {/*<FontAwesomeIcon icon={faNoteSticky} className='flex-shrink-0 w-5 h-4 mr-1 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                    */ }
                    {loading ? ''
                        : viewNotes ? <FontAwesomeIcon icon={faEye} style={{ border: '5px solid #191C1F', color: '#191C1F' }} className='mt-2 mb-0.8 p-2 flex-shrink-0 w-10 rounded-full h-6 transition dark:bg-blue-600 duration-75 group-hover:text-gray-900 dark:group-hover:text-white' />
                            : <FontAwesomeIcon icon={faEyeSlash} style={{ border: '5px solid #191C1F', color: '#191C1F' }} className='mt-2 mb-0.8 p-2 flex-shrink-0 w-10 rounded-full h-6 transition dark:bg-blue-600 duration-75 group-hover:text-gray-900 dark:group-hover:text-white' />
                    }
                    {/*
                    <FontAwesomeIcon icon={faMapLocationDot} style={{ color: getColor(currentRisk[0]) }} className='p-2 ml-3 flex-shrink-0 w-12 h-10 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white' />
                    <FontAwesomeIcon icon={faMapPin} style={{ color: getColor(currentRisk[1]) }} className='p-2 pr-0 -ml-3 flex-shrink-0 w-12 h-10  transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white' />
                    <FontAwesomeIcon icon={faArrowTrendUp} style={{ color: '#F00' }} className='p-2 ml-1 mt-0.5 dark:bg-[#262d33] rounded-full flex-shrink-0 w-12 h-12 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white' />
                    */ }
                    <span className="tooltiptext mt-20 -ml-30">{loading ? '' : `${viewNotes?'Hide':'Show'} Notes`}</span>
                </button >
            </div>
            <Popup selectedClient={props.selectedClient} popupContent={clientsWithNotes} itemType={'Note'} isLoading={loading} isOpen={viewNotes} setIsOpen={setNoteView} title={'Notes and Alerts'} contentManagement={'Note'} />
        </div>
        );

}
