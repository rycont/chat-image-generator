import { chatContentsSignal } from '@storage/chat-contents.ts'
import { speakersSignal } from '@service/speaker/storage.ts'
import { For, Show } from 'solid-js'
import { EDITABLE_PARTS } from '@storage/style-control.ts'
import getAvatarImageURL from '@service/avatar/get-avatar-image-url.ts'
import createStyleEditable from './create-style-editable.ts'
import { previewWrapper } from './style.css.ts'

export default function ChatPreview() {
    const chatRecords = chatContentsSignal[0]
    const speakers = speakersSignal[0]

    const wrapper = createStyleEditable(EDITABLE_PARTS.CHAT_WRAPPER)
    const chatBubble = createStyleEditable(EDITABLE_PARTS.CHAT_BUBBLE)
    const speakerText = createStyleEditable(EDITABLE_PARTS.SPEAKER_TEXT)
    const speakerAvatarStyle = createStyleEditable(
        EDITABLE_PARTS.SPEAKER_AVATAR
    )
    const timeTextStyle = createStyleEditable(EDITABLE_PARTS.TIME_TEXT)

    return (
        <div {...wrapper()} class={previewWrapper} data-fillx data-filly>
            <sh-vert gap={4}>
                <For each={chatRecords()}>
                    {(record) => (
                        <sh-horz gap={2}>
                            <Show
                                when={speakers().get(record.speakerId!)?.avatar}
                            >
                                {(avatar) => (
                                    <img
                                        src={getAvatarImageURL(avatar())}
                                        alt="avatar"
                                        {...speakerAvatarStyle()}
                                    />
                                )}
                            </Show>
                            <sh-vert gap={2} data-fillx>
                                <sh-horz gap={1} y="center">
                                    <div {...speakerText()}>
                                        {
                                            speakers().get(record.speakerId!)
                                                ?.name
                                        }
                                    </div>
                                    <Show when={record.time}>
                                        <div {...timeTextStyle()}>
                                            {record.time}
                                        </div>
                                    </Show>
                                </sh-horz>
                                <div {...chatBubble()}>{record.content}</div>
                            </sh-vert>
                        </sh-horz>
                    )}
                </For>
            </sh-vert>
        </div>
    )
}
