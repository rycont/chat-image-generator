import { vars } from '@shade/theme.css'
import { style } from '@vanilla-extract/css'

export const previewImageStyle = style({
    border: `0.5rem solid ${vars.color.L3}`,
    height: '20rem',
    width: '20rem',
    objectFit: 'cover',
    borderRadius: '3rem',
})
