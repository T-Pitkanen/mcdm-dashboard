'use client'
import { usePathname } from 'next/navigation';


import styles from './devAssignmentsNavBtn.module.css';
import { 
    FaJsSquare,
} from "react-icons/fa";
import Link from 'next/link';

const DevAssignmentsNavBtn = ({link, title}) => { 
    const pathname = usePathname()
    const active = pathname === link ? styles.active : ''
    return (
        <div className={`${styles.navBtn} ${active}`}>
            <Link href={`${link}`}><FaJsSquare / > {title}</Link>
        </div>
    );

};

export default DevAssignmentsNavBtn;