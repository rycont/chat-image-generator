import Dropdown from '@component/dropdown'
import { openAddSpeakerModal } from '@component/speaker-modal'

import { chatContentsSignal } from '@storage/chat-contents'
import { modalSignal } from '@storage/modal'
import { speakersSignal } from '@storage/speakers'

interface Props {
    recordIndex: number
}

const [speakers] = speakersSignal
const [chatContents, setChatContents] = chatContentsSignal

const speakerIds = () => [...speakers().keys()]

openAddSpeakerModal()

export default function SpeakerSelector(props: Props) {
    const thisRecord = () => chatContents()[props.recordIndex]
    const currentSpeakerId = () => thisRecord().speakerId!

    function updateSpeakerId(speakerId: string) {
        setChatContents((prev) =>
            prev.map((record) => {
                if (record.id === thisRecord().id) {
                    return {
                        ...record,
                        speakerId,
                    }
                }

                return record
            })
        )
    }

    return (
        <Dropdown
            items={speakerIds()}
            selected={currentSpeakerId()}
            onChange={(id) => updateSpeakerId(id)}
            onEdit={(id) => console.log({ id })}
            addItem={() => (
                <sh-vert data-fillx x="center" onClick={openAddSpeakerModal}>
                    <sh-small-text L7>참여자 추가 +</sh-small-text>
                </sh-vert>
            )}
        >
            {(props) => (
                <>
                    <sh-small-text L10>
                        {speakers().get(props.id)?.name ?? '이름없음'}
                    </sh-small-text>
                </>
            )}
        </Dropdown>
    )
}
