import React, { useState, useEffect, useRef, FormControl } from 'react';
import { ThemeContext } from "./../../components/ThemeContext/ThemeContext"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamation, faFaceTired, faFaceGrinBeamSweat, faFaceGrimace, faFaceGrinWide, faFaceFrownOpen, faSquareCaretUp, faSquareCaretDown, faThumbsUp, faCircleChevronDown, faCircleChevronUp, faCaretUp, faCaretDown, faFaceMeh, faEquals, faChartLine, faChartSimple, faArrowUp, faArrowDown, faBug, faMagnifyingGlassChart, faCircleNodes, faCircleInfo, faRepeat } from '@fortawesome/free-solid-svg-icons';
import Select from 'react-select';
import makeAnimated from 'react-select/animated'
import TestRuns from './../results/analysis/TestRuns';
import { RequestRT, getRequests } from './../results/analysis/RequestRT';
import axios from 'axios';
import { PieChart } from '../../components/chart/PieChart';
import { Label } from 'reactstrap';
import * as echarts from 'echarts';
import ReviewsBar from './ReviewsBar';
import { ClientScore } from './ClientScore';
import { TestCompletion } from './TestCompletion';
import { ClientConditionPanel } from './ClientConditionPanel';



export const Overview = (props) => {

    const clientScores = [{ clientName: "Hyperscale", clientGrouping: [{ groupName: "All", scoreTrendData: { "Time": [7, 2, 7, 6.6, 6.4, 6.5, 6.6], "Release": [7.5, 10, 0.7, 4.1, 5.1, 6.7, 6.6] } }, { groupName: "E2E", scoreTrendData: { "Time": [9, 3, 1, 9, 8.5, 6.5, 6.5], "Release": [6, 3, 7.7, 3.6, 4.5, 5.6, 6.5] } }, { groupName: "API", scoreTrendData: { "Time": [3.2, 2.9, 2.5, 4.8, 5.6, 6.6, 7.1], "Release": [4.3, 5.5, 6.7, 3.3, 4, 9, 7.1] } }, { groupName: "BJE", scoreTrendData: { "Time": [5, 4, 3, 2, 4.5, 5.7, 6.6], "Release": [1, 2, 5, 7, 6.8, 6.7, 6.6] } }, { groupName: "Custom 1", scoreTrendData: { "Time": [8, 2, 3, 6, 6.3, 6.7, 6.9], "Release": [6, 6, 6.7, 6.6, 6.7, 6.8, 6.9] } }] },
                        { clientName: "Amazon UK", clientGrouping: [{ groupName: "All", scoreTrendData: { "Time": [8, 4, 1, 2.7, 4.8, 5.6, 6.1], "Release": [7.8, 5, 0.3, 3.1, 4.9, 5.7, 6.1] } }, { groupName: "E2E", scoreTrendData: { "Time": [3.2, 3.9, 1.1, 8.2, 7.8, 6.9, 6.4], "Release": [4, 2, 1.7, 8.6, 8.1, 7, 6.4] } }, { groupName: "API", scoreTrendData: { "Time": [2, 5, 4, 5, 5.4, 5.6, 5.9], "Release": [1, 5, 7, 1.6, 4.9, 5.2, 5.9] } }, { groupName: "BJE", scoreTrendData: { "Time": [1, 2, 3, 9, 8.7, 8.1, 7.2], "Release": [5.4, 5.3, 5.7, 5.8, 7.6, 7.4, 7.2] } }, { groupName: "Custom 1", scoreTrendData: { "Time": [2, 3, 1, 8, 6.7, 5.9, 5.1], "Release": [6.9, 2.1, 8.7, 8.6, 7.6, 7.8, 5.1] } }] },
                        { clientName: "UPS", clientGrouping: [{ groupName: "All", scoreTrendData: { "Time": [9, 3, 7, 6.7, 6.1, 5.9, 5.9], "Release": [6.5, 2, 3.7, 6.1, 6.0, 5.9, 5.9] } }, { groupName: "E2E", scoreTrendData: { "Time": [4, 3.1, 2.9, 3.5, 4.2, 5.1, 6.3], "Release": [2.3, 2.4, 2.7, 2.6, 3.0, 5.8, 6.3] } }, { groupName: "API", scoreTrendData: { "Time": [5.4, 5.6, 5.7, 5.9, 6.7, 6.3, 6.9], "Release": [3.2, 8.3, 8.7, 3.6, 6.9, 6.9, 6.9] } }, { groupName: "BJE", scoreTrendData: { "Time": [9, 9.1, 1.9, 9.3, 7.8, 5.1, 4.9], "Release": [5, 5.4, 5.7, 5.6, 5, 4.8, 4.9] } }, { groupName: "Custom 1",  scoreTrendData: { "Time": [1.2, 3.3, 1.9, 1.4, 3.9, 4.5, 5.1], "Release": [6.7, 6.8, 6.7, 6.6, 6.2, 5.4, 5.1] } }] },
                        { clientName: "EHI", clientGrouping: [{ groupName: "All", scoreTrendData: { "Time": [0, 4, 7, 2.7, 5.9, 6.7, 7.5], "Release": [7.9, 9.5, 0.9, 1.5, 3.9, 5.6, 7.5] } }, { groupName: "E2E", scoreTrendData: { "Time": [6, 6, 6, 9, 6.7, 8.1, 6.1], "Release": [9, 4, 6.7, 9.6, 7.8, 8.9, 6.1] } }, { groupName: "API",  scoreTrendData: { "Time": [10, 9, 8, 7, 6.8, 6.8, 6.8], "Release": [6, 5, 3, 5, 5.9, 7.2, 6.8] } }, { groupName: "BJE", scoreTrendData: { "Time": [2, 3, 6, 1, 7.8, 7.9, 7.9], "Release": [8, 3, 9.7, 9.6, 7.6, 8, 7.9] } }, { groupName: "Custom 1",  scoreTrendData: { "Time": [1, 2, 4, 1, 6.7, 7.9, 8.3], "Release": [4.5, 4.6, 4.7, 4.6, 5.1, 5.8, 8.3] } }] },
                        { clientName: "NewClient", clientGrouping: [{ groupName: "All", scoreTrendData: { "Time": [2, 2, 10, 6.7, 4.5, 3.9, 2.9], "Release": [8, 2, 3.7, 8.4, 6.7, 4.2, 2.9] } }, { groupName: "E2E", scoreTrendData: { "Time": [7, 7, 7.1, 7.6, 9.1, 9.7, 9.9], "Release": [6, 2.3, 1.7, 8.6, 9.4, 9.9, 9.9] } }, { groupName: "API", scoreTrendData: { "Time": [5.4, 5.3, 5.1, 5.9, 4.9, 4.6, 4.5], "Release": [8, 8, 8.7, 8.6, 7.6, 6, 4.5] } }, { groupName: "BJE", scoreTrendData: { "Time": [7, 7, 7, 7.9, 4.3, 2, 0.9], "Release": [6, 5, 6, 3, 2, 1, 0.9] } }, { groupName: "Custom 1",  scoreTrendData: { "Time": [1, 2, 7, 8, 4, 2.3, 0.3], "Release": [2, 3, 1.7, 2.6, 5, 3.2, 0.3] } }] }];


    const trendTypes = ['Time', 'Release'];
    const [netHigher, setNet] = useState('Higher');
    const [caution, setCaution] = useState(false);
    const [loading, setLoading] = useState(props.isLoading);
    const { toggle } = React.useContext(ThemeContext);

    const [trendType, setTrendType] = useState(trendTypes[0]);
    const [reviewScore, setReviewScore] = useState(10);
    const piech = useRef(null);
    const barchartRef = useRef(null);
    const trendRef = useRef(null);

    const [graphTypeLine, setGraphTypeLine] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTrendType(trendTypes[0]);
        setLoading(false);
    }, [props.selectedClient, props.selectedGrouping]);

    /*useEffect(() => {
        let chartInstance = null;

        if (barchartRef.current == null)
            return;

        const renderedInstance = echarts.getInstanceByDom(barchartRef.current);
        if (renderedInstance) {
            chartInstance = renderedInstance;
        } else {
            chartInstance = echarts.init(barchartRef.current);
        }

        window.addEventListener('resize', function () {
            chartInstance.resize({
                width: 800,
                height:400
            });
        });
        return 
    });*/

    useEffect(() => {
        setLoading(true);
        isLastScoreHigher(trendType);
        //console.log(caution);
        loadScoreTrendGraph();
        setLoading(false);
    }, [props.selectedClient, props.selectedGrouping, trendType]); 

    useEffect(() => {
        setLoading(true);
        if (graphTypeLine) {
            scoretrendLine(getAllTrendDataForClient(getScoreTrendDataByClient(trendType)));
        }
        else {
            scoretrendBar(getAllTrendDataForClient(getScoreTrendDataByClient(trendType)));
        }
        setLoading(false);
    }, [props.selectedClient, props.selectedGrouping,trendType,graphTypeLine]);

    useEffect(() => {
        setLoading(true);
        fetchContent();
        setLoading(false);
    }, []);

    /*useEffect(() => {
        setLoading(true);
        fetchContent();
        setTrendType(trendTypes[0]);
        loadchart();
        findScore();
        getTestPercent();
        isLastScoreHigher(trendType);
        loadScoreTrendGraph();
        if (graphTypeLine) {
            scoretrendLine(getAllTrendDataForClient(getScoreTrendDataByClient(trendType)));
        }
        else {
            scoretrendBar(getAllTrendDataForClient(getScoreTrendDataByClient(trendType)));
        }
        setLoading(false);
    }, [props.rerender])*/

    //const [active, setActive] = useState(false);
    //const handleClick = () => {
    //    setActive(!active);
    //};

    const handleGraphTypeClick = () => {
        setGraphTypeLine(!graphTypeLine);
        //console.log(graphTypeLine);
    }

    const calcColor = (score) => {
        let a = score / 8 *  100;
        // return an CSS hsl color string
        return 'hsl(' + (a-10) + ', 80%, 50%)';
    };

    const calcColorLight = (score) => {
        let a = score / 8 * 100;
        // return an CSS hsl color string
        return 'hsl(' + (a - 10) + ', 60%, 50%)';
    };

    function currentMonthNum(monthNum) {
        const mod = 12;
        let num = monthNum % mod;
        if (num<0) {
            num = mod - (Math.abs(num) % mod);
        }
        return num;
    };

    function getMonths() {
        const monthNames = {0: "Jan", 1: "Feb", 2: "March", 3: "April", 4: "May", 5:"June", 6:"July", 7:"Aug", 8:"Sept", 9:"Oct", 10:"Nov",11:"Dec"}
        const today = new Date().toLocaleDateString();
        const [todayMonth, todayDay, todayYear] = today.split('/');
        const months = [];
        for (let i = 1; i <= 7; i++) {
            months.unshift(monthNames[currentMonthNum(todayMonth - i)]);
        }
        return months;
    }

    const trendData = {
        'Time': {
            xAxis: getMonths(),
        },
        'Release': {
            xAxis: ['62.3.7','62.3.8','62.3.9', '63.0.0', '63.1.0', '63.2.0', '64.0.0'],
        }
    }

    function isLastScoreHigher(type) {
        const data = getScoreTrendDataByClient(type);
        if (data[data.length - 1] > data[data.length - 2]) {
            setNet('Higher');
            setCaution(false);
        }
        else if (data[data.length - 1] === data[data.length - 2]) { 
            setNet('Same');
            setCaution(false);
        }
        else{
            setNet('Lower');
            if (data[data.length - 2] - data[data.length - 1] >= 0.5) {
                setCaution(true);
            }
            else {
                setCaution(false);
            }
        }
    }


    const fetchContent = () => {
        setLoading(true);
        setReviewScore(0);
        setLoading(false);
    };

    const loadScoreTrendGraph = () => {
        if (loading)
            return;
        let chartInstance = null;

        if(barchartRef.current == null)
            return;

        const renderedInstance = echarts.getInstanceByDom(barchartRef.current);
        if (renderedInstance) {
            chartInstance = renderedInstance;
        } else {
            chartInstance = echarts.init(barchartRef.current);
        }
        

        const option = {

            //backgroundColor: '#5A646D',
            //height: 250,
            width: 460,
            height: 280,
            grid: {
                left: '35px',
                top: '20px'
            },
            xAxis: {
                type: 'category',
                data: trendData[trendType].xAxis,
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#4B5563',
                        width: 0.2
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#3F83F8',
                        width: 0.2
                    }
                }
            },
            legend: {},
            tooltip: toggle ? {
                trigger: 'item',
                axisPointer: { type: 'line' },
                responsive: true,
                //position: 'bottom',
                backgroundColor: '#FFF',
                borderColor: '#ACC6F4',
                borderWidth: '4',
                textStyle: {
                    color: '#9CA3AF',
                    fontWeight: 550
                }            
            }:{
                trigger: 'item',
                axisPointer: { type: 'line' },
                responsive: true,
                //position: 'bottom',
                backgroundColor: '#252A30',
                borderColor: '#4B5563',
                borderWidth: '4',
                textStyle: {
                    color: 'rgb(107 114 128)',
                    fontWeight: 550
                }            },
            /*label: {
                show: true,
                position: 'bottom',
                textStyle: {
                    fontSize: 20
                }
            },*/
            yAxis: {
                type: 'value',
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#4B5563',
                        width: 0.2
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#3F83F8',
                        width: 0.2
                    }
                },
                min: 0,
                max: 10,
                interval: 1.0
            },
            series: [
                {
                    data: getAllTrendDataForClient(getScoreTrendDataByClient(trendType)),
                    type: 'line',
                    barWidth: '35%',
                    label: {
                        show: true,
                        position: 'top',
                        textStyle: {
                            fontSize: 15,
                            color: '#4B5563'
                        }
                    },
                    lineStyle: {
                        normal: {
                            color: '#3F83F8',
                            width: 0.9,
                            type: 'solid',
                            shadowColor: '#4B5563',
                            shadowBlur: 5,
                        }
                    },
                }
            ]
        }


        chartInstance.setOption(option);
    }

    const scoretrendLine = (newData) => {
        if (loading)
            return;

        const echartInstance = echarts.getInstanceByDom(barchartRef.current);
       
        echartInstance.setOption({
            ...echartInstance.getOption(),
            tooltip: toggle ? {
                trigger: 'axis',
                axisPointer: { type: 'line' },
                responsive: true,
                //position: 'bottom',
                backgroundColor: '#E1EBFE',
                borderColor: '#ACC6F4',
                borderWidth: '4',
                textStyle: {
                    color: '#9CA3AF',
                    fontWeight: 550
                }
            } :
            {
                trigger: 'axis',
                axisPointer: { type: 'line' },
                responsive: true,
                //position: 'bottom',
                backgroundColor: '#252A30',
                borderColor: '#4B5563',
                borderWidth: '4',
                textStyle: {
                    color: 'rgb(107 114 128)',
                    fontWeight: 550
                }
            },
            series: [
                {
                    data: newData,
                    type: 'line',
                    label: {
                        show: true,
                        position: 'top',
                        textStyle: {
                            fontSize: 15,
                            color: '#4B5563'
                        }
                    },
                    lineStyle: {
                        normal: {
                            color: '#3F83F8',
                            width: 0.9,
                            type: 'solid',
                            shadowColor: '#4B5563',
                            shadowBlur: 5,
                        }
                    },
                }
            ]
        }, true)
    }

    const scoretrendBar = (newData) => {
        if (loading)
            return;

        const echartInstance = echarts.getInstanceByDom(barchartRef.current);

        echartInstance.setOption({
            ...echartInstance.getOption(),
            tooltip: toggle ? {
                trigger: 'item',
                axisPointer: { type: 'line' },
                responsive: true,
                //position: 'bottom',
                backgroundColor: '#E1EBFE',
                borderColor: '#ACC6F4',
                borderWidth: '4',
                textStyle: {
                    color: '#9CA3AF',
                    fontWeight: 550
                }
            } :
            {
                trigger: 'item',
                axisPointer: { type: 'line' },
                responsive: true,
                //position: 'bottom',
                backgroundColor: '#252A30',
                borderColor: '#4B5563',
                borderWidth: '4',
                textStyle: {
                    color: 'rgb(107 114 128)',
                    fontWeight: 550
                }
            },
            xAxis: {
                data: trendData[trendType].xAxis,
                axisLine: {
                    show: true,
                    lineStyle: {
                        color: '#4B5563',
                        width: 0.2
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#3F83F8',
                        width: 0.2
                    }
                }
            },
            series: [
                {
                    data: newData,
                    type: 'bar',
                    barWidth: '10%',
                    label: {
                        show: true,
                        position: 'top',
                        textStyle: {
                            fontSize: 15,
                            color: toggle ?'rgb(107 114 128)':'#4B5563'
                        }
                    }
                }
            ]
        }, true)
    }

    function getScoreTrendDataByClient(type) {
        return (loading ? [0, 0, 0, 0, 0] : clientScores.filter(clientInfo => clientInfo.clientName === props.selectedClient)[0].clientGrouping.filter(clientGroup => clientGroup.groupName === props.selectedGrouping)[0].scoreTrendData[type])
    };

    function getAllTrendDataForClient(data) {
        const trends = [];
        if (!loading) {
            data.map(trend => {
                trends.push(getTrend(trend));
            });
        }
        return trends;
    }

    function getTrend(value) {
        if (graphTypeLine) {
            return {
                value: (value).toFixed(1),
                itemStyle: {
                    color: calcColor(value),
                    borderWidth: 0,
                    borderType: 'solid',
                    borderColor: '#4B5563',
                    shadowColor: calcColorLight(value),
                    shadowBlur: 12
                },
                symbolSize: 5,
            }
        }
        else {
            return {
                value: (value).toFixed(1),
                itemStyle: {
                    barBorderRadius: 10,
                    color: calcColor(value),
                    borderWidth: 0,
                    shadowColor: calcColorLight(value),
                    shadowBlur: 3
                },
            }
        }
        
    }

    if (loading) return <div>Hello</div>

    return ( 
        <div className='mx-2 my-2'>
            <div className={`justify-center py-4 bg-[#C0D0E8] dark:bg-button-card rounded-xl h-full text-center w-560px ${toggle ? ' shadow-frost' : 'shadow-dark'}`}>
                <span className={`block text-xl ${toggle ? 'text-bg-[#191C1F]' : 'text-white'}`}>Score Trend</span>
                <div className='inline-flex '>
                    <div className='bg-gray-350 dark:bg-[#262d33] rounded-full mt-6 h-14 p-2 px-4'>
                        <div  className='whitespace-nowrap rounded w-full h-full'>
                            {loading ? "" : (trendTypes.map(type =>
                                <button ref={trendRef}
                                    className={`dark:text-gray-400 inline-block uppercase text-sm rounded-full mt-1 w-100px dark:bg-[#262d33] dark:hover:bg-[#3F83F8] dark:hover:text-white dark:focus:ring-blue-800 h-9 ${type !== trendTypes[trendTypes.length-1]?"mr-2":""}`}
                                    value={type}
                                    onClick={(e) => {
                                        setTrendType(type);
                                        //console.log(getAllTrendDataForClient(getScoreTrendDataByClient(type)));
                                    }}
                                    style={{ color: trendType == type ? (toggle ? '#FFF' : '#262d33') : (toggle ? 'rgb(167 182 219)' : "#6B7280"), backgroundColor: trendType == type ? (toggle ? '#669eff' : "#3F83F8") : (toggle ? '#b0ceff30' : "#262d33"), border: trendType == type ? (toggle ? "3px solid #FFF" : "3px solid #191C1F") : (toggle ? "3px solid #C3CDE8" : "3px solid #494E58"), fontWeight: trendType == type ? "500" : "" }}
                                >
                                    {type}
                                </button>
                            ))}
                        </div>
                    </div>
                    {/* <div className=' dark:text-gray-400 dark:bg-[#494E58] rounded-xl w12 ml-5 mt-5.4 h-16 p-1.5 justify-center'>
                        <p>NET</p>
                        {loading ? "" : (netHigher === 'Same' ? <FontAwesomeIcon icon={faEquals} style={{ color: '#F8EE00' }} className='p-1 mt-0.5 dark:bg-[#262d33] rounded-full flex-shrink-0 w-5 h-4 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white' /> : (netHigher === 'Higher' ? <FontAwesomeIcon icon={faCaretUp} style={{ color: '#00FF94' }} className='p-1 ml-1 mt-0.5 dark:bg-[#262d33] rounded-full flex-shrink-0 w-5 h-4 mr-1 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white' /> : <FontAwesomeIcon icon={faCaretDown} style={{ color: '#FF0000' }} className='p-1 mt-0.5 ml-1 dark:bg-[#262d33] rounded-full flex-shrink-0 w-5 h-4 mr-1 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white' />))}
                    </div>*/}
                    <button className='tooltip text-gray-500 dark:text-gray-400 ml-5 bg-gray-350 dark:bg-[#262d33] rounded-xl mt-5.4 h-16 p-1.5 px-3 justify-center' onClick={handleGraphTypeClick}>
                        <p className="text-sm mt-0.5">TOGGLE</p>
                        {loading ? "" : (graphTypeLine ? <FontAwesomeIcon icon={faChartSimple} style={{ color: '#3F83F8' }} className='p-1 mt-0.5 ml-1 bg-white dark:bg-[#191C1F] rounded-full flex-shrink-0 w-7 h-4 mr-1 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white' /> : <FontAwesomeIcon icon={faChartLine} style={{ color: '#3F83F8' }} className='p-1 mt-0.5 ml-1 bg-white dark:bg-[#191C1F] rounded-full flex-shrink-0 w-7 h-4 mr-1 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white' />)}
                        {graphTypeLine ? <span className={`${toggle ? 'tooltiptextfrost' : 'tooltiptext'} mt-11 -ml-20`}>Switch to Bar Graph</span> : <span className={`${toggle ? 'tooltiptextfrost' : 'tooltiptext'} mt-11 -ml-20`}>Switch to Line Graph</span> }
                    </button>
                    <div className='tooltip text-gray-500 dark:text-gray-400 bg-gray-350 dark:bg-[#262d33] rounded-xl w12 ml-5 mt-5.4 h-16 p-1.5 justify-center'>
                        <p className="text-sm mt-0.5">NET</p>
                        {loading ? "" : (netHigher === 'Same' ? <FontAwesomeIcon icon={faFaceGrinBeamSweat} style={{ color: toggle ? '#DC9F00' : '#F8EE00' }} className='p-1 ml-1 mt-0.5 bg-white dark:bg-[#191C1F] rounded-full flex-shrink-0 w-5 h-4 mr-1 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white' /> : (netHigher === 'Higher' ? <FontAwesomeIcon icon={faFaceGrinWide} style={{ color: toggle ? '#00D354' : '#00FF94' }} className='p-1 ml-1 mt-0.5 bg-white dark:bg-[#191C1F] rounded-full flex-shrink-0 w-5 h-4 mr-1 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white' /> : <FontAwesomeIcon icon={faFaceTired} style={{ color: toggle ? '#D91E34' : '#FF0000' }} className='p-1 mt-0.5 ml-1 bg-white dark:bg-[#191C1F] rounded-full flex-shrink-0 w-5 h-4 mr-1 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white' />))}
                        {netHigher === 'Lower' ? <span className={`${toggle ? 'tooltiptextfrost' : 'tooltiptext'} mt-11 -ml-18.4`}>Latest Score less than Previous Score</span> : (netHigher === 'Same' ? <span className={`${toggle ? 'tooltiptextfrost' : 'tooltiptext'} mt-11 -ml-18.4`}>Latest Score same as Previous Score</span> : <span className={`${toggle ? 'tooltiptextfrost' : 'tooltiptext'} mt-11 -ml-18.4`}>Latest Score greater than Previous Score</span>)}
                    </div >
                    {caution?
                        <div className='tooltip dark:text-gray-400 bg-gray-350 dark:bg-[#262d33] rounded-full w-10 ml-5 mt-5.4 h-16 p-1 justify-center'>
                            <FontAwesomeIcon icon={faExclamation} style={{ color: toggle ? '#D91E34' : '#FF0000' }} className='p-1 py-2 ml-0.5 mt-0.5 mr-0.5 bg-white dark:bg-[#191C1F] rounded-full flex-shrink-0 w-5 h-9 transition duration-75 group-hover:text-gray-900 dark:group-hover:text-white' />
                            <span className={`${toggle ? 'tooltiptextfrost' : 'tooltiptext'}  mt-12 -ml-18.4`}>Latest Score dipped by <span style={{ color: toggle ?'#D91E34':'#F00'}}>more than or equal to 0.5</span></span>
                        </div> : ""
                    }
                </div>
                <div ref={loading ? null : barchartRef} className=' rounded-xl w-full text-center h-80 mt-7 mx-6' >
                </div>
            </div>
        </div>
    );
}


//dark:focus:ring-[#191C1F]
