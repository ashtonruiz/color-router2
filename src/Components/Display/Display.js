import React from 'react';
import { useParams } from 'react-router-dom';

export default function Display() {
  const { red, green, blue } = useParams();

  return (
    <div>RGB({ red }, { green }, { blue })</div>
  );
}