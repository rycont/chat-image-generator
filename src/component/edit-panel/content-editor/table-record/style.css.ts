import { style } from '@vanilla-extract/css'

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
