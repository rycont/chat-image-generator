import { modalSignal } from '@storage/modal'
import addFileIcon from '@shade/icons/AddFile.svg'
import { previewImageStyle } from './style.css'
import { createSignal, Show } from 'solid-js'
import { Avatar } from '@type/avatar'
import getAvatarImageURL from '@service/avatar/get-avatar-image-url'
import getRandomIconAvatar from '../../service/avatar/get-random-icon-avatar'
import createRandomName from '@service/speaker/create-random-name'

const [_, setModalContent] = modalSignal

function SpeakerModal() {
    const [avatar, setAvatar] = createSignal<Avatar | null>(null)
    const [speakerName, setSpeakerName] = createSignal<string | null>(null)

    async function onAvatarImageChange(event: Event) {
        const avatarImageURL = await parseFileEvent(event)
        setAvatar({
            source: 'url',
            value: avatarImageURL,
        })
    }

    function setRandomSpeaker() {
        setAvatar(getRandomIconAvatar())
        setSpeakerName(createRandomName())
    }

    return (
        <sh-vert gap={6}>
            <sh-title L10>새 참여자 만들기</sh-title>
            <sh-button type="ghost" onClick={setRandomSpeaker}>
                <img src={addFileIcon} alt="랜덤하게 참여자 만들기 아이콘" />
                랜덤하게 참여자 만들기
            </sh-button>
            <sh-label attr:title="이름">
                <sh-input attr:value={speakerName()}></sh-input>
            </sh-label>
            <sh-horz gap={3} data-fillx>
                <sh-label attr:title="프로필 사진" data-fillx>
                    <sh-input
                        type="file"
                        accept="image/png, image/jpeg"
                        onChange={onAvatarImageChange}
                    ></sh-input>
                </sh-label>
                <Show when={avatar()}>
                    {(avatar) => (
                        <img
                            src={getAvatarImageURL(avatar())}
                            alt=""
                            class={previewImageStyle}
                        />
                    )}
                </Show>
            </sh-horz>
        </sh-vert>
    )
}

function parseFileEvent(event: Event) {
    return new Promise<string>((resolve) => {
        const target = event.target as HTMLInputElement
        const file = target.files?.[0]

        if (!file) {
            return resolve('')
        }

        const reader = new FileReader()

        reader.addEventListener('load', (loadedEvent) => {
            const result = loadedEvent.target?.result as string
            resolve(result)
        })

        reader.readAsDataURL(file)
    })
}

export function openAddSpeakerModal(onAdded: (speakerId: string) => void) {
    setModalContent(() => (close) => <SpeakerModal />)
}
