import { vars } from '@shade/theme.css'
import { globalStyle, style } from '@vanilla-extract/css'
import { editableText } from './table-record/style.css'
import { optionsWrapperStyle } from '@component/dropdown/style.css'

export const tableRowStyle = style({
    transition: vars.timing.ease,
    borderRadius: '3rem',
    position: 'relative',
    selectors: {
        '&:hover': {
            background: vars.color.L2,
        },
    },
})

globalStyle(`.${tableRowStyle}:has(.${optionsWrapperStyle})`, {
    zIndex: 1,
})

globalStyle(`.${tableRowStyle} td, .${tableRowStyle} th`, {
    padding: '3rem',
    transition: vars.timing.ease,
    borderRadius: '1rem',
    verticalAlign: 'middle',
})

globalStyle(`.${tableRowStyle} th:last-child`, {
    width: '30rem',
})

globalStyle(`.${tableRowStyle} th:first-child`, {
    width: '40rem',
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
