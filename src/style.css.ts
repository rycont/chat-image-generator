import { globalStyle, style } from '@vanilla-extract/css'

const VERTICAL_LAYOUT_THRESHOLD = '960px'

export const panelWrapperStyle = style({
    display: 'flex',
    gap: '8rem',
    alignItems: 'flex-start',
    '@media': {
        [`(max-width: ${VERTICAL_LAYOUT_THRESHOLD})`]: {
            flexDirection: 'column',
            alignItems: 'stretch',
        },
    },
})

globalStyle(`.${panelWrapperStyle} > [data-fillx]`, {
    flex: 1,
})

globalStyle('body', {
    '@media': {
        [`(max-width: ${VERTICAL_LAYOUT_THRESHOLD})`]: {
            padding: '8rem 4rem',
        },
    },
})
