import { Avatar } from '@type/avatar'

export default function getAvatarImageURL(avatar: Avatar) {
    if (avatar.source === 'url') {
        return avatar.value
    }

    if (avatar.source === 'tossface') {
        return `/tossface-svg/` + avatar.value
    }
}
