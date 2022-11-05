/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const NavigationSidebar = (
 {
   active = 'explore'
 }
) => {
  active= window.location.pathname;
 return (
   <div className="list-group">
     <a className="list-group-item">Tuiter</a>
     <a className={`list-group-item
                    ${active === '/tuiter'?'active':''}`}>
       Home
     </a>
     <a className={`list-group-item
                    ${active === '/tuiter/explore'?'active':''}`}>
       Explore
     </a>
     <a className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
       Notifications
     </a>
     <a className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
       Messages
     </a>
     <a className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
       Bookmarks
     </a>
     <a className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
       Lists
     </a>
     <a className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
       Profile
     </a>
     <a className={`list-group-item
                    ${active === 'more'?'active':''}`}>
       More
     </a>
   </div>
 );
};
export default NavigationSidebar;