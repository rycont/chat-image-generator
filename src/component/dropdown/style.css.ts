import { vars } from '@shade/theme.css'
import { globalStyle, style } from '@vanilla-extract/css'

export const wrapperStyle = style({
    cursor: 'pointer',
    position: 'relative',
})

export const itemStyle = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    transition: vars.timing.ease,
    backgroundColor: vars.color.L1,
})

export const contentAreaStyle = style({
    padding: '2rem 3rem',
})

export const buttonAreaStyle = style({
    padding: '3rem',
    backgroundColor: vars.color.L3,
    opacity: 0,
    transition: vars.timing.ease,
    borderTopLeftRadius: '3rem',
    borderBottomLeftRadius: '3rem',
})

export const optionsStyle = style({
    position: 'absolute',
    width: '100%',
    border: `0.5rem solid ${vars.color.L4}`,
    boxSizing: 'border-box',
})

export const currentItemStyle = style({
    backgroundColor: vars.color.L2,
    border: `0.5rem solid ${vars.color.L4}`,
    borderRadius: '3rem',
    boxSizing: 'border-box',
})

globalStyle(`.${optionsStyle} ~ .${currentItemStyle}`, {
    backgroundColor: 'red',
})

globalStyle(`.${itemStyle}:hover`, {
    backgroundColor: vars.color.L2,
})

globalStyle(`.${itemStyle}:hover .${buttonAreaStyle}`, {
    opacity: 1,
})
