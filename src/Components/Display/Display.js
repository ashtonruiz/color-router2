import React from 'react';
import { useParams } from 'react-router-dom';

export default function Display() {
  const { red, green, blue } = useParams();

  return (
    <div style={{ backgroundColor: `rgb(${red}, ${green}, ${blue})` }}>RGB({ red }, { green }, { blue })</div>
  );
}