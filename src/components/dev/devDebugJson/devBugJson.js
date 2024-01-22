'use client';
import { useState } from "react";
import styles from "./devDebugJson.module.css"
import { 
    FaChevronUp,
    FaChevronDown 
} from "react-icons/fa";

// Client Component.
const DevDebugJson = ({ content }) => {
    // State.
    const [active, setActive] = useState(false);

    // Benytter en ternary operator for at sætte Icon efter active true/false.
    let icon = active ? <FaChevronUp  /> :  <FaChevronDown />;
    
    // Benytter en ternary operator for at sætte Style efter active true/false.
    let style = active ? styles.active : '';

    // Template (benytter style, icon og content variablerne).
    return <div className={`${styles.container} ${style}`}>
        <div className={styles.handle} onClick={() => setActive(!active)}>
            {icon} Print Json
        </div>
        <pre className={styles.content}>
            {JSON.stringify(content, null, 2)}
        </pre>
    </div>

};

// Default Export.
export default DevDebugJson;