import React, { useState } from "react";

interface SidebarProps {
  isOpen: boolean;
}

const MainContent: React.FC<SidebarProps> = ({ isOpen }) => {
  const [messages, setMessages] = useState<{ user: string; text: string }[]>(
    [],
  );
  const [input, setInput] = useState<string>("");

  const sendMessage = () => {
    if (input.trim() !== "") {
      setMessages([...messages, { user: "User", text: input }]);
      setInput("");
    }
  };

  return (
    <div className="flex flex-col flex-1 mt-16 mb-2 bg-zinc-800">
      <div className="flex-1 px-16 overflow-y-auto mb-16">
        {messages.map((message, index) => (
          <div key={index} className="mb-2">
            <strong>{message.user}:</strong> {message.text}
          </div>
        ))}
      </div>
      <div
        className={`fixed bottom-0 ${isOpen ? "left-64" : "left-0"} right-0 p-4 z-10 h-16 bg-zinc-800 transition-all duration-300`}
      >
        <div className="flex">
          <input
            type="text"
            className="flex-1 p-4 h-4 border border-zinc-500 rounded-full mr-2 bg-zinc-800 bg-opacity-50 placeholder-zinc-200"
            placeholder="给 ChatGPT发送消息..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
