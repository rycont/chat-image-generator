import { modalSignal } from '@storage/modal'
import { createEffect, Show } from 'solid-js'
import { backdropStyle, modalWrapperStyle } from './style.css'
import { Dynamic } from 'solid-js/web'
import { popAppearStyle } from '@shade/theme.css'

const [modalContent, setModalContent] = modalSignal

export default function ModalPlaceholder() {
    createEffect(() => {
        if (!modalContent()) {
            return
        }

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                setModalContent(null)
            }
        })
    })
    return (
        <Show when={modalContent()}>
            {(content) => (
                <div
                    class={backdropStyle}
                    onClick={() => setModalContent(null)}
                >
                    <div
                        class={[modalWrapperStyle, popAppearStyle].join(' ')}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Dynamic
                            component={content()}
                            close={() => setModalContent(null)}
                        />
                    </div>
                </div>
            )}
        </Show>
    )
}
