import React from 'react';
import classNames from 'classnames/bind';
import ScrollAnimation from 'react-animate-on-scroll';

import styles from './career.css';

const cx = classNames.bind(styles);

const Career = () => {
    return (
        <ScrollAnimation animateIn="fadeIn">
            <div className={`${cx('reactComponent')} ${cx(styles.career)}`}>
                <p className={cx('heading')}>Career Graph</p>
                <div className={cx(styles.centerContent)}>
                    <ul>
                        <li>
                            <span>2020</span>
                            <span className={cx(styles.companyName)}>Publicis Sapient (Contd.)</span>
                        </li>
                        <li>
                            <span>2018</span>
                            <span className={cx(styles.companyName)}>Publicis Sapient</span>
                        </li>
                        <li>
                            <span>2017</span>
                            <span className={cx(styles.companyName)}>JP Morgan</span>
                        </li>
                        <li>
                            <span>2015</span>
                            <span className={cx(styles.companyName)}>Deloitte</span>
                        </li>
                        <li>
                            <span>2014</span>
                            <span className={cx(styles.companyName)}>Publicis Sapient</span>
                        </li>
                        <li>
                            <span>2012</span>
                            <span className={cx(styles.companyName)}>Cognizant</span>
                        </li>
                    </ul>
                </div>
                <div className={cx(styles.centerContent)}>
                    <button>Download Text Resume</button>
                </div>
            </div>
        </ScrollAnimation>
    );
};

export default Career;