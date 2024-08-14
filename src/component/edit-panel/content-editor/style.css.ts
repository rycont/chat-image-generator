import { smallTextStyle } from '@shade/elements/typo/style.css'
import { vars } from '@shade/theme.css'
import { globalStyle, style } from '@vanilla-extract/css'

export const tableRowStyle = style({})

globalStyle(`.${tableRowStyle} td, .${tableRowStyle} th`, {
    padding: '3rem',
})

globalStyle(`.${tableRowStyle} th`, {
    textAlign: 'left',
})

export const editableText = style({
    border: 'none',
    background: 'transparent',
    color: vars.color.L10,
    padding: 'none',
    margin: 'none',
    width: '100%',
    ...smallTextStyle,
})

export const chatListTable = style({
    margin: '-3rem',
})
