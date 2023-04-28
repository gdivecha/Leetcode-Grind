import React, { useState, useEffect} from 'react';
import ReviewsBar from './ReviewsBar';
import { ThemeContext } from "./../../components/ThemeContext/ThemeContext";


export const ClientScore = (props) => {
    const clientScores = [{ clientName: "Hyperscale", clientGrouping: [{ groupName: "All", clientScore: 6.6}, { groupName: "E2E", clientScore: 6.5}, { groupName: "API", clientScore: 7.1}, { groupName: "BJE", clientScore: 6.6}, { groupName: "Custom 1", clientScore: 6.9}] },
                            { clientName: "Amazon UK", clientGrouping: [{ groupName: "All", clientScore: 6.1}, { groupName: "E2E", clientScore: 6.4}, { groupName: "API", clientScore: 5.9}, { groupName: "BJE", clientScore: 7.2}, { groupName: "Custom 1", clientScore: 5.1}] },
                            { clientName: "UPS", clientGrouping: [{ groupName: "All", clientScore: 5.9}, { groupName: "E2E", clientScore: 6.3}, { groupName: "API", clientScore: 6.9}, { groupName: "BJE", clientScore: 4.9}, { groupName: "Custom 1", clientScore: 5.1}] },
                            { clientName: "EHI", clientGrouping: [{ groupName: "All", clientScore: 7.5}, { groupName: "E2E", clientScore: 6.1}, { groupName: "API", clientScore: 6.8}, { groupName: "BJE", clientScore: 7.9}, { groupName: "Custom 1", clientScore: 8.3}] },
                            { clientName: "NewClient", clientGrouping: [{ groupName: "All", clientScore: 2.9}, { groupName: "E2E", clientScore: 9.9}, { groupName: "API", clientScore: 4.5}, { groupName: "BJE", clientScore: 0.9}, { groupName: "Custom 1", clientScore: 0.3}] }];
    const [currentClientScore, setClientScore] = useState(0.0);
    const [loading, setLoading] = useState(props.isLoading);
    const { toggle } = React.useContext(ThemeContext);


    function findScore() {
        setClientScore(loading ? 0.0 : ((clientScores.filter(clientInfo => clientInfo.clientName === props.selectedClient))[0].clientGrouping.filter(clientGroup => clientGroup.groupName === props.selectedGrouping))[0].clientScore);
    }

    useEffect(() => {
        setLoading(true);
        findScore();
        setLoading(false);
    }, [props.selectedClient, props.selectedGrouping]);

    if (loading) return <div>Loading Client Score...</div>

    return (
        <div className=" w-64">
            <button className={`mx-2 my-2 justify-center py-4 min-width-190px bg-[#C0D0E8] dark:bg-button-card h-48 rounded-xl text-center ${toggle ? 'shadow-frost' :'shadow-dark'}`} >
                <div className='dark:bg-left-button-card'>
                </div>
                <span className={`text-xl ${toggle ? 'text-bg-[#191C1F]' : 'text-white'}`}>Client Score</span>
                <div className="mx-auto mt-1 w-80% pt-2 relative text-center rounded-xl  font-semibold">
                    {loading ? "" : <ReviewsBar className='absolute top-10 shadow-dark' score={currentClientScore.toFixed(1)} />}
                </div>
            </button>
        </div>
        );
}
