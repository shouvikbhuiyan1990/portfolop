import React from 'react';
import classNames from 'classnames/bind';
import ScrollAnimation from 'react-animate-on-scroll';
import styles from './heroComponent.css';

const cx = classNames.bind(styles);


const Hero = (props) => {
    return (
        <ScrollAnimation animateIn="fadeIn">
            <div className={cx('hero')}>
                <div className={cx('hero-content')}>
                    <img src="../images/profile.jpg" alt="profile"></img>
                    <p>Shouvik Bhuiyan</p>
                    <ul>
                        <li>Javascript Enthusiast</li>
                        <li>Web Application Developer</li>
                        <li>Full Stack</li>
                    </ul>
                </div>
            </div>
        </ScrollAnimation>
    );
}

export default Hero;