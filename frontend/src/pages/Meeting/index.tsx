import React, { useState } from "react";
import Card from '@/components/card'

const Tasks = () => {
  const [activeTab, setActiveTab] = useState("myTasks"); // 跟踪选中子导航项

  return (
    <div className="h-screen flex">
      {/* 左侧子导航栏 */}
      <div className="w-1/4 bg-gray-800 p-6" style={{ backgroundColor: 'rgb(255, 245, 230)' }}>
        <h2 className="text-xl font-bold mb-4">Meetings Menu</h2>
        <ul className="space-y-4 text-white">
          <li>
            <button
              className={`w-full text-left p-2 rounded ${
                activeTab === "myTasks" ? "bg-gray-600" : "bg-gray-400"
              }`}
              onClick={() => setActiveTab("myTasks")}
            >
              My Meetings
            </button>
          </li>
          <li>
            <button
              className={`w-full text-left p-2 rounded ${
                activeTab === "createMeeting" ? "bg-gray-600" : "bg-gray-400"
              }`}
              onClick={() => setActiveTab("createMeeting")}
            >
              Create Meeting
            </button>
          </li>
          <li>
            <button
              className={`w-full text-left p-2 rounded ${
                activeTab === "manageTask" ? "bg-gray-600" : "bg-gray-400"
              }`}
              onClick={() => setActiveTab("manageTask")}
            >
              Manage Meeting
            </button>
          </li>
        </ul>
      </div>

      {/* 右侧内容区域 */}
      <div className="flex-1 p-6" style={{ backgroundColor: 'rgb(255, 223, 186)' }}>
        {activeTab === "myTasks" && (
          <div>
            <h1 className="text-2xl font-bold mb-4">My Meetings</h1>
            <p>Here is the list of your meetings...</p>
            <br />
            {/* 并排的 Card 组件 */}
            <div className="flex gap-4">
              <Card
                key="card1"
                img="https://picsum.photos/900/1200"
                title="SG Book Council"
                year="2021"
                director="Action comedy"
              />
              <Card
                key="card2"
                img="https://picsum.photos/800/1200"
                title="Another Activity"
                year="2023"
                director="Drama"
              />
            </div>
          </div>
        )}
{activeTab === "createMeeting" && (
  <div>
    <h1 className="text-2xl font-bold mb-4">Create Meeting</h1>
    <p className="mb-4">Here you can create a new meeting...</p>
    <form className="space-y-4">
      {/* 会议名称 */}
      <div>
        <label htmlFor="meetingName" className="block text-lg font-medium">
          Meeting Name
        </label>
        <input
          type="text"
          id="meetingName"
          name="meetingName"
          placeholder="Enter the meeting name"
          className="w-full p-2 border rounded"
        />
      </div>

      {/* 会议时间 */}
      <div>
        <label htmlFor="meetingTime" className="block text-lg font-medium">
          Meeting Time
        </label>
        <div className="flex space-x-4">
          <input
            type="date"
            id="meetingDate"
            name="meetingDate"
            placeholder="Meeting Date"
            className="w-1/3 p-2 border rounded"
          />
          <input
            type="time"
            id="startTime"
            name="startTime"
            placeholder="Start Time"
            className="w-1/3 p-2 border rounded"
          />
          <input
            type="time"
            id="endTime"
            name="endTime"
            placeholder="End Time"
            className="w-1/3 p-2 border rounded"
          />
        </div>
      </div>

      {/* 会议地点 */}
      <div>
        <label htmlFor="meetingLocation" className="block text-lg font-medium">
          Meeting Location
        </label>
        <input
          type="text"
          id="meetingLocation"
          name="meetingLocation"
          placeholder="Enter the meeting location"
          className="w-full p-2 border rounded"
        />
      </div>

      {/* 参与人员 */}
      <div>
        <label htmlFor="participants" className="block text-lg font-medium">
          Participants
        </label>
        <div id="participantsList" className="space-y-2">
          <input
            type="text"
            name="participant1"
            placeholder="Enter participant name"
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            name="participant2"
            placeholder="Enter participant name"
            className="w-full p-2 border rounded"
          />
        </div>
        <button
          type="button"
          onClick={() => {
            const participantsList = document.getElementById("participantsList");
            const newInput = document.createElement("input");
            newInput.type = "text";
            newInput.name = `participant${participantsList.children.length + 1}`;
            newInput.placeholder = "Enter participant name";
            newInput.className = "w-full p-2 border rounded mt-2";
            participantsList.appendChild(newInput);
          }}
          className="mt-2 px-4 py-2 bg-blue-500 text-white font-medium rounded hover:bg-blue-600"
        >
          Add Participant
        </button>
      </div>

      {/* 提交按钮 */}
      <div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white font-medium rounded hover:bg-blue-600"
        >
          Create Meeting
        </button>
      </div>
    </form>
  </div>
)}
        {activeTab === "manageTask" && (
          <div>
            <h1 className="text-2xl font-bold mb-4">Manage Meetings</h1>
            <p>Here you can manage all your tasks...</p>
            <br />
            {/* 并排的 Card 组件 */}
            <div className="flex gap-4">
              <Card
                key="card1"
                img="https://picsum.photos/900/1200"
                title="SG Book Council"
                year="2021"
                director="Action comedy"
              />
              <Card
                key="card2"
                img="https://picsum.photos/800/1200"
                title="Another Activity"
                year="2023"
                director="Drama"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tasks;
