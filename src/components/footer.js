import React from 'react';
import classNames from 'classnames/bind';

import styles from './footer.css';

const cx = classNames.bind(styles); //this is a workaround for cors error avoid

const Skills = () => {

    return (
        <div className={`${cx(styles.footer)}`}>
            <div className={`${cx('reactComponent')}`}>
                <p>No information is collected through this site, and no cookies are used</p>
                <p>The third party trademarks, logos, links, images and content, included in this site, have separate and independant copyrights and pivacy policies.</p>
                <p>None of those rights, responsibilities and liabilities, for the content and activities of these parties, are reserved.</p>
                <p>&copy; Shouvik Bhuiyan</p>
            </div>
        </div>
    );
};

export default Skills;