import React from 'react';
import Proptypes from 'prop-types';
import { Picture } from 'react-responsive-picture';

const Image = (props) => {
    const {
        mobile,
        tablet,
        desktop,
        className
    } = props;

    return (
        <div className={className}>
            <Picture
                sources={[
                    {
                        srcSet: `${mobile.join(',')}`,
                        media: "(max-width: 420px)",
                    },
                    {
                        srcSet: `${tablet.join(',')}`,
                        media: "(max-width: 780px)",
                    },
                    {
                        srcSet: `${desktop.join(',')}`,
                        type: "image/jpeg"
                    }
                ]}
            />
        </div>
    );
};

Image.propTypes = {
    mobile: Proptypes.array,
    tablet: Proptypes.array,
    desktop: Proptypes.array
};

export default Image;