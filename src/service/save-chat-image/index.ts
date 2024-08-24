import { toPng, toSvg } from 'html-to-image'
import { chatPreviewElementRef } from '@component/chat-preview'

export default async function saveChatImage(type: 'png' | 'svg') {
    const chatPreview = chatPreviewElementRef
    if (!chatPreview) {
        return
    }

    const imageLink = await (type === 'png' ? toPng : toSvg)(chatPreview)

    saveFile(imageLink, type)
    copyToClipboard(imageLink)
}

function saveFile(content: string, type: 'png' | 'svg') {
    const link = document.createElement('a')
    const blob = new Blob([content], { type: `image/${type}` })
    link.href = URL.createObjectURL(blob)
    link.download = `chat.${type}`
    link.click()
}

function copyToClipboard(content: string) {
    navigator.clipboard.writeText(content)
}
