import React, { useState, useEffect } from 'react';
import { ClientScore } from './ClientScore';
import { TestCompletion } from './TestCompletion';
import { RecommendedSKU } from './RecommendedSKU';
import { GoLiveTracker } from './GoLiveTracker';
import { ClientStatus } from './ClientStatus';
import { Information } from './Information';
import { ClientNotes } from './ClientNotes';


export const ClientConditionPanel = (props) => {
    const [loading, setLoading] = useState(props.isLoading);

    useEffect(() => {
        setLoading(false);
    }, [props.selectedClient, props.selectedGrouping]);

    if (loading) return <div>Loading ClientConditionPanel...</div>

    return (
        <div className='relative inline-flex'>
            <ClientScore selectedClient={props.selectedClient} selectedGrouping={props.selectedGrouping} isLoading={props.loading} />
            <TestCompletion selectedClient={props.selectedClient} selectedGrouping={props.selectedGrouping} isLoading={props.loading} />
            <ClientStatus selectedClient={props.selectedClient} isLoading={props.loading} />
            <Information selectedClient={props.selectedClient} isLoading={props.loading} />
            <GoLiveTracker isLoading={loading} selectedClient={props.selectedClient} />
            <RecommendedSKU isLoading={loading} selectedClient={props.selectedClient} />
        </div>
    );
}
