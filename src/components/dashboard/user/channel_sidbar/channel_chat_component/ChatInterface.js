// Icons
import { TbSend2 } from "react-icons/tb";

import { useState, useRef, useEffect } from "react";

// importing message area component
import MessagesArea from "./chat_interface_inner_components/MessagesArea";

// importing message toolbar component
import MessageToolbar from "./chat_interface_inner_components/MessageToolbar";

export default function ChatInterface() {
  const [message, setMessage] = useState("");
  const [inputHeight, setInputHeight] = useState(40); // Default height of the textarea (single line)
  const textareaRef = useRef(null);

  useEffect(() => {
    // Update container height dynamically based on the textarea height
    const defaultHeight = 200; // Default height offset
    const newHeight = `calc(100vh - ${defaultHeight + inputHeight}px)`;
    document.getElementById("message-container").style.height = newHeight;
  }, [inputHeight]);

  const handleInput = () => {
    const textarea = textareaRef.current;
    textarea.style.height = "auto"; // Reset height to calculate new scrollHeight
    const newHeight = Math.min(textarea.scrollHeight, 80); // Cap height at 80px (3 lines)
    textarea.style.height = `${newHeight}px`; // Set new height
    setInputHeight(newHeight); // Update state with new height
  };

  return (
    <div className="flex flex-col">
      {/* Message container */}
      <div
        id="message-container"
        className="overflow-y-auto py-3 scrollbar-custom"
        style={{ height: "calc(100vh - 205px)" }} // Initial height
      >
        <MessagesArea />
      </div>

      <div className="">
        {/* Your media upload function and emoji lib etc */}
        <div className="mb-2">
          <MessageToolbar />
        </div>

        {/* Input area */}
        <div className="flex gap-2 items-end w-full bg-second-bg-color p-2 border border-border-color rounded-lg">
          <textarea
            ref={textareaRef}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            rows={1}
            className="resize-none w-full max-h-20 py-1 overflow-y-scroll focus:border-none focus:shadow-none focus:outline-none bg-transparent text-white transition-all hide-scrollbar"
            onInput={handleInput}
          />
          <button className="bg-secondary-color text-white p-2 rounded-full transition-all hover:scale-95 active:scale-105">
            <TbSend2 />
          </button>
        </div>
      </div>
    </div>
  );
}
