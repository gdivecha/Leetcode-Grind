import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faPenToSquare, faPlus, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { SKUPopUp } from './SKUPopUp';
import { EditSKUsPopUp } from './EditSKUsPopup';
import { ThemeContext } from "./../../components/ThemeContext/ThemeContext";


export const RecommendedSKU = (props) => {

    let skuInformation = [{ clientName: "Hyperscale", skuDetails: [{ skuType: "DB", skuMain: "Eg4ds_v4", skuPrice: 2000 }, { skuType: "APP", skuMain: "D16ds_v5", skuPrice: 3000 }, { skuType: "BJE", skuMain: "D32ds_v5", skuPrice: 1800 }, { skuType: "WFM", skuMain: "Eg4ds_v4", skuPrice: 2000 }, { skuType: "HI", skuMain: "D16ds_v5", skuPrice: 3000 }, { skuType: "BI", skuMain: "D32ds_v5", skuPrice: 1800 }] },
        { clientName: "Amazon UK", skuDetails: [{ skuType: "DB", skuMain: "Bg4dF_v4", skuPrice: 2500 }, { skuType: "APP", skuMain: "D27as_v4", skuPrice: 1900 }, { skuType: "BJE", skuMain: "K82da_v5", skuPrice: 2100 }, { skuType: "WFM", skuMain: "Bg4dF_v4", skuPrice: 2500 }, { skuType: "HI", skuMain: "D27as_v4", skuPrice: 1900 }, { skuType: "BI", skuMain: "K82da_v5", skuPrice: 2100 }] },
        { clientName: "UPS", skuDetails: [{ skuType: "DB", skuMain: "Ef7ds_v4", skuPrice: 1900 }, { skuType: "APP", skuMain: "D29as_v4", skuPrice: 3900 }, { skuType: "BJE", skuMain: "H6asvs_v5", skuPrice: 3000 }, { skuType: "WFM", skuMain: "Ef7ds_v4", skuPrice: 1900 }, { skuType: "HI", skuMain: "D29as_v4", skuPrice: 3900 }, { skuType: "BI", skuMain: "H6asvs_v5", skuPrice: 3000 }] },
        { clientName: "EHI", skuDetails: [{ skuType: "DB", skuMain: "Fd8ds_v4", skuPrice: 2600 }, { skuType: "APP", skuMain: "F37as_v4", skuPrice: 2200 }, { skuType: "BJE", skuMain: "D30da_v5", skuPrice: 2200 }, { skuType: "WFM", skuMain: "Fd8ds_v4", skuPrice: 2600 }, { skuType: "HI", skuMain: "F37as_v4", skuPrice: 2200 }, { skuType: "BI", skuMain: "D30da_v5", skuPrice: 2200 }] },
        { clientName: "NewClient", skuDetails: [{ skuType: "DB", skuMain: "abcdefg", skuPrice: 3000 }, { skuType: "APP", skuMain: "23875kgg", skuPrice: 1900 }, { skuType: "BJE", skuMain: "jaskdsahd", skuPrice: 1000 }, { skuType: "WFM", skuMain: "abcdefg", skuPrice: 3000 }, { skuType: "HI", skuMain: "23875kgg", skuPrice: 1900 }, { skuType: "BI", skuMain: "jaskdsahd", skuPrice: 1000 }] }];
    const [loading, setLoading] = useState(props.isLoading);

    //gets all skus based on current client
    let recommendedSKUByClient = loading ? [] :
        (skuInformation.filter(clientInfo => clientInfo.clientName === props.selectedClient))[0].skuDetails;

    function getRecommendedSKUByClient() {
        if (!loading) {
            return (skuInformation.filter(clientInfo => clientInfo.clientName === props.selectedClient))[0].skuDetails;
        }
        else {
            return [];
        }
    }


    const [skus, setSKUs] = useState([]); //as skus based on client
    const [currentSKUReference, setSKUReference] = useState({}); //a specific sku based on sku type and client
    const [addedSKU, setAddedSKU] = useState({skuType:'',skuMain:'',skuPrice:''});
    const [currentSKUs, setCurrentSKUs] = useState(getRecommendedSKUByClient());
    const { toggle } = React.useContext(ThemeContext);

    const [skuTier, setSkuTier] = useState('');
    const [hover, setHover] = useState(false);
    const [viewSKU, setSKUView] = useState(false);
    const [manageSKUs, setManageSKUs] = useState(false);

    //gets specific sku based on sku name and the client by first invoking filter from recommended client sku
    function getCurrentSKUReference(skuTier) {
        setSKUReference((currentSKUs.filter(sku => sku.skuType === skuTier))[0]);
    }

    function replaceSKUContents(newSKUS) {
        (skuInformation.filter(clientInfo => clientInfo.clientName === props.selectedClient))[0].skuDetails = newSKUS;
    }

    useEffect(() => {
        //setLoading(true);
        setManageSKUs(false);
        setSKUs(getRecommendedSKUByClient());
        setCurrentSKUs(getRecommendedSKUByClient());
        setSKUView(false);
        //setLoading(false);
    }, [props.selectedClient]);

    
    useEffect(() => {
        setSKUs(currentSKUs);
        setCurrentSKUs(getRecommendedSKUByClient);
    }, [currentSKUReference]);

    useEffect(() => {
        if (manageSKUs == false) {
            setAddedSKU({ skuType: '', skuMain: '', skuPrice: '' });
        }
    }, [manageSKUs]);

    useEffect(() => {
        if (addedSKU === { skuType: '', skuMain: '', skuPrice: '' }) {
            setSKUs([...skus, addedSKU]);
            //console.log(skus);
        }
        else {
            setSKUs(currentSKUs);
            //console.log(currentSKUs);
        }
    }, [addedSKU]);

    function mouseOver(tier) {
        setHover(true);
        setSkuTier(tier);
    }

    function mouseOut() {
        setHover(false);
    }

    //gets each sku for the recommended sku section
    function getEachSKU(skuInfor) {
        return (
            <button
                onMouseOver={() => { mouseOver(skuInfor.skuType) }}
                onMouseOut={mouseOut}
                className="text-sm relative bg-gray-350 dark:bg-[#262d33] rounded text-center mt-5 mx-2 mb-5 w-84 dark:hover:bg-opaque-0.2"
                onClick={(e) => {
                    //gets all the information of a specific sku
                    //console.log(skuInfor.skuType);
                    getCurrentSKUReference(skuInfor.skuType);

                    //sets the sku view to true meaning the specific sku is being viewed when clicked on
                    setSKUView(true);
                    /*
                    console.log({
                        skuType: skuInformation.skuType,
                        skuMain: skuInformation.skuMain,
                        skuPrice: skuInformation.skuPrice
                    });*/

                }}
            >
                <h1 className="bg-blue-400 dark:bg-blue-600 -mt-2 rounded-top-left-right" style={{ color: toggle?'#FFF':'#191C1F', fontWeight: 600 }} >{loading ? '' : skuInfor.skuType}</h1>
                <button className={`outline outline-dark bg-white dark:bg-[#262d33] absolute rounded-full p-2 ${toggle ? 'shadow-frost' :'shadow-dark'} left-50% ${hover && (skuInfor.skuType==skuTier)?'visible':'invisible'}`}>
                    <FontAwesomeIcon icon={faPenToSquare} className='text-blue-500 flex-shrink-0 w-5 h-4 transition duration-75  dark:text-blue-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                </button>
                <main className={`mt-2  text-gray-500 dark:text-gray-400 ${hover ? (skuInfor.skuType == skuTier) ? 'dark:text-gray-500' : '' : ''}`}>
                    <p className='mx-3'>{loading ? '' : skuInfor.skuMain}</p>
                    <p className='mx-3'>${loading ? '' : skuInfor.skuPrice} per month</p>
                </main>
            </button>
        );
    }

    function findClient() {
        return skuInformation.map((client) => client.clientName).indexOf(props.selectedClient);
    }

    function replaceOldToNewSKU(initialSKUTier, changedSKU) {
        if (!loading) {
            /*
            (skuInformation.filter(clientInfo => clientInfo.clientName === props.selectedClient))[0].skuDetails.filter(sku => sku.skuType === initialSKUTier)[0].skuType = changedSKU.skuType;
            (skuInformation.filter(clientInfo => clientInfo.clientName === props.selectedClient))[0].skuDetails.filter(sku => sku.skuType === initialSKUTier)[0].skuMain = changedSKU.skuMain;
            (skuInformation.filter(clientInfo => clientInfo.clientName === props.selectedClient))[0].skuDetails.filter(sku => sku.skuType === initialSKUTier)[0].skuPrice = changedSKU.skuPrice;
        */
            /*
            setSKUs(
                recommendedSKUByClient.map(eachSKU => {
                    if (eachSKU.skuType === initialSKUTier) {
                        let newSKU = { skuType: changedSKU.skuType, skuMain: changedSKU.skuMain, skuPrice: changedSKU.skuPrice }
                        return newSKU;
                    }
                    else {
                        return eachSKU;
                    }
                })
            );*/

            //console.log(skuInformation.findIndex(recommendedSKUByClient));

            const index = findClient();

            const updatedSKUs = (skuInformation.filter(clientInfo => clientInfo.clientName === props.selectedClient))[0].skuDetails.map(eachSKU => {
                if (eachSKU.skuType === initialSKUTier) {
                    let newSKU = {
                        skuType: (changedSKU.skuType === undefined || changedSKU.skuType == '' ? eachSKU.skuType : changedSKU.skuType),
                        skuMain: (changedSKU.skuMain === undefined || changedSKU.skuMain == '' ? eachSKU.skuMain : changedSKU.skuMain),
                        skuPrice: (changedSKU.skuPrice === undefined || changedSKU.skuPrice == ''  ? eachSKU.skuPrice : changedSKU.skuPrice)
                    }
                    return newSKU;
                }
                else {
                    return eachSKU;
                }
            });
            setSKUs(updatedSKUs);

            //console.log("updated",updatedSKUs);
            //console.log("skus",skus);
            //skuInformation.splice(index, 1);
            //skuInformation.push({ clientName: props.selectedClient, skuDetails: updatedSKUs });
            //console.log(skuInformation);
            //console.log("skus after", skus);
        }
    }

    function handleCurrentSKUDetailChange(changedSKU) {
        //console.log("changed",changedSKU);
        //console.log("skus", skus);
        //setSKUs(changedSKU);
        //console.log(recommendedSKUByClient[0].skuType);
        //console.log("current",currentSKUReference);
        const skuTier = recommendedSKUByClient[0].skuType;
        replaceOldToNewSKU(skuTier, changedSKU);
        
    }

    function makeNewAddedSKUInformation() {
        const newSKUInfo = [];
        skuInformation.map((skuClient) => {
            if (skuClient.clientName !== props.selectedClient) {
                newSKUInfo.push(skuClient);
            }
            else {
                newSKUInfo.push({ clientName: props.selectedClient, skuDetails: currentSKUs });
            }
        });
        skuInformation = newSKUInfo;
    }


    function handleAddedSKU(skuAdded) {
        setCurrentSKUs([...currentSKUs, skuAdded]);
        //console.log([...currentSKUs, skuAdded]);
        (skuInformation.filter(clientInfo => clientInfo.clientName === props.selectedClient))[0].skuDetails = ([...currentSKUs, skuAdded]);
        makeNewAddedSKUInformation();
        //console.log(skuInformation);
        setAddedSKU(skuAdded);
        //console.log("recommended", currentSKUs);
        setSKUs(currentSKUs);
    }

    if (loading) return <div>Loading Recommended SKUs...</div>

    return (
        <div className="inline-flex my-2 mx-2 h-48">
            <div className={`block rounded-xl text-center bg-[#C0D0E8] dark:bg-button-card p-4 px-6 h-64 w-132.8 ${toggle ? ' shadow-frost' :'shadow-dark'}`} >
                <span className={`block text-xl -mt-0.5 ${toggle ? 'text-bg-[#191C1F]' : 'text-white'}`}>Recommended SKU</span>
                <div className="inline-flex">
                    <div className='-ml-2 inline-flex overflow-x-scroll whitespace-nowrap rounded w-110 h-33 '>
                        {loading ? '' : currentSKUs.map(skuInformation => getEachSKU(skuInformation))}
                    </div>
                    <button className="mt-4.5 ml-2 dark:text-gray-400 bg-gray-350 dark:bg-[#262d33] dark:hover:bg-opaque-0.6 rounded-lg w-12 h-22"
                        onClick={(e) => {
                            setManageSKUs(!manageSKUs);
                            }}
                        >
                        <p className="text-sm mt-1.5 uppercase  text-gray-500 dark:text-gray-400">EDIT</p>
                        <FontAwesomeIcon icon={faPenToSquare} style={{ border: toggle ? '4px solid #FFF' : '4px solid #191C1F', color: toggle ? '#FFF' : '#191C1F' }} className={`mt-1 p-1.5 flex-shrink-0 w-4 rounded-full h-4 transition ${toggle ?' bg-blue-400':'dark:bg-blue-600'} duration-75 group-hover:text-gray-900 dark:group-hover:text-white`} />
                    </button>
                </div>
            </div>
            <SKUPopUp selectedClient={props.selectedClient} popupContent={currentSKUReference} popupContentChange={handleCurrentSKUDetailChange} isLoading={loading} isOpen={viewSKU} setIsOpen={setSKUView} title={'Edit ' + currentSKUReference.skuType + ' SKU'} />
            <EditSKUsPopUp selectedClient={props.selectedClient} popupContent={skus} isOpen={manageSKUs} setIsOpen={setManageSKUs} isLoading={loading} addSKUAction={handleAddedSKU}  />
        </div>
        );
}
