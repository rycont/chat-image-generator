import { toPng } from 'html-to-image'
import { chatPreviewElementRef } from '@component/chat-preview'

export default async function saveChatImage() {
    const chatPreview = chatPreviewElementRef
    if (!chatPreview) {
        return
    }

    const imageLink = await toPng(chatPreview, {
        pixelRatio: 2,
    })

    saveFile(`chat.png`, imageLink)
    await copyToClipboard(imageLink)
}

function saveFile(filename: string, link: string) {
    const a = document.createElement('a')
    a.href = link
    a.download = filename
    a.click()
}

async function copyToClipboard(link: string) {
    const blob = await fetch(link).then((res) => res.blob())
    const clipboardItem = new ClipboardItem({ 'image/png': blob })
    await navigator.clipboard.write([clipboardItem])
}
