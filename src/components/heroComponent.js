import React from 'react';
import classNames from 'classnames/bind';
import ScrollAnimation from 'react-animate-on-scroll';
import styles from './heroComponent.css';

const cx = classNames.bind(styles);


const Hero = (props) => {
    return (
        <div className={cx('hero')}>
            <ScrollAnimation animateIn="fadeIn">
                <div className={cx('hero-content')}>
                    <img src="https://via.placeholder.com/350x350" alt="profile"></img>
                    <p>Shouvik Bhuiyan</p>
                    <ul>
                        <li>Javascript Enthusiast</li>
                        <li>Web Application Developer</li>
                        <li>Full Stack</li>
                    </ul>
                </div>
            </ScrollAnimation>
        </div>
    );
}

export default Hero;