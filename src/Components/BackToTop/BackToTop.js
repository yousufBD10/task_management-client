import React, { useEffect } from 'react';
import { useState } from 'react';
import './BackToTop.css'
import { FaArrowUp } from 'react-icons/fa';

const BackToTop = ({ children }) => {
    const scrollToTopButtonShowPosition = 50;
    const [scrollToTopButtonShow, setScrollToTopButtonShow] = useState(false);

    const [scrollStatus, setScrollStatus] = useState(0);

    useEffect(() => {
        window.addEventListener('scroll', onScrollProgress);
        return () => {
            window.removeEventListener('scroll', onScrollProgress);
        };
    }, []);


    const CircularProgressBar = ({ progressValue = 20, handleBackToTop }) => {
        return (
            <div>
                <div onClick={handleBackToTop} className='progress' style={{ height: 'calc(6vmin + 12px)', width: 'calc(6vmin + 12px)', background: `conic-gradient(rgb(125,211,252) ${progressValue}%, #d7d7d7 ${progressValue}%)` }}>
                    <span className='progress-value' style={{ fontSize: 'calc(2vmin + 12px)' }}> <FaArrowUp /></span>
                </div>
            </div>
        );
    };

    const onScrollProgress = () => {
        const html = document.documentElement;
        const scrollPx = html.scrollTop;
        const winHeightPx = html.scrollHeight - html.clientHeight;
        const scrolled = `${(scrollPx / winHeightPx) * 100}%`;
        setScrollStatus(scrolled);
        setScrollToTopButtonShow(window.scrollY > scrollToTopButtonShowPosition);
    };
    const scrollToTop = () => {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    };

    return (
        <div>
            <div style={{ top: '0px', left: '0px', width: '100%', }}>
                {
                    scrollToTopButtonShow && <CircularProgressBar progressValue={Math.floor(parseInt(scrollStatus))} handleBackToTop={scrollToTop} />
                }
            </div>
            {children}
        </div>
    );
};

export default BackToTop;