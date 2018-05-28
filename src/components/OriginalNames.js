import React from 'react';

const OriginalNames = (props) => (
  <ul className='list'>
    <li className="list__column-letter">
      A
    </li>
    <li className="list__header">
      Names
    </li>
    {props.names.map((name, index) => {
      return (
        <li key={index} className='list__item'>
          <input value={`${name.firstname} ${name.lastname}`} readOnly/>
        </li>
        )
    })}
  </ul>

);

export default OriginalNames;
