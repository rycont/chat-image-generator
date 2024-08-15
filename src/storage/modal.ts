import { createSignal, JSX } from 'solid-js'

type ModalContent = (props: { close: () => void }) => JSX.Element
export const modalSignal = createSignal<ModalContent | null>(null)
