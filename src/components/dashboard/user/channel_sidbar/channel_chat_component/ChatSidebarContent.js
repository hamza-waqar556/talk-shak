import MessageInput from "./ChatInterface"


export default function ChatSidebarContent() {
    return (
        <>
            <div className="w-full p-3 bg-second-bg-color text-white rounded-md border border-border-color">
                <h2 className="text-base font-semibold capitalize">
                    channel info
                </h2>
                <div className="text-sm">
                    Language: Urdu
                </div>
            </div>
            <MessageInput />
        </>
    )
}