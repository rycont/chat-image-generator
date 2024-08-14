import { chatContentsSignal } from '@storage/chat-contents.ts'
import { previewWrapper } from './style.css.ts'
export default function ChatPreview() {
    const chatRecords = chatContentsSignal[0]

    return (
        <div class={previewWrapper} data-fillx data-filly>
            <sh-text>
                {chatRecords()
                    .map((record) => record.content)
                    .join(', ')}
            </sh-text>
        </div>
    )
}
