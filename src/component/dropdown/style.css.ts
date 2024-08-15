import { vars } from '@shade/theme.css'
import {
    CSSProperties,
    globalStyle,
    keyframes,
    style,
} from '@vanilla-extract/css'

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

const optionsWrapperAppear = keyframes({
    from: {
        borderColor: 'transparent',
    },
    to: {
        borderColor: vars.color.L4,
    },
})

export const optionsWrapperStyle = style({
    transition: vars.timing.ease,
    position: 'absolute',
    width: '100%',
    border: `0.5rem solid ${vars.color.L4}`,
    boxSizing: 'border-box',
    borderBottomLeftRadius: '3rem',
    borderBottomRightRadius: '3rem',
    overflow: 'hidden',
    animation: `${optionsWrapperAppear} ${vars.bezier.ease} 500ms forwards`,
})

export const currentItemStyle = style({
    backgroundColor: vars.color.L2,
    border: `0.5rem solid ${vars.color.L4}`,
    borderRadius: '3rem',
    borderBottomLeftRadius: '3rem',
    borderBottomRightRadius: '3rem',
    boxSizing: 'border-box',
})

globalStyle(`.${itemStyle}:has(+ .${optionsWrapperStyle})`, {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomColor: 'transparent',
})

globalStyle(`.${itemStyle}:hover`, {
    backgroundColor: vars.color.L2,
})

globalStyle(`.${itemStyle}:hover .${buttonAreaStyle}`, {
    opacity: 1,
})

const progressiveAppear: Record<string, CSSProperties> = {}
const gap = 50

for (let i = 2; i < 10; i++) {
    const selector = [...'&'.repeat(i)].join('+')
    const rule = {
        animationDelay: gap * (i - 1) + 'ms',
    }
    progressiveAppear[selector] = rule
}

export const popAppear = keyframes({
    from: {
        opacity: 0,
        transform: 'translateY(-2rem)',
    },
    to: {
        opacity: 1,
        transform: 'translateY(0)',
    },
})
export const progressiveDropdown = style(
    {
        opacity: 0,
        transform: 'translateY(-2rem)',
        animation: `${popAppear} ${vars.bezier.ease} 500ms forwards`,
        selectors: progressiveAppear,
    },
    'progressively-appear'
)
