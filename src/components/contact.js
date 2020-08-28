import React from 'react';
import classNames from 'classnames/bind';
import ScrollAnimation from 'react-animate-on-scroll';

import styles from './contact.css';

const cx = classNames.bind(styles);

const Contact = () => {
    return (
        <ScrollAnimation animateIn="fadeIn">
            <div className={cx('reactComponent')}>
                <p className={cx('heading')}>Drop Me a Note</p>
                <ul>
                    <li>Reactjs</li>
                    <li>Nodejs</li>
                    <li>Javascript</li>
                    <li>React Native</li>
                    <li>Flutter</li>
                    <li>HTML5</li>
                    <li>Css</li>
                </ul>
            </div>
        </ScrollAnimation>
    );
};

export default Contact;