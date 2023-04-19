import React from 'react';
import { THEME_COLORS } from '../../resources/theme';

/* eslint-disable max-len */
const Work: React.FC<{ style?: React.CSSProperties; color?: string }> =
    React.memo((props) => {
        const { style, color } = props;
        return (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke={color}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={style}
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="3" y1="19" x2="21" y2="19" />
                <rect x="5" y="6" width="14" height="10" rx="1" />
            </svg>
        );
    });

export default Work;

Work.defaultProps = {
    style: {
        height: 40,
        width: 40,
    },
    color: THEME_COLORS.COLOR3,
};
