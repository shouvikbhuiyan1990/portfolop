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
                <form>
                    <div className={cx(styles.inputGroup)}>
                        <input type="text" placeholder="First Name"/>
                        <input type="text" placeholder="Last Name"/>
                    </div>
                    <div className={cx(styles.emailContainer)}>
                        <input type="email" placeholder="Email Id"/>
                    </div>
                    <textarea placeholder="description"></textarea>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </ScrollAnimation>
    );
};

export default Contact;