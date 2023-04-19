import React from 'react';
import { THEME_COLORS } from '../../resources/theme';

/* eslint-disable max-len */
const Tool: React.FC<{ style?: React.CSSProperties; color?: string }> =
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
                <path d="M7 10h3v-3l-3.5 -3.5a6 6 0 0 1 8 8l6 6a2 2 0 0 1 -3 3l-6 -6a6 6 0 0 1 -8 -8l3.5 3.5" />
            </svg>
        );
    });

export default Tool;

Tool.defaultProps = {
    style: {
        height: 40,
        width: 40,
    },
    color: THEME_COLORS.COLOR3,
};
