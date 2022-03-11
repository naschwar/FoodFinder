import React from 'react';
import { PAGES } from '../App';
const Nav = ({activePage, setActivePage}) => {
  return (<nav className="nav">
        <ul>
            <li className={activePage==PAGES.ABOUT ? 'active' : ''} onClick={()=>setActivePage(PAGES.ABOUT)}>About</li>
            <li  className={activePage==PAGES.FINDER ? 'active' : ''} onClick={()=>setActivePage(PAGES.FINDER)}>Food Finder</li>
        </ul>
    </nav>
)}

export default Nav;
