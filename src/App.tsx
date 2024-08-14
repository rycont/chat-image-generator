import ChatPreview from '@component/chat-preview'
import Titlebar from '@component/titlebar'
import EditPanel from '@component/edit-panel'

function App() {
    return (
        <>
            <Titlebar />
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
