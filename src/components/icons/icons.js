"use client";

import {
  FaBug,
  FaBrain,
  FaCat,
  FaHippo,
  FaSplotch,
  FaWaze,
  FaWheelchair,
  FaBed,
  FaAngellist,
  FaBowlRice,
} from "react-icons/fa6";
import styles from "./icons.module.css";
import { useState } from "react";
import DevActionBar from "../dev/devActionBar/devActionbar";

const DevIcons = () => {
  
  const [size, setSize] = useState(150);
  const [color, setColor] = useState('#FFFFFF');
  let style = {width: `${size}px`, height: `${size}px`, color: color}
  let config = {
    small : 50,
    medium : 100,
    max : 250
};

  return (
    <div className={styles.container}>
      
      <DevActionBar setColorFunction={setColor} setSizeFunction={setSize} size={size} config={config}></DevActionBar>

      <div className={styles.icons}>
        <FaBug style={style} />
        <FaBowlRice style={style} />
        <FaBrain style={style} />
        <FaCat style={style} />
        <FaAngellist style={style} />
        <FaSplotch style={style} />
        <FaHippo style={style} />
        <FaWaze style={style} />
        <FaWheelchair style={style} />
        <FaBed style={style} />
      </div>

      
    </div>
  );
};

export default DevIcons;
