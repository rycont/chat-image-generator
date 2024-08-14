import { chatContentsSignal } from '@storage/chat-contents'
import { editableText, tableRowStyle } from './style.css'

interface Props {
    index: number
}

export default function TableRecord(props: Props) {
    const [chatContents, setChatContents] = chatContentsSignal
    const record = () => chatContents()[props.index]

    function updateContent(field: string, event: Event) {
        const target = event.target

        if (!(target instanceof HTMLInputElement)) {
            return
        }

        setChatContents((prev) => {
            return prev.map((prevRecord) => {
                if (prevRecord.id === record().id) {
                    return {
                        ...prevRecord,
                        [field]: target.value,
                    }
                }

                return prevRecord
            })
        })
    }

    return (
        <tr class={tableRowStyle}>
            <td>{record().speaker.name}</td>
            <td>
                <input
                    type="text"
                    value={record().content}
                    onInput={updateContent.bind(null, 'content')}
                    class={editableText}
                />
            </td>
            <td>
                <input
                    type="text"
                    value={record().time}
                    class={editableText}
                    onInput={updateContent.bind(null, 'time')}
                />
            </td>
        </tr>
    )
}
