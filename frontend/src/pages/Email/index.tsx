import React, { useState } from "react";
import axios from 'axios';

const Email = () => {
  const [activeTab, setActiveTab] = useState("inbox"); // 跟踪选中子导航项
  const [currentPage, setCurrentPage] = useState(1); // 分页当前页
  const [aiMessage, setAiMessage] = useState("");
  const [aiResponse, setAiResponse] = useState<string>(""); // Explicitly type as string
  const pageSize = 5; // 每页显示的邮件数量

  // 模拟邮件数据
  const emails = [
    {
      id: 1,
      category: "Work",
      subject: "Project Update",
      summary: "AI: Here's a summary of the project progress...",
    },
    {
      id: 2,
      category: "Personal",
      subject: "Dinner Plans",
      summary: "AI: Summary - Let's meet at 7 PM at the new restaurant.",
    },
    {
      id: 3,
      category: "Promotions",
      subject: "50% Off Sale",
      summary: "AI: Limited time offer on all products...",
    },
    {
      id: 4,
      category: "Work",
      subject: "Meeting Reminder",
      summary: "AI: Reminder for tomorrow's team meeting at 10 AM.",
    },
    {
      id: 5,
      category: "Updates",
      subject: "App Update Available",
      summary: "AI: A new version of your favorite app is available...",
    },
    {
      id: 6,
      category: "Personal",
      subject: "Vacation Plans",
      summary: "AI: Finalizing vacation itinerary for the trip.",
    },
    {
      id: 7,
      category: "Work",
      subject: "Deadline Extended",
      summary: "AI: The project deadline has been extended to next Friday.",
    },
  ];

  // 计算分页数据
  const totalPages = Math.ceil(emails.length / pageSize);
  const paginatedEmails = emails.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  // 分页按钮功能
  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const [selectedTemplate, setSelectedTemplate] = useState(null); // 当前选中的模板
  const [recipientCategory, setRecipientCategory] = useState(""); // 收件人分类
  const [dynamicContent, setDynamicContent] = useState({}); // 动态输入内容
  const [generatedEmail, setGeneratedEmail] = useState(null); // 生成的邮件内容

  // 预设模板库
  const templates = [
    {
      id: 1,
      name: "Activity Notification", // 修改模板名称
      subject: "Notification: {eventName}", // 修改邮件主题
      content:
        "Dear {recipientName},\n\nYou are cordially invited to participate in {eventName} scheduled on {eventDate} at {eventLocation}. We look forward to your presence.\n\nBest regards,\nThe Organizer",
    },
    {
      id: 2,
      name: "Feedback Request",
      subject: "We Value Your Feedback on {eventName}",
      content:
        "Hi {recipientName},\n\nWe would appreciate your feedback on {eventName}. Please share your thoughts by {deadline}.\n\nThank you,\nTeam",
    },
  ];

  // 处理模板选择
  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
    setDynamicContent({}); // 清空动态输入内容
    setGeneratedEmail(null); // 清空生成的邮件内容
  };

  // 处理动态输入内容
  const handleInputChange = (field, value) => {
    setDynamicContent((prev) => ({ ...prev, [field]: value }));
  };

  // 生成邮件内容
  const handleGenerateEmail = () => {
    if (!selectedTemplate || !recipientCategory) {
      alert("Please select a template and recipient category!");
      return;
    }

    // 替换模板中的占位符
    let content = selectedTemplate.content;
    Object.keys(dynamicContent).forEach((key) => {
      content = content.replace(`{${key}}`, dynamicContent[key] || `(${key})`);
    });

    // 设置生成的邮件
    setGeneratedEmail({
      address: recipientCategory,
      subject: selectedTemplate.subject.replace(
        `{eventName}`,
        dynamicContent.eventName || "(eventName)"
      ),
      content,
    });
  };

  // AI Assistant Functions
  const handleAiMessageSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:5000/proxy-webhook', {
        message: aiMessage
      });
      // Extract the response message from the response object
      const responseMessage = response.data.response || JSON.stringify(response.data);
      setAiResponse(responseMessage);
      setAiMessage("");
    } catch (error) {
      console.error('Error sending message to AI:', error);
      setAiResponse("Error communicating with AI assistant. Please try again.");
    }
  };

  return (
    <div className="h-screen flex">
      {/* 左侧子导航栏 */}
      <div className="w-1/4 bg-gray-800 p-6" style={{ backgroundColor: 'rgb(255, 245, 230)' }}>
        <h2 className="text-xl font-bold mb-4">Email Menu</h2>
        <ul className="space-y-4">
          {/* Inbox */}
          <li>
            <button
              className={`w-full text-left p-2 rounded text-white ${
                activeTab === "inbox" ? "bg-gray-600" : "bg-gray-400"
              }`}
              onClick={() => {
                setActiveTab("inbox");
                setCurrentPage(1); // 切换时重置分页到第一页
              }}
            >
              Inbox
            </button>
          </li>
          {/* Sent */}
          <li>
            <button
              className={`w-full text-left p-2 rounded text-white ${
                activeTab === "sent" ? "bg-gray-600" : "bg-gray-400"
              }`}
              onClick={() => setActiveTab("sent")}
            >
              Sent
            </button>
          </li>
        </ul>
      </div>

      {/* 右侧内容区域 */}
      <div className="flex-1 p-6" style={{ backgroundColor: 'rgb(255, 223, 186)' }}>
        {/* AI Assistant Section */}
        <div className="mb-6 p-4 border rounded bg-white shadow-sm">
          <h2 className="text-xl font-bold mb-4">AI Email Assistant</h2>
          <div className="flex space-x-4">
            <textarea
              value={aiMessage}
              onChange={(e) => setAiMessage(e.target.value)}
              className="flex-1 p-2 border rounded"
              placeholder="Ask AI to help with emails... (e.g., 'Send email to example@email.com: Your message')"
              rows={3}
            />
            <button
              onClick={handleAiMessageSubmit}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Ask AI
            </button>
          </div>
          {aiResponse && (
            <div className="mt-4 p-4 border rounded bg-gray-50">
              <p className="whitespace-pre-wrap text-gray-700">{aiResponse}</p>
            </div>
          )}
        </div>

        {activeTab === "inbox" && (
          <div>
            <h1 className="text-2xl font-bold mb-4">Inbox</h1>
            {/* 邮件列表 */}
            <div className="space-y-4">
              {paginatedEmails.map((email) => (
                <div
                  key={email.id}
                  className="p-4 border rounded bg-white shadow-sm"
                >
                  <div className="flex justify-between">
                    <span className="text-sm font-semibold text-gray-500">
                      {email.category}
                    </span>
                    <span className="text-sm text-gray-400">
                      {email.subject}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">{email.summary}</p>
                </div>
              ))}
            </div>

            {/* 分页按钮 */}
            <div className="mt-6 flex justify-between">
              <button
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded ${
                  currentPage === 1
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
              >
                Previous
              </button>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded ${
                  currentPage === totalPages
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
              >
                Next
              </button>
            </div>
          </div>
        )}
        {activeTab === "sent" && (
          <div>
            <h1 className="text-2xl font-bold mb-4">Sent</h1>

            {/* 选择模板 */}
            <div className="mb-6">
            <h2 className="text-lg font-bold">Select Template</h2>
            <ul className="space-y-2">
              {templates.map((template) => (
                <li
                  key={template.id}
                  className={`p-4 border rounded cursor-pointer shadow-sm ${
                    selectedTemplate?.id === template.id
                      ? "bg-gray-400 text-black" // 选中时：浅灰背景+深色文字
                      : "bg-white text-gray-500 hover:bg-gray-100" // 未选中时：浅灰背景+浅灰文字
                  }`}
                  onClick={() => handleTemplateSelect(template)}
                >
                  {template.name}
                </li>
              ))}
            </ul>
          </div>

            {/* 动态输入 */}
            {selectedTemplate && (
              <div className="mb-6">
                <h2 className="text-lg font-bold">Dynamic Inputs</h2>
                <div className="space-y-4">
                  {/* 动态字段 */}
                  {["recipientName", "eventName", "eventDate", "eventLocation", "deadline"].map(
                    (field) => (
                      <div key={field}>
                        <label className="block text-sm font-medium">
                          {field.replace(/([A-Z])/g, " $1").toUpperCase()}:
                        </label>
                        <input
                          type="text"
                          className="w-full p-2 border rounded"
                          placeholder={`Enter ${field}`}
                          onChange={(e) =>
                            handleInputChange(field, e.target.value)
                          }
                        />
                      </div>
                    )
                  )}
                </div>
              </div>
            )}

            {/* 选择收件人分类 */}
            <div className="mb-6">
              <h2 className="text-lg font-bold">Select Recipient Category</h2>
              <select
                className="w-full p-2 border rounded"
                value={recipientCategory}
                onChange={(e) => setRecipientCategory(e.target.value)}
              >
                <option value="">Select Category</option>
                <option value="Manager">Manager</option>
                <option value="Employee">Employee</option>
                <option value="User">User</option>
              </select>
            </div>

            {/* Generate 按钮 */}
            <div className="mb-6">
              <button
                onClick={handleGenerateEmail}
                className="px-4 py-2 bg-blue-500 text-white font-medium rounded hover:bg-blue-600"
              >
                Generate Email
              </button>
            </div>

            {/* 生成的邮件内容 */}
            {generatedEmail && (
              <div className="mb-6">
                <h2 className="text-lg font-bold">Generated Email</h2>
                <div className="p-4 border rounded bg-white">
                  <p>
                    <strong>Address:</strong> {generatedEmail.address}
                  </p>
                  <p>
                    <strong>Subject:</strong> {generatedEmail.subject}
                  </p>
                  <p>
                    <strong>Content:</strong>
                  </p>
                  <pre className="whitespace-pre-wrap">
                    {generatedEmail.content}
                  </pre>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Email;
