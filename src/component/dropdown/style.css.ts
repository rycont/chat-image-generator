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
    outline: 'none',
})

export const itemStyle = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    transition: vars.timing.ease,
    backgroundColor: vars.color.L1,
    selectors: {
        '&[data-focused]': {
            backgroundColor: vars.color.L2,
        },
    },
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
    selectors: {
        [`${itemStyle}[data-focused] &`]: {
            opacity: 1,
        },
    },
})

const optionsWrapperAppear = keyframes({
    from: {
        borderColor: 'transparent',
        transform: 'scaleY(0.5)',
        marginTop: '-3rem',
    },
    to: {
        borderColor: vars.color.L4,
        transform: 'scaleY(1)',
        marginTop: '2rem',
    },
})

export const optionsWrapperStyle = style({
    transformOrigin: 'top center',
    transition: vars.timing.ease,
    position: 'absolute',
    width: '100%',
    border: `0.5rem solid ${vars.color.L4}`,
    boxSizing: 'border-box',
    borderRadius: '3rem',
    overflow: 'hidden',
    animation: `${optionsWrapperAppear} ${vars.bezier.ease} 300ms`,
    marginTop: '2rem',
})

export const currentItemStyle = style({
    backgroundColor: vars.color.L2,
    border: `0.5rem solid ${vars.color.L4}`,
    borderRadius: '3rem',
    boxSizing: 'border-box',
})

globalStyle(`.${wrapperStyle}:focus .${currentItemStyle}`, {
    borderColor: vars.color.L6,
    backgroundColor: vars.color.L1,
})

export const optionsWrapperDisappearStyle = style({
    animation: `${keyframes({
        from: {
            borderColor: vars.color.L4,
        },
        to: {
            borderColor: 'transparent',
        },
    })} ${vars.bezier.ease} 300ms forwards`,
})

export const itemAdderStyle = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
})

globalStyle(`.${wrapperStyle}:has(.${optionsWrapperStyle})`, {})

const progressiveDelay: Record<string, CSSProperties> = {}
const progressiveDelayReverse: Record<string, CSSProperties> = {}

const gap = 50

for (let i = 2; i < 10; i++) {
    const selector = `&:nth-of-type(${i})`
    const rule = {
        animationDelay: gap * (i - 1) + 'ms',
    }
    progressiveDelay[selector] = rule

    const reverseSelector = `&:nth-last-of-type(${i})`
    progressiveDelayReverse[reverseSelector] = rule
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
        animation: `${popAppear} ${vars.bezier.ease} 300ms forwards`,
        selectors: progressiveDelay,
    },
    'progressively-appear'
)

export const disappearStyle = style({
    opacity: 1,
    transform: 'translateY(0)',
    animation: `${keyframes({
        from: {
            opacity: 1,
            transform: 'translateY(0)',
        },
        to: {
            opacity: 0,
            transform: 'translateY(-2rem)',
        },
    })} ${vars.bezier.ease} 300ms forwards`,
    pointerEvents: 'none',
    selectors: progressiveDelayReverse,
})
