import { Avatar } from '@type/avatar'
import { speakersSignal } from './storage'
import { Speaker } from '@type/speaker'

export default {
    add(name: string, avatar: Avatar) {
        const id = crypto.randomUUID()

        const newSpeaker: Speaker = {
            name,
            avatar,
            id,
        }

        speakersSignal[1]((prev) => new Map([...prev, [id, newSpeaker]]))

        return id
    },
}
