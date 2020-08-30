import React, { useState } from 'react';
import classNames from 'classnames/bind';
import ScrollAnimation from 'react-animate-on-scroll';
import styles from './heroComponent.css';

const cx = classNames.bind(styles);


const Hero = (props) => {
    const [showPopup, setpopupState] = useState(false);

    return (
        <ScrollAnimation animateIn="fadeIn">
            <div className={cx('hero')}>
                {
                    showPopup && <div className={cx(styles.popup)}>
                        <div>
                            <i className="fas fa-times"  onClick={() => setpopupState(!showPopup)}></i>
                            <ul>
                                <li><a href="#about" onClick={() => setpopupState(!showPopup)}>About</a></li>
                                <li><a href="#skills" onClick={() => setpopupState(!showPopup)}>Skills</a></li>
                                <li><a href="#career" onClick={() => setpopupState(!showPopup)}>Career</a></li>
                            </ul>
                        </div>
                    </div>
                }
                <div className={cx('hero-content')}>
                    <i className="fas fa-bars" onClick={() => setpopupState(!showPopup)}></i>
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