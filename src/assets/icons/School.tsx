import React from 'react';
import { THEME_COLORS } from '../../resources/theme';

/* eslint-disable max-len */
const School: React.FC<{ style?: React.CSSProperties; color?: string }> =
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
                <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6" />
                <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4" />
            </svg>
        );
    });

export default School;

School.defaultProps = {
    style: {
        height: 40,
        width: 40,
    },
    color: THEME_COLORS.COLOR3,
};
