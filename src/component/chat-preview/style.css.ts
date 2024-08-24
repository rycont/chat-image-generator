import { vars } from '@shade/theme.css'
import { keyframes, style } from '@vanilla-extract/css'

export const previewWrapper = style({
    width: '100rem',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    transition: vars.timing.ease,
})

export const smoothTransition = style({
    transition: vars.timing.ease,
})

export const overlayStyle = style({
    position: 'fixed',
    pointerEvents: 'none',
    boxShadow: `0 0 0 0.5rem ${vars.color.orange}`,
    padding: '1rem',
    borderRadius: '1rem',
    animation: `${keyframes({
        from: { opacity: 0 },
        to: { opacity: 1 },
    })} ${vars.timing.ease} forwards`,

    selectors: {
        '&::before': {
            display: 'block',
            content: 'attr(data-overlay-text)',
            position: 'absolute',
            bottom: '-1rem',
            left: '-0.5rem',
            padding: '1.5rem',
            backgroundColor: vars.color.L8,
            color: 'white',
            borderRadius: '1rem',
            fontSize: '4rem',
            fontWeight: '500',
            transform: 'translateY(100%)',
            transition: vars.timing.ease,
            width: 'max-content',
        },
    },
})

export const speakerAvatarStyle = style({
    objectFit: 'cover',
})
