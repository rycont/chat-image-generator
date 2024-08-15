import ChatPreview from '@component/chat-preview'
import Titlebar from '@component/titlebar'
import EditPanel from '@component/edit-panel'
import ModalPlaceholder from '@component/modal'

function App() {
    return (
        <>
            <Titlebar />
            <ModalPlaceholder />
            <sh-horz
                gap={8}
                style={{
                    flex: 1,
                }}
            >
                <ChatPreview />
                <EditPanel />
            </sh-horz>
        </>
    )
}

export default App
