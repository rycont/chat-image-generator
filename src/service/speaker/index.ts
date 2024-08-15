import { Avatar } from '@type/avatar'
import { speakersSignal } from './storage'
import { Speaker } from '@type/speaker'

const [_getSpeaker, setSpeakers] = speakersSignal

export default {
    add(name: string, avatar: Avatar) {
        const id = crypto.randomUUID()

        const newSpeaker: Speaker = {
            name,
            avatar,
            id,
        }

        setSpeakers((prev) => new Map([...prev, [id, newSpeaker]]))

        return id
    },
    edit(id: string, name: string, avatar: Avatar) {
        const newSpeaker: Speaker = {
            name,
            avatar,
            id,
        }

        setSpeakers((prev) => new Map([...prev, [id, newSpeaker]]))
    },
}
