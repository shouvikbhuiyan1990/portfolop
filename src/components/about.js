import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import className from 'classnames/bind';
import style from './about.css';

const cx = className.bind(style);

const About = () => (
    <ScrollAnimation animateIn="fadeIn">
        <div className={`${cx(style.container)} ${cx('reactComponent')}`}>
            <p>Shouvik is a Bangalore based software developer. He has 9 years of experince in developing interactive website and web application development</p>
            <ul className={cx(style.social)}>
                <li className="fab fa-facebook"></li>
                <li className="fab fa-linkedin"></li>
                <li className="fab fa-github"></li>
            </ul>
        </div>
    </ScrollAnimation>
);

export default About;