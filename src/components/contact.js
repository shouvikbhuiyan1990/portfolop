import React, { useState } from 'react';
import classNames from 'classnames/bind';
import ScrollAnimation from 'react-animate-on-scroll';
import ReactGA from 'react-ga';

import styles from './contact.css';

const cx = classNames.bind(styles);

const Contact = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [description, setDescription] = useState('');
    const [subject, setSubject] = useState('');

    const onFieldChange = (event) => {
        // validationObject[event.target.name].
        switch (event.target.name) {
            case 'firstname':
                setFirstName(event.target.value);
                break;
            case 'lastname':
                setLastName(event.target.value);
                break;
            case 'subject':
                setSubject(event.target.value);
                break;
            case 'description':
                setDescription(event.target.value);
                break;
            default:
                break;
        }
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        ReactGA.event({
            category: 'Contact Me',
            action: 'Trying to send an email'
        });
        const mailBody = `Message From ${firstName} ${lastName}, ${description}`;
        window.location.href = `mailto:shouvikbhuiyan1990@gmail.com?subject=${subject}&body=${mailBody}`;
    };

    return (
        <ScrollAnimation animateIn="fadeIn">
            <div className={cx('reactComponent')}>
                <p className={cx('heading')}>Drop Me a Note</p>
                <form onSubmit={onFormSubmit}>
                    <div className={cx(styles.inputGroup)}>
                        <label for="firstname" className={cx(styles.srOnly)}>First Name</label>
                        <input className={cx(styles.firstname)} required name="firstname" id="firstname" type="text" placeholder="First Name" value={firstName} onChange={onFieldChange} />
                        <label for="lastname" className={cx(styles.srOnly)}>Last Name</label>
                        <input required name="lastname" id="lastname" type="text" placeholder="Last Name" value={lastName} onChange={onFieldChange} />
                    </div>
                    <div className={cx(styles.emailContainer)}>
                        <label for="subject" className={cx(styles.srOnly)}>Subject</label>
                        <input required name="subject" type="text" id="subject" placeholder="Subject" value={subject} onChange={onFieldChange} />
                    </div>
                    <label for="description" className={cx(styles.srOnly)}>Description</label>
                    <textarea required name="description" id="description" placeholder="description" value={description} onChange={onFieldChange} ></textarea>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </ScrollAnimation>
    );
};

export default Contact;