import React, { createContext, userContext } from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/solid';
import { ThemeContext } from "./../ThemeContext/ThemeContext"
export const DarkMode = (props) => {
    const { toggle, toggleFunction } = React.useContext(ThemeContext);
    const contents = toggle ? <><SunIcon className='h-6 w-6 text-base dark:text-white mx-2.5 cursor-pointer' /> <MoonIcon className='h-6 w-6 text-base dark:text-white mx-2.5 cursor-pointer hidden' /></> :
    <><SunIcon className='h-6 w-6 text-base dark:text-white mx-2.5 cursor-pointer hidden' /> <MoonIcon className='h-6 w-6 text-base dark:text-white mx-2.5 cursor-pointer' /></> 

    return (
        <>
            <button id="theme-toggle" type='button' onClick={toggleFunction} data-tooltip-target="tooltip-toggle">
                {contents}
            </button>
            <div id="tooltip-toggle" role="tooltip" className="inline-block absolute invisible z-10 py-2 px-3 text-sm font-medium text-white bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg shadow-sm opacity-0 transition-opacity duration-300 tooltip {toggle?bg-gray-700}">
                {toggle ? 'Toggle dark mode' :'Toggle light mode'}
                <div className="tooltip-arrow" data-popper-arrow></div>
            </div>
        </>
    );
}

export default DarkMode;
