import { Speaker } from './speaker'

export interface ChatRecord {
    speaker: Speaker
    content: string
    time: string
    id: string
}
