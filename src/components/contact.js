import React, { useState } from 'react';
import classNames from 'classnames/bind';
import ScrollAnimation from 'react-animate-on-scroll';

import styles from './contact.css';

const cx = classNames.bind(styles);

const Contact = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [description, setDescription] = useState('');
    const [subject, setSubject] = useState('');

    // const validationObject = {
    //     "firstname": {
    //         "isRequired": true,
    //         "message": {
    //             "isRequired": "Please Enter First Name"
    //         }
    //     },
    //     "lastname": {
    //         "isRequired": true,
    //         "message": {
    //             "isRequired": "Please Enter Last Name"
    //         }
    //     },
    //     "subject": {
    //         "isRequired": true,
    //         "message": {
    //             "isRequired": "Subject Can't be Empty"
    //         }
    //     },
    //     "description": {
    //         "isRequired": true,
    //         "minLength": 10,
    //         "message": {
    //             "isRequired": "Description Can't be Empty",
    //             "minLength": "Enter more words"
    //         }
    //     }
    // };

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
        const mailBody = `Message From ${firstName} ${lastName}, ${description}`;
        window.location.href = `mailto:shouvikbhuiyan1990@gmail.com?subject=${subject}&body=${mailBody}`;
    };

    return (
        <ScrollAnimation animateIn="fadeIn">
            <div className={cx('reactComponent')}>
                <p className={cx('heading')}>Drop Me a Note</p>
                <form onSubmit={onFormSubmit}>
                    <div className={cx(styles.inputGroup)}>
                        <input required name="firstname" type="text" placeholder="First Name" value={firstName} onChange={onFieldChange} />
                        <input required name="lastname" type="text" placeholder="Last Name" value={lastName} onChange={onFieldChange} />
                    </div>
                    <div className={cx(styles.emailContainer)}>
                        <input required name="subject" type="text" placeholder="Subject" value={subject} onChange={onFieldChange} />
                    </div>
                    <textarea required name="description" placeholder="description" value={description} onChange={onFieldChange} ></textarea>
                    <div>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </ScrollAnimation>
    );
};

export default Contact;