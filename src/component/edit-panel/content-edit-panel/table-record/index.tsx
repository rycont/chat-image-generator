import trashIcon from '@shade/icons/Trash.svg'
import { chatContentsSignal } from '@storage/chat-contents'
import { tableRowStyle } from '../style.css'
import { editableText, removeButton } from './style.css'
import SpeakerSelector from './speaker-selector'
import { popAppearProgressiveStyle, popAppearStyle } from '@shade/theme.css'

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

    function removeRecord() {
        setChatContents((prev) => {
            return prev.filter((prevRecord) => prevRecord.id !== record().id)
        })
    }

    return (
        <tr
            classList={{
                [tableRowStyle]: true,
                [popAppearStyle]: !record().speakerId,
                [popAppearProgressiveStyle]: !!record().speakerId,
            }}
        >
            <td>
                <SpeakerSelector recordIndex={props.index} />
            </td>
            <td>
                <input
                    type="text"
                    value={record().content ?? ''}
                    placeholder="내용"
                    onInput={updateContent.bind(null, 'content')}
                    class={editableText}
                />
            </td>
            <td>
                <input
                    type="text"
                    value={record().time ?? ''}
                    placeholder="시간"
                    class={editableText}
                    onInput={updateContent.bind(null, 'time')}
                />
                <div class={removeButton} onClick={removeRecord}>
                    <img src={trashIcon} />
                </div>
            </td>
        </tr>
    )
}
