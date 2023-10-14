import React, { useState } from 'react';
import SlideUp from '../../assets/images/slideup.png'
import styles from './ScrollToTop.module.scss'

function Index() {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true);
        } else if (scrolled <= 300) {
            setVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    window.addEventListener('scroll', toggleVisible);

    return (
        <div
            style={{ display: visible ? 'inline' : 'none' }}
            className={styles.backToTop}
        >
            <button onClick={scrollToTop} aria-label='Back to top'>
               <img src={SlideUp} alt="Slideup" className={styles.icon} srcset="" />
            </button>
        </div>
    );
}

export default Index;