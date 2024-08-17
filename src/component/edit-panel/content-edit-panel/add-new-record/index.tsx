import { chatContentsSignal } from '@storage/chat-contents'
import { addNewRecordStyle } from './style.css'

export default function AddNewRecord() {
    function addNewRecord() {
        chatContentsSignal[1]((prev) => [
            ...prev,
            {
                id: crypto.randomUUID(),
            },
        ])
    }
    return (
        <button class={addNewRecordStyle} onClick={addNewRecord}>
            <sh-small-text>메시지 추가</sh-small-text>
        </button>
    )
}
