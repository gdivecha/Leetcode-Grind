import React, { useState, useEffect, useRef } from 'react';
import * as echarts from 'echarts';
import { ThemeContext } from "./../../components/ThemeContext/ThemeContext";


export const TestCompletion = (props) => {

    const clientTests = [{ clientName: "Hyperscale", clientGrouping: [{ groupName: "All", testExecution: { "executed": '50%', "Not Executed": '30%', "In progress": '20%' }, testPercent: 50 }, { groupName: "E2E", testExecution: { "executed": '10%', "Not Executed": '40%', "In progress": '50%' }, testPercent: 10 }, { groupName: "API", testExecution: { "executed": '80%', "Not Executed": '10%', "In progress": '10%' }, testPercent: 80 }, { groupName: "BJE", testExecution: { "executed": '40%', "Not Executed": '40%', "In progress": '20%' }, testPercent: 77 }, { groupName: "Custom 1", testExecution: { "executed": '25%', "Not Executed": '50%', "In progress": '25%' }, testPercent: 25}] },
                            { clientName: "Amazon UK", clientGrouping: [{ groupName: "All", testExecution: { "executed": '20%', "Not Executed": '40%', "In progress": '40%' }, testPercent: 20}, { groupName: "E2E", testExecution: { "executed": '30%', "Not Executed": '30%', "In progress": '40%' }, testPercent: 30}, { groupName: "API", testExecution: { "executed": '40%', "Not Executed": '25%', "In progress": '35%' }, testPercent: 40}, { groupName: "BJE", testExecution: { "executed": '22%', "Not Executed": '43%', "In progress": '30%' }, testPercent: 22}, { groupName: "Custom 1", testExecution: { "executed": '10%', "Not Executed": '80%', "In progress": '10%' }, testPercent: 10}] },
                            { clientName: "UPS", clientGrouping: [{ groupName: "All", testExecution: { "executed": '35%', "Not Executed": '35%', "In progress": '30%' }, testPercent: 35}, { groupName: "E2E", testExecution: { "executed": '15%', "Not Executed": '70%', "In progress": '15%' }, testPercent: 15}, { groupName: "API", testExecution: { "executed": '60%', "Not Executed": '30%', "In progress": '10%' }, testPercent: 60}, { groupName: "BJE", testExecution: { "executed": '30%', "Not Executed": '20%', "In progress": '50%' }, testPercent: 30}, { groupName: "Custom 1", testExecution: { "executed": '80%', "Not Executed": '5%', "In progress": '15%' }, testPercent: 80}] },
                            { clientName: "EHI", clientGrouping: [{ groupName: "All", testExecution: { "executed": '70%', "Not Executed": '15%', "In progress": '15%' }, testPercent: 70}, { groupName: "E2E", testExecution: { "executed": '20%', "Not Executed": '40%', "In progress": '40%' }, testPercent: 20}, { groupName: "API", testExecution: { "executed": '50%', "Not Executed": '15%', "In progress": '35%' }, testPercent: 50}, { groupName: "BJE", testExecution: { "executed": '40%', "Not Executed": '30%', "In progress": '30%' }, testPercent: 40}, { groupName: "Custom 1", testExecution: { "executed": '10%', "Not Executed": '10%', "In progress": '80%' }, testPercent: 10}] },
        { clientName: "NewClient", clientGrouping: [{ groupName: "All", testExecution: { "executed": '22%', "Not Executed": '22%', "In progress": '56%' }, testPercent: 2 }, { groupName: "E2E", testExecution: { "executed": '25%', "Not Executed": '50%', "In progress": '25%' }, testPercent: 25 }, { groupName: "API", testExecution: { "executed": '66%', "Not Executed": '24%', "In progress": '10%' }, testPercent: 66 }, { groupName: "BJE", testExecution: { "executed": '50%', "Not Executed": '45%', "In progress": '5%' }, testPercent: 50 }, { groupName: "Custom 1", testExecution: { "executed": '23%', "Not Executed": '23%', "In progress": '54%' }, testPercent: 23}] }];

    const [loading, setLoading] = useState(props.isLoading);
    const piech = useRef(null);
    const { toggle } = React.useContext(ThemeContext);


    const calcPercentColor = (score) => {
        let a = score;
        return 'hsl(' + (a) + ', 90%, 50%)';
    };

    const getTestPercent = () => { return (loading ? 0 : clientTests.filter(clientInfo => clientInfo.clientName === props.selectedClient)[0].clientGrouping.filter(clientGroup => clientGroup.groupName === props.selectedGrouping)[0].testPercent) };

    const loadchart = () => {
        if (loading)
            return;
        let chartInstance = null;
        if (piech.current == null)
            return;
        const renderedInstance = echarts.getInstanceByDom(piech.current);
        if (renderedInstance) {
            chartInstance = renderedInstance;
        } else {
            chartInstance = echarts.init(piech.current);
        }

        const option = {
            //color: pieChartColorPalette,
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)',
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
            /*legend: {
                orient: 'horizontal',
                left: 10,
                data: ['Executed', 'Not Executed', 'In Progress'],
                align: 'auto',
                textStyle: {
                    color: 'white'
                },
                position: 'bottom',

            },*/
            series: [
                {
                    name: 'Utilization',
                    type: 'pie',
                    radius: ['60%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: false,
                            fontSize: '20',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: "30", name: 'Executed' },
                        { value: "60", name: 'Not Executed' },
                        { value: "10", name: 'In Progress' },

                    ]
                }
            ]
        }
        chartInstance.setOption(option);
    }

    function findPie() {

        const percentage = getTestPercent();

        const title = 'Test';

        if (loading)
            return;

        const testExecutionData = clientTests.filter(clientInfo => clientInfo.clientName === props.selectedClient)[0].clientGrouping.filter(clientGroup => clientGroup.groupName === props.selectedGrouping)[0].testExecution;
        const echartInstance = echarts.getInstanceByDom(piech.current);
        echartInstance.setOption({
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b}: {c} ({d}%)',
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
            /*legend: {
                orient: 'vertical',
                left: 20,
                top: 85,
                data: ['Passed', 'Failed', 'In Progress'],
                align: 'auto',
                textStyle: {
                    fontWeight: 'normal',
                    color: '#4B5563'
                },
                position: 'bottom'
            },*/
            series: [
                {
                    name: `${props.selectedClient} - ${props.selectedGrouping}`,
                    title: {
                        text: title,
                        top: 0,
                        left: 'center',
                        textStyle: {
                            fontSize: 14,
                            fontWeight: 'normal',
                            color: 'white'

                        },
                    },
                    markPoint: {
                        tooltip: {
                            show: true,
                            formatter: '{b} of the tests passed',
                        },
                        label: {
                            show: true,
                            formatter: '{b}',
                            //color: calcPercentColor(percentage),
                            color: toggle ?'#8699B8':'#949FB0',
                            fontSize: 30,
                            fontWeight: 500,
                        },
                        data: [{
                            name: percentage + '%',
                            value: '-',
                            symbol: 'circle',
                            itemStyle: { color: 'transparent' },
                            x: '45.5%',
                            y: '54.5%',
                        }],
                    },
                    type: 'pie',
                    radius: ['65%', '78%'],
                    center: ['45.5%', '52%'],
                    avoidLabelOverlap: true,
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: false,
                            fontSize: '14',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        { value: parseInt(testExecutionData["executed"], 10), name: "Passed", itemStyle: { color: "#004FFF" } },
                        { value: parseInt(testExecutionData["Not Executed"], 10), name: "Failed", itemStyle: { color: "#6C9AF3" } },
                        { value: parseInt(testExecutionData["In progress"], 10), name: "In Progress", itemStyle: { color: "#C9C1FF" } },

                    ]
                }
            ]
        }, true)
    }

    useEffect(() => {
        setLoading(true);
        loadchart();
        findPie();
        setLoading(false);
    }, [props.selectedClient, props.selectedGrouping]);

    return (
        <div className="mx-2 mt-2 w-36 relative">
            <div className={`text-xl absolute z-50 w-full mt-4 ml-16 px-auto ${toggle ? 'text-bg-[#191C1F]' : 'text-white'}`}>
                Tests
            </div>
            <div ref={loading ? null : piech} className={`justify-center h-48 pt-8 pl-2 bg-[#C0D0E8] dark:bg-button-card rounded-xl text-center ${toggle ? ' shadow-frost' :'shadow-dark'}`} >

            </div>
        </div>
        );


}
