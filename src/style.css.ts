import { globalStyle, style } from '@vanilla-extract/css'

const VERTICAL_LAYOUT_THRESHOLD = '1090px'
const SMALL_TEXT_THRESHOLD = '480px'

export const panelWrapperStyle = style({
    display: 'flex',
    gap: '8rem',
    alignItems: 'flex-start',
    '@media': {
        [`(max-width: ${VERTICAL_LAYOUT_THRESHOLD})`]: {
            flexDirection: 'column',
            alignItems: 'stretch',
            overflowX: 'scroll',
            overflowY: 'visible',
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

globalStyle(':root', {
    '@media': {
        [`(max-width: ${SMALL_TEXT_THRESHOLD})`]: {
            fontSize: '3.6px',
        },
    },
})
