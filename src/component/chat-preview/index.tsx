import { chatContentsSignal } from '@storage/chat-contents.ts'
import { previewWrapper } from './style.css.ts'
import { speakersSignal } from '@service/speaker/storage.ts'
import { For } from 'solid-js'
export default function ChatPreview() {
    const chatRecords = chatContentsSignal[0]
    const speakers = speakersSignal[0]

    return (
        <div class={previewWrapper} data-fillx data-filly>
            <sh-text>
                <For each={chatRecords()}>
                    {(record) => (
                        <div>
                            <sh-text>
                                {speakers().get(record.speakerId!)?.name}:{' '}
                                {record.content}
                            </sh-text>
                        </div>
                    )}
                </For>
            </sh-text>
        </div>
    )
}
