import React from 'react';
import { useParams } from 'react-router-dom';
import './Display.css';

export default function Display() {
  const { red, green, blue } = useParams();

  return (
    <div className='background' style={{ backgroundColor: `rgb(${red}, ${green}, ${blue})` }}>RGB({ red }, { green }, { blue })</div>
  );
}