import { chatContentsSignal } from '@storage/chat-contents'
import { For } from 'solid-js'

import TableRecord from './table-record'
import AddNewRecord from './add-new-record'

import { chatListTable, tableRowStyle } from './style.css'
import Dropdown from '@component/dropdown'

export default function ContentEditor() {
    const chatRecords = chatContentsSignal[0]
    const lengthedArray = () => Array.from({ length: chatRecords().length })

    return (
        <div data-fillx>
            <Dropdown
                items={['1', '2', '3']}
                default={'1'}
                onChange={(e) => console.log(e)}
                onEdit={(id) => console.log({ id })}
                addItem={() => (
                    <sh-vert data-fillx x="center">
                        <sh-small-text L7>참여자 추가 +</sh-small-text>
                    </sh-vert>
                )}
            >
                {(props) => (
                    <>
                        <sh-small-text L10>{props.id}</sh-small-text>시치
                    </>
                )}
            </Dropdown>
            <table class={chatListTable}>
                <thead>
                    <tr class={tableRowStyle}>
                        <th>
                            <sh-token L9>말 한 사람</sh-token>
                        </th>
                        <th>
                            <sh-token L9>내용</sh-token>
                        </th>
                        <th>
                            <sh-token L9>시간</sh-token>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <For each={lengthedArray()}>
                        {(_record, index) => <TableRecord index={index()} />}
                    </For>
                </tbody>
            </table>
            <AddNewRecord />
        </div>
    )
}
