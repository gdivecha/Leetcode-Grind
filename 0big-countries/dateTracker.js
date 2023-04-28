import React, { useState, useEffect} from 'react';
import { ThemeContext } from "./../../components/ThemeContext/ThemeContext";


export const GoLiveTracker = (props) => {
    const goLiveDates = [{ clientName: "Hyperscale", goLiveDate: "28-04-2023" },
                        { clientName: "Amazon UK", goLiveDate: "28-03-2023" },
                        { clientName: "UPS", goLiveDate: "30-09-2023" },
                        { clientName: "EHI", goLiveDate: "15-11-2023" },
                        { clientName: "NewClient", goLiveDate: "19-02-2024" }];
    const [goLive, setGoLiveDate] = useState(0);
    const [loading, setLoading] = useState(props.isLoading);
    let goLiveSpecificDate = null;
    const { toggle } = React.useContext(ThemeContext);


    const goLiveDateTracker = loading ? 0 :
        getGoLiveDays();

    function getGoLiveDays() {
        const clientSpecific = goLiveDates.filter(clientInfo => clientInfo.clientName === props.selectedClient);
        const date = clientSpecific[0].goLiveDate;
        goLiveSpecificDate = date.toString();
        const [goLiveDay, goLiveMonth, goLiveYear] = date.split('-');
        const goLiveDateObj = new Date(goLiveYear, goLiveMonth - 1, goLiveDay);
        const today = new Date().toLocaleDateString()
        const [todayMonth, todayDay, todayYear] = today.split('/');
        const todayObj = new Date(todayYear, todayMonth - 1, todayDay);
        const daysLeft = Math.floor((goLiveDateObj - todayObj) / 86400000);
        return (daysLeft<0?'--':daysLeft);
    };

    function getInformalDate(goLiveSpecificDate) {
        let month = '';
        let annotation = '';
        switch (goLiveSpecificDate.substring(3, 5)) {
            case '01':
                month = 'January';
                break;
            case '02':
                month = 'February';
                break;
            case '03':
                month = 'March';
                break;
            case '04':
                month = 'April';
                break;
            case '05':
                month = 'May';
                break;
            case '06':
                month = 'June';
                break;
            case '07':
                month = 'July';
                break;
            case '08':
                month = 'August';
                break;
            case '09':
                month = 'September';
                break;
            case '10':
                month = 'October';
                break;
            case '11':
                month = 'November';
                break;
            case '12':
                month = 'December';
                break;
        }
        switch (goLiveSpecificDate.charAt(1)) {
            case '1':
                annotation = 'st';
                break;
            case '2':
                annotation = 'nd';
                break;
            case '3':
                annotation = 'rd';
                break;
            default:
                annotation = 'th';
                break;
        }
        if (goLiveSpecificDate.charAt(0) == '1' && goLiveSpecificDate.charAt(1) == '1') {
            annotation = 'th';
        }
        else if (goLiveSpecificDate.charAt(0) == '1' && goLiveSpecificDate.charAt(1) == '2') {
            annotation = 'th';
        }
        else if (goLiveSpecificDate.charAt(0) == '1' && goLiveSpecificDate.charAt(1) == '3') {
            annotation = 'th';
        }
        let datecheck = goLiveSpecificDate.substring(0, 2);
        return `${month} ${datecheck.charAt(0)==='0'?datecheck.charAt(1):datecheck}${annotation},
                ${goLiveSpecificDate.substring(6)}`;
    }

    const calcColor = (goLiveDays) => {
        let a = goLiveDays / 2;
        // return an CSS hsl color string
        return 'hsl(' + ((a - 10) > 150 ? 150 : (a - 10)) + ', 80%, 60%)';
    };

    const calcColorLight = (goLiveDays) => {
        let a = goLiveDays / 2;
        // return an CSS hsl color string
        return 'hsl(' + ((a - 10) > 150 ? 150 : (a - 10)) + ', 60%, 50%)';
    };

    useEffect(() => {
        setLoading(true);
        setGoLiveDate(typeof goLiveDateTracker == "number" ? goLiveDateTracker:-1);
        setLoading(false);
    }, [props.selectedClient]);

    if (loading) return <div>Loading Go-Live Tracker...</div>

    return (
        <div className={`rounded-xl bg-[#C0D0E8] dark:bg-button-card text-center py-6 pb-5 w-50 h-64 my-2 mx-2  ${toggle ? ' shadow-frost' :'shadow-dark'}`} >
            <span className={`block text-xl w-50 -mt-2 ${toggle ? 'text-bg-[#191C1F]' : 'text-white'}`}>Go-Live Tracker</span>
            <div className='block mt-4'>
                <p className="text-6xl font-semibold text-center rounded-xl h-24 -mt-2" style={{ color: toggle ? (goLive == -1 ? "#D91E34" : calcColorLight(goLive)) : (goLive == -1 ? "#D91E34" : calcColor(goLive)) }}>{loading ? "Hello" : getGoLiveDays()}</p>
                <p className="uppercase -mt-8 pb-3 font-semibold text-lg" style={{ color: toggle ? (goLive == -1 ? "#D91E34" : calcColorLight(goLive)) : (goLive == -1 ? "#D91E34" : calcColor(goLive)) }}>{goLive == 1 ? 'Day' : 'Days'}</p>
            </div>
            <div className='block'>
                <p className={`${toggle ? 'text-gray-500' :'text-gray-400'} -mt-2`}>{getInformalDate(goLiveSpecificDate)}</p>
            </div>
        </div>
        );
}
