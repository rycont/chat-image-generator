import { vars } from '@shade/theme.css'
import { globalStyle, style } from '@vanilla-extract/css'
import { editableText } from './table-record/style.css'

export const tableRowStyle = style({
    transition: vars.timing.ease,
    selectors: {
        '&:hover': {
            background: vars.color.L2,
        },
    },
})

globalStyle(`.${tableRowStyle} td, .${tableRowStyle} th`, {
    padding: '3rem',
    transition: vars.timing.ease,
    borderRadius: '1rem',
})

globalStyle(`.${tableRowStyle} th:last-child`, {
    width: '80px',
})

globalStyle(`.${tableRowStyle} td:has(input:focus)`, {
    boxShadow: `inset 0 0 0 0.5rem ${vars.color.L6}`,
})

globalStyle(`.${tableRowStyle} td:has(.${editableText})`, {
    padding: 0,
})

globalStyle(`.${tableRowStyle} th`, {
    textAlign: 'left',
})

export const chatListTable = style({
    margin: '-3rem',
    width: '100%',
})
