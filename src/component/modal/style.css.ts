import { style } from '@vanilla-extract/css'

const MODAL_POSITION_THRESHOLD = 720

export const backdropStyle = style({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2,
    padding: '4rem',
    boxSizing: 'border-box',
    '@media': {
        [`(max-width: ${MODAL_POSITION_THRESHOLD}px)`]: {
            padding: '0rem',
            alignItems: 'flex-end',
        },
    },
})

export const modalWrapperStyle = style({
    backgroundColor: 'white',
    borderRadius: '3rem',
    display: 'flex',
    flexDirection: 'column',
    padding: '6rem',
    gap: '6rem',
    maxWidth: '120rem',
    width: '100%',
    '@media': {
        [`(max-width: ${MODAL_POSITION_THRESHOLD}px)`]: {
            borderBottomLeftRadius: '0',
            borderBottomRightRadius: '0',
        },
    },
})
