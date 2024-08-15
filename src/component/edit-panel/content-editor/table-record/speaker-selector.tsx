import Dropdown from '@component/dropdown'
import {
    openAddSpeakerModal,
    openEditSpeakerModal,
} from '@component/speaker-modal'

import { chatContentsSignal } from '@storage/chat-contents'
import { speakersSignal } from '@service/speaker/storage'
import { createEffect, Show } from 'solid-js'
import getAvatarImageURL from '@service/avatar/get-avatar-image-url'
import { speakerDropdownAvatarImage } from './style.css'

interface Props {
    recordIndex: number
}

const [speakers] = speakersSignal
const [chatContents, setChatContents] = chatContentsSignal

const speakerIds = () => [...speakers().keys()]

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
            onEdit={openEditSpeakerModal}
            addItem={() => (
                <sh-vert
                    data-fillx
                    x="center"
                    onClick={openAddSpeakerModal.bind(null, updateSpeakerId)}
                >
                    <sh-small-text L7>참여자 추가 +</sh-small-text>
                </sh-vert>
            )}
        >
            {(props) => <SpeakerListItem id={props.id} />}
        </Dropdown>
    )
}

function SpeakerListItem(props: { id: string }) {
    const thisSpeaker = () => speakers().get(props.id)

    return (
        <sh-horz gap={1} y="center">
            <Show when={thisSpeaker()?.avatar}>
                {(avatar) => (
                    <img
                        src={getAvatarImageURL(avatar())}
                        class={speakerDropdownAvatarImage}
                    />
                )}
            </Show>
            <sh-small-text L10>
                {thisSpeaker()?.name ?? '선택해주세요'}
            </sh-small-text>
        </sh-horz>
    )
}
