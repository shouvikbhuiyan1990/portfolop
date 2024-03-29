import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import ScrollAnimation from 'react-animate-on-scroll';
import axios from 'axios';

import styles from './skills.css';

const cx = classNames.bind(styles);

const Skills = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            let { data } = await axios(' https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40shouvikbhuiyan');
            if (data && data.items && data.items.length > 0) {
                setArticles(data.items)
            }
        };
        fetchArticles();
    }, []);

    return (
        <ScrollAnimation animateIn="fadeIn">
            <div className={`${cx('reactComponent')}`} id="skills">
                <div className={cx(styles.skills)}>
                    <p className={cx('heading')}>Skills</p>
                    <ul>
                        <li>
                            <div className={cx(styles.iconContainer)}>
                                <i className="fab fa-node"></i>
                            </div>
                            <p>NodeJs</p>
                        </li>
                        <li>
                            <div className={cx(styles.iconContainer)}>
                                <i className="fab fa-js"></i>
                            </div>
                            <p>Javascript</p>
                        </li>
                        <li>
                            <div className={cx(styles.iconContainer)}>
                                <i className="fab fa-react"></i>
                                <i className="fab fa-angular"></i>
                                <i className="fab fa-vuejs"></i>
                            </div>
                            <p>JS Frameworks</p>
                        </li>
                        <li>
                            <div className={cx(styles.iconContainer)}>
                                <i className="fab fa-html5"></i>
                            </div>
                            <p>HTML</p>
                        </li>
                        <li>
                            <div className={cx(styles.iconContainer)}>
                                <i className="fab fa-css3"></i>
                                <i className="fab fa-less"></i>
                                <i className="fab fa-sass"></i>
                            </div>
                            <p>CSS, LESS & SASS</p>
                        </li>
                        <li>
                            <div className={cx(styles.iconContainer)}>
                                <i className="fas fa-desktop"></i>
                                <i className="fas fa-mobile-alt"></i>
                                <i className="fas fa-tablet-alt"></i>
                            </div>
                            <p>Responsive Designs</p>
                        </li>
                        <li>
                            <div className={cx(styles.iconContainer)}>
                                <i className="fab fa-windows"></i>
                                <i className="fab fa-apple"></i>
                                <i className="fab fa-android"></i>
                            </div>
                            <p>Cross Platform, Flutter & React Native</p>
                        </li>
                        <li>
                            <div className={cx(styles.iconContainer)}>
                                <i className="fas fa-database"></i>
                                <i className="fab fa-jenkins"></i>
                            </div>
                            <p>Database & Devops</p>
                        </li>
                    </ul>
                </div>
                <div className={cx(styles.articles)}>
                    {
                        articles.length > 0 && <div>
                            <p className={cx('heading')}>Artciles By Shouvik</p>
                            <ul>
                                {
                                    articles.map((value) => (
                                        <li><a href={value.link}>{value.title}</a></li>
                                    ))
                                }
                            </ul>
                        </div>
                    }
                </div>
            </div>
        </ScrollAnimation>
    );
};

export default Skills;