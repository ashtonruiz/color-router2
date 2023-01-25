import React from 'react';
import { useParams } from 'react-router-dom';

export default function Display() {
  const { red, green, blue } = useParams();

  return (
    <div style={{ backgroundImage: `rbg${red}, ${green}, ${blue}` }}>RGB({ red }, { green }, { blue })</div>
  );
}