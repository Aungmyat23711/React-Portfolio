import React from 'react';
import Sun from '@iconscout/react-unicons/icons/uil-sun';
import Moon from '@iconscout/react-unicons/icons/uil-moon';
import './style.css';
import { themeContext } from '../../Context';
import { useContext } from 'react';
const Toggle = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const handleClick = () => [theme.dispatch({ type: 'toggle' })];
  return (
    <div className='toggle'>
      <Moon />
      <Sun />
      <div
        onClick={handleClick}
        className='t-button'
        style={darkMode ? { left: '2px' } : { right: '2px' }}
      ></div>
    </div>
  );
};

export default Toggle;
