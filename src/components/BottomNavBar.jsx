import React, { useState } from 'react';
import homeImg from '../images/navbar-images/home.png'
import problemImg from '../images/navbar-images/problem.png'
import gymImg from '../images/navbar-images/gym.png'
import personImg from '../images/navbar-images/person.png'


const BottomNavBar = () => {
  const [activeTab, setActiveTab] = useState('Home');

  const menuItems = [
    {label: "홈", src: homeImg},
    {label: "문제", src: problemImg},
    {label: "암장", src: gymImg},
    {label: "마이", src: personImg},
  ]

  return (
    <ul className='w-full h-12.5 flex justify-around items-center bg-slate-200 shadow-navBar z-10'>
      {
        menuItems.map((item, index) => (
          <li className='w-12.5 h-12.5' key={index}>
            <img src={item.src} alt={item.label} className='w-8 h-8'/>
            <div className='w-12.5 text-xs text-center'>{item.label}</div>
          </li>
        ))
      }
    </ul>
  );
};

export default BottomNavBar;
