import React, { useState } from "react";

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle chatbot

  const toggleChatBot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Chatbot Toggle Button */}
      {!isOpen && ( // 仅在聊天窗口关闭时显示按钮
        <button
          onClick={toggleChatBot}
          className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600"
        >
          Chat
        </button>
      )}

      {/* Chatbot Window */}
      {isOpen && (
        <div className="bg-white w-80 h-96 rounded-lg shadow-xl mt-4">
          <div className="bg-blue-500 text-white p-3 rounded-t-lg flex justify-between">
            <span>ChatBot</span>
            <button onClick={toggleChatBot} className="text-white">
              ✕
            </button>
          </div>
          <div className="p-4 overflow-y-auto h-[calc(100%-60px)]">
            <div className="text-sm text-gray-600 mb-2">
              Chat with us! Type your message below.
            </div>
            <div className="space-y-4">
              {/* Chat Messages */}
              <div className="text-gray-800 p-2 bg-gray-200 rounded-lg">
                Hello! How can I assist you today?
              </div>
              {/* User Input */}
              <div className="flex items-center mt-4">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 p-2 border rounded-lg"
                />
                <button className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;