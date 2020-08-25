import React from 'react';
import classNames from 'classnames/bind';
import Image from './common/image';
import styles from './heroComponent.css';

const cx = classNames.bind(styles);


const Hero = (props) => {
    return (
        <div className={cx('hero')}>
            <Image
                mobile={['https://via.placeholder.com/450x200']}
                tablet={['https://via.placeholder.com/650x250']}
                desktop={['https://via.placeholder.com/1350x550']}
            />
        </div>
    );
}

export default Hero;