import editIcon from '@shade/icons/Pen.svg'

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
        <sh-horz x="space" linebreak gap={4}>
            <sh-vert y="bottom" gap={2}>
                <sh-title>채팅 이미지 생성기</sh-title>
                <sh-token>
                    <a href="https://github.com/rycont/chat-image-generator">
                        GitHub에서 소스코드 보기
                    </a>
                </sh-token>
            </sh-vert>

            <sh-horz gap={2} linebreak>
                <sh-button type="ghost" onClick={switchEditPanel}>
                    <img src={editIcon} alt="edit icon" />
                    {getEditPanelSwitchText()}
                </sh-button>
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
