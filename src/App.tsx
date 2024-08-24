import ChatPreview from '@component/chat-preview'
import Titlebar from '@component/titlebar'
import EditPanel from '@component/edit-panel'
import ModalPlaceholder from '@component/modal'
import { panelWrapperStyle } from './style.css'

function App() {
    return (
        <>
            <Titlebar />
            <ModalPlaceholder />
            <div class={panelWrapperStyle}>
                <ChatPreview />
                <EditPanel />
            </div>
        </>
    )
}

export default App
