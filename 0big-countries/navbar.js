import React, { useState } from 'react';
import { DarkMode } from '../../components/DarkMode/DarkMode';
import { MenuIcon, UserCircleIcon } from '@heroicons/react/solid';
import Logo from '../../img/Logo.png'
import { ThemeContext } from "./../../components/ThemeContext/ThemeContext";

const Navbar = (props) => {
    const [darkMode, setDarkMode] = useState(true);

    const { toggle } = React.useContext(ThemeContext);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        darkMode ? window.document.documentElement.classList.remove('dark') : window.document.documentElement.classList.add('dark');
    };

    return (
        <nav className={`flex border-gray-200 px-2 bg-white sm:px-4 py-2.5 justify-between fixed w-full z-80 bg-[#C0D0E8] dark:bg-nav-bar ${toggle ? ' shadow-frost' :'shadow-dark'}`}>
            <div className="flex flex-wrap justify-between items-center z-60">
                {/* <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Bifrost</span> */}
                <button type='button' onClick={props.showSidebar}>
                    <MenuIcon className='h-8 w-8 text-gray-800 dark:text-white z-60' />
                </button>
            </div>
            <div className='flex justify-center'>
                <img className="h-6 w-6 mt-2" src={Logo} alt="Bifrost Logo" />
                <span className="text-center dark:text-white uppercase px-2 py-2 ">Bifrost</span>
            </div>
            <div className='flex justify-center p-1'>
                <DarkMode toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
                <UserCircleIcon className='h-8 w-8 mt-0.5 text-gray-800 dark:text-white z-[60]'/>
            </div>
        </nav>
    );
}

export default Navbar;
