import { globalStyle, style } from '@vanilla-extract/css'

import { smallTextStyle } from '@shade/elements/typo/style.css'
import { vars } from '@shade/theme.css'

export const editableText = style({
    border: 'none',
    background: 'transparent',
    color: vars.color.L10,
    padding: '3rem',
    margin: 0,
    width: '100%',
    outline: 'none',
    boxSizing: 'border-box',
    ...smallTextStyle,
})

export const speakerDropdownAvatarImage = style({
    width: '5rem',
    height: '5rem',
})

export const removeButton = style({
    transition: vars.timing.ease,
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: 'translateY(-50%) translateX(10%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    aspectRatio: '1 / 1',
    padding: '3rem',
    borderTopLeftRadius: '3rem',
    borderBottomLeftRadius: '3rem',
    backgroundColor: vars.color.L3,
    opacity: 0,
    cursor: 'pointer',
    selectors: {
        '&:hover': {
            backgroundColor: vars.color.L4,
        },
    },
})

globalStyle(`td:has(.${removeButton})`, {
    position: 'relative',
})

globalStyle(`tr:hover .${removeButton}`, {
    opacity: 1,
    transform: 'translateY(-50%) translateX(0)',
})

globalStyle(`tr .${removeButton}:hover img`, {
    transform: 'scale(1.07)',
})
