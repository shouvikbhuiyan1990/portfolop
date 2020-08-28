import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import ScrollAnimation from 'react-animate-on-scroll';
import Parser from 'rss-parser';

import styles from './skills.css';

const cx = classNames.bind(styles);
const parser = new Parser();
const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"; //this is a workaround for cors error avoid

const Skills = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            let rss = await parser.parseURL(CORS_PROXY + 'https://medium.com/feed/@shouvikbhuiyan1990');
            if (rss && rss.items && rss.items.length > 0) {
                setArticles(rss.items)
            }
        };
        fetchArticles();
    });

    return (
        <ScrollAnimation animateIn="fadeIn">
            <div className={`${cx('reactComponent')}`}>
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
                                <i class="fab fa-angular"></i>
                                <i class="fab fa-vuejs"></i>
                            </div>
                            <p>JS Frameworks</p>
                        </li>
                        <li>
                            <div className={cx(styles.iconContainer)}>
                                <i class="fab fa-html5"></i>
                            </div>
                            <p>HTML</p>
                        </li>
                        <li>
                            <div className={cx(styles.iconContainer)}>
                                <i class="fab fa-css3"></i>
                                <i class="fab fa-less"></i>
                                <i class="fab fa-sass"></i>
                            </div>
                            <p>CSS, LESS & SASS</p>
                        </li>
                        <li>
                            <div className={cx(styles.iconContainer)}>
                                <i class="fas fa-desktop"></i>
                                <i class="fas fa-mobile-alt"></i>
                                <i class="fas fa-tablet-alt"></i>
                            </div>
                            <p>Responsive Designs</p>
                        </li>
                        <li>
                            <div className={cx(styles.iconContainer)}>
                                <i class="fab fa-windows"></i>
                                <i class="fab fa-apple"></i>
                                <i class="fab fa-android"></i>
                            </div>
                            <p>Cross Platform, Flutter & React Native</p>
                        </li>
                        <li>
                            <div className={cx(styles.iconContainer)}>
                                <i class="fas fa-database"></i>
                                <i class="fab fa-jenkins"></i>
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