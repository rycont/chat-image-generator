import { vars } from '@shade/theme.css'
import { style } from '@vanilla-extract/css'

export const addNewRecordStyle = style({
    border: `0.5rem dashed ${vars.color.L3}`,
    background: vars.color.L2,
    width: '100%',
    display: 'block',
    padding: '3rem',
    marginTop: '6rem',
    color: vars.color.L7,
    borderRadius: '2rem',
    cursor: 'pointer',
})
