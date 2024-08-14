import saveIcon from '@shade/icons/Save.svg'
import editIcon from '@shade/icons/Pen.svg'

export default function Titlebar() {
    return (
        <sh-horz x="space">
            <sh-title>채팅 이미지 생성기</sh-title>

            <sh-horz gap={2}>
                <sh-button type="ghost">
                    <img src={editIcon} alt="edit icon" />
                    모양 바꾸기
                </sh-button>
                <sh-button type="accent">
                    <img src={saveIcon} alt="save icon" />
                    이미지 저장하기
                </sh-button>
            </sh-horz>
        </sh-horz>
    )
}
