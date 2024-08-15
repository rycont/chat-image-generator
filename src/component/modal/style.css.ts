import { style } from '@vanilla-extract/css'

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
    zIndex: 1,
    padding: '4rem',
    boxSizing: 'border-box',
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
})
