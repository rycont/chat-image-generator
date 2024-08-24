import editIcon from '@shade/icons/Pen.svg'

import saveChatImage from '@service/save-chat-image'

import { currentEditPanelSignal, EDIT_PANEL } from '@storage/current-edit-panel'
import { editingPartSignal } from '@storage/editing-part'
import SaveImageButton from './save-image-button'

const [getCurrentEditPanel, setCurrentEditPanel] = currentEditPanelSignal
const [_getEditingPart, setEditingPart] = editingPartSignal

export default function Titlebar() {
    const getEditPanelSwitchText = () =>
        getCurrentEditPanel() === EDIT_PANEL.CHAT
            ? '모양 바꾸기'
            : '내용 바꾸기'

    return (
        <sh-horz x="space">
            <sh-title>채팅 이미지 생성기</sh-title>

            <sh-horz gap={2}>
                <sh-button type="ghost" onClick={switchEditPanel}>
                    <img src={editIcon} alt="edit icon" />
                    {getEditPanelSwitchText()}
                </sh-button>
                <SaveImageButton type="svg">SVG로 저장하기</SaveImageButton>
                <SaveImageButton type="png">이미지로 저장하기</SaveImageButton>
            </sh-horz>
        </sh-horz>
    )
}

function switchEditPanel() {
    if (getCurrentEditPanel() === EDIT_PANEL.CHAT) {
        setCurrentEditPanel(EDIT_PANEL.STYLE)
        setEditingPart(null)
    } else {
        setCurrentEditPanel(EDIT_PANEL.CHAT)
    }
}
