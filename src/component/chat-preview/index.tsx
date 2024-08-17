import { chatContentsSignal } from '@storage/chat-contents.ts'
import { previewWrapper } from './style.css.ts'
import { speakersSignal } from '@service/speaker/storage.ts'
import { For, Show } from 'solid-js'
import {
    chatBubbleStyleSignal,
    chatWrapperStyleSignal,
    speakerAvatarStyleSignal,
    speakerTextStyleSignal,
    timeTextStyleSignal,
} from '@storage/style-control.ts'
import getAvatarImageURL from '@service/avatar/get-avatar-image-url.ts'

export default function ChatPreview() {
    const chatRecords = chatContentsSignal[0]
    const speakers = speakersSignal[0]

    const [wrapperStyle] = chatWrapperStyleSignal
    const [chatBubbleStyle] = chatBubbleStyleSignal
    const [speakerTextStyle] = speakerTextStyleSignal
    const [speakerAvatarStyle] = speakerAvatarStyleSignal
    const [timeTextStyle] = timeTextStyleSignal

    return (
        <div
            class={previewWrapper}
            style={wrapperStyle()}
            data-fillx
            data-filly
        >
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
                                        style={speakerAvatarStyle()}
                                    />
                                )}
                            </Show>
                            <sh-vert gap={2} data-fillx>
                                <sh-horz gap={1} y="center">
                                    <div style={speakerTextStyle()}>
                                        {
                                            speakers().get(record.speakerId!)
                                                ?.name
                                        }
                                    </div>
                                    <Show when={record.time}>
                                        <div style={timeTextStyle()}>
                                            {record.time}
                                        </div>
                                    </Show>
                                </sh-horz>
                                <div style={chatBubbleStyle()}>
                                    {record.content}
                                </div>
                            </sh-vert>
                        </sh-horz>
                    )}
                </For>
            </sh-vert>
        </div>
    )
}
