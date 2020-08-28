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
        <div className={`${cx(style.container)} ${cx('reactComponent')}`}>
            <p>{`Shouvik is a Bangalore based software developer. He has ${DIFF_DURATION.years()} Years and ${DIFF_DURATION.months()} Months of experince in interactive website and web application development`}</p>
            <ul className={cx(style.social)}>
                <li className="fab fa-facebook"></li>
                <li className="fab fa-linkedin"></li>
                <li className="fab fa-github"></li>
            </ul>
        </div>
    </ScrollAnimation>
);

export default About;