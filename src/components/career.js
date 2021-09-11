import React from 'react';
import classNames from 'classnames/bind';
import ScrollAnimation from 'react-animate-on-scroll';
import moment from 'moment';
import ReactGA from 'react-ga';

import styles from './career.css';
import globalStyles from '../App.css';

const cx = classNames.bind(styles);
const cxg = classNames.bind(globalStyles);

const Career = () => {
    return (
        <ScrollAnimation animateIn="fadeIn">
            <div className={`${cx('reactComponent')} ${cx(styles.career)}`} id="career">
                <p className={cx('heading')}>Career Graph</p>
                <div className={cx(styles.centerContent)}>
                    <ul>
                        <li>
                            <span>{moment().year()}</span>
                            <span className={cx(styles.companyName)}>Lowes (Contd.)</span>
                        </li>
                        <li>
                            <span>2021</span>
                            <span className={cx(styles.companyName)}>Lowes</span>
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
                    <a onclick={() => ReactGA.event({
                        category: 'Download Resume',
                        action: 'Trying to Download Resume'
                    })}
                        className={cxg(globalStyles.button)}
                        href="./downloads/Resume.pdf"
                        download>
                        Download Text Resume
                    </a>
                </div>
            </div>
        </ScrollAnimation >
    );
};

export default Career;