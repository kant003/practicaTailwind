import React from 'react';
import './Uh17styles.css';
import { useState } from 'react';

export default function Uh17() {

  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  React.useEffect(updateBackgroundColor, [red, green, blue]);

  const $table = document.getElementById("tabla");

  function updateBackgroundColor() {
    console.log($table?.style.backgroundColor)
    if ($table) $table.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
  }

  const changeColorRed = () => {
    console.log('Aumentando el porcentaje de rojo');
    setRed((prevRed) => Math.max(0, prevRed + 10));
  }

  const changeColorGreen = () => {
    console.log('Aumentando el porcentaje de verde');
    setGreen((prevGreen) => Math.max(0, prevGreen + 10));
  }

  const changeColorBlue = () => {
    console.log('Aumentando el porcentaje de azul');
    setBlue((prevBlue) => Math.max(0, prevBlue + 10));
  }

  React.useEffect(updateBackgroundColor, [red, green, blue]);


  return <table draggable='false'  className="table cursor-pointer select-none backgroundColor h-[501px] w-[500px] font-bold italic text-4xl" id="tabla">

    <th className=" px-4 py-2 align-middle" id='redFragment' onClick={changeColorRed} style={{ WebkitTextStroke: "1px black", color: "white" }}>R</th>
    <th className=" px-4 py-2 align-middle" id='greenFragment' onClick={changeColorGreen} style={{ WebkitTextStroke: "1px black", color: "white" }}>G</th>
    <th className=" px-4 py-2 align-middle" id='blueFragment' onClick={changeColorBlue} style={{ WebkitTextStroke: "1px black", color: "white" }}>B</th>

  </table>

}
