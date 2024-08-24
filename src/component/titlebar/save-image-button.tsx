import saveIcon from '@shade/icons/Save.svg'
import saveChatImage from '@service/save-chat-image'
import { createSignal } from 'solid-js'

interface Props {
    type: 'png' | 'svg'
    children: string
}

export default function SaveImageButton(props: Props) {
    const [isLoading, setIsLoading] = createSignal<true | null>(null)

    async function onClick() {
        setIsLoading(true)
        await saveChatImage()
        setIsLoading(null)
    }

    return (
        <sh-button
            attr:type={props.type === 'png' ? 'accent' : 'ghost'}
            attr:loading={isLoading()}
            onClick={onClick}
        >
            <img src={saveIcon} alt="save icon" />
            {props.children}
        </sh-button>
    )
}
