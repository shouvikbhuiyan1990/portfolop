import React from 'react';
import moment from 'moment';
import ScrollAnimation from 'react-animate-on-scroll';
import className from 'classnames/bind';
import style from './about.css';

const cx = className.bind(style);
const INITIAL_DOJ = moment('2012-05-24');
const CURRENT_DATE = moment(new Date());
const DIFF_DURATION = moment.duration(CURRENT_DATE.diff(INITIAL_DOJ));

const About = () => (
    <ScrollAnimation animateIn="fadeIn">
        <div className={`${cx(style.container)} ${cx('reactComponent')}`} id="about">
            <p>{`Shouvik is a Bangalore based software developer. He has ${DIFF_DURATION.years()} Years and ${DIFF_DURATION.months()} Months of experince in interactive website and web application development`}</p>
            <ul className={cx(style.social)}>
                <li>
                    <a href="https://www.facebook.com/shouvik1/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <span>shouvik1</span>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/shouvik-bhuiyan/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <span>shouvik-bhuiyan</span>
                </li>
                <li>
                    <a href="https://github.com/shouvikbhuiyan1990/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                    </a>
                    <span>shouvikbhuiyan1990</span>
                </li>
                <li>
                    <a href="mailto:shouvikbhuiyan1990@gmail.com" target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-envelope"></i>
                    </a>
                    <span>shouvikbhuiyan1990@gmail.com</span>
                </li>
            </ul>
        </div>
    </ScrollAnimation>
);

export default About;