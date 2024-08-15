import { modalSignal } from '@storage/modal'
import { Show } from 'solid-js'
import { backdropStyle, modalWrapperStyle } from './style.css'
import { Dynamic } from 'solid-js/web'

const [modalContent] = modalSignal

export default function ModalPlaceholder() {
    return (
        <Show when={modalContent()}>
            {(content) => (
                <div class={backdropStyle}>
                    <div class={modalWrapperStyle}>
                        <Dynamic component={content()} />
                    </div>
                </div>
            )}
        </Show>
    )
}
