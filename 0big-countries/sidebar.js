import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faHouse } from '@fortawesome/free-solid-svg-icons';
import { HomeIcon } from '@heroicons/react/outline';
import { ThemeContext } from "./../../components/ThemeContext/ThemeContext";

export const Sidebar = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    const { toggle } = React.useContext(ThemeContext);

    const open = () => {
        setShowSidebar(!showSidebar);
    }

    return (
        <div className='relative z-70'>
            <Navbar showSidebar={open} />
            <aside className={` ${toggle ? ' filter-blur-frost' : 'filter-blur-dark'} ${toggle ? ' shadow-frost' : 'shadow-dark'} fixed left-0 top-0 flex flex-col h-full w-64 ease-in-out duration-300 absolute border-r-gray-300 mt-[50px] dark:border-r-gray-700 ${showSidebar ? 'translate-x-0' : '-translate-x-full'}`} aria-label="Sidebar">
                <div className='h-full mt-3 px-3 bg-transparent'>
                    <ul className='space-y-2'>
                        <li>
                            <NavLink onClick={open} to="/performance-test-results" className="flex items-center p-2 text-sm font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                                activeClassName="active flex items-center p-2 text-sm font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-70">
                                <FontAwesomeIcon icon={faHouse} className='flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white'/>
                                <span className="flex-1 ml-3 whitespace-nowrap">Home</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink onClick={open} to="/hyperscale" className="flex items-center p-2 text-sm font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                                activeClassName="active flex items-center p-2 text-sm font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <FontAwesomeIcon icon={faUsers} className='flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white' />
                                <span className="flex-1 ml-3 whitespace-nowrap">Hyperscale</span>
                            </NavLink>
                        </li>
                        <li>
                            <button type="button" className="flex items-center p-2 w-full text-sm font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                                <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd"></path></svg>
                                <span className="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item="">WFM</span>
                                <svg sidebar-toggle-item="" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </button>
                            <ul id="dropdown-example" className="hidden py-2 space-y-2">
                                <li>
                                    <a href="#" className="flex items-center p-2 pl-11 w-full text-sm font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Schedules</a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center p-2 pl-11 w-full text-sm font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Timesheet</a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center p-2 pl-11 w-full text-sm font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Time Away List</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <NavLink onClick={open} to="/performance-test-release-readiness" className="flex items-center p-2 text-sm font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                                activeClassName="active flex items-center p-2 text-sm font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>
                                <span className="flex-1 ml-3 whitespace-nowrap">Release Readiness</span>
                                <span className="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
                            </NavLink>
                        </li>
                        <li>
                            <button type="button" className="flex items-center p-2 w-full text-sm font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-example2" data-collapse-toggle="dropdown-example2">
                                <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clipRule="evenodd"></path></svg>
                                <span className="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item="">Operations</span>
                                <svg sidebar-toggle-item="" className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </button>
                            <ul id="dropdown-example2" className="hidden py-2 space-y-2">
                                <li>
                                    <a href="#" className="flex items-center p-2 pl-11 w-full text-sm font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Work Intake</a>
                                </li>
                                <li>
                                    <a href="#" className="flex items-center p-2 pl-11 w-full text-sm font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Risk Assessment</a>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-sm font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
                                <svg className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                                <span className="flex-1 ml-3 whitespace-nowrap">Admin</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
        </div>
    )
}
