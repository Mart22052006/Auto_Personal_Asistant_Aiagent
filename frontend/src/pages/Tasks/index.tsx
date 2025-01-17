import React, { useState } from "react";
import Card from '@/components/card'

const Tasks = () => {
  const [activeTab, setActiveTab] = useState("myTasks"); // 跟踪选中子导航项

  return (
    <div className="h-screen flex">
      {/* 左侧子导航栏 */}
      <div className="w-1/4 p-6" style={{ backgroundColor: 'rgb(255, 245, 230)' }}>
        <h2 className="text-xl text-gray-800 font-bold mb-4">Tasks Menu</h2>
        <ul className="space-y-4 text-white">
          <li>
            <button
              className={`w-full text-left p-2 rounded ${
                activeTab === "myTasks" ? "bg-gray-600" : "bg-gray-400"
              }`}
              onClick={() => setActiveTab("myTasks")}
            >
              My Tasks
            </button>
          </li>
          <li>
            <button
              className={`w-full text-left p-2 rounded ${
                activeTab === "createTask" ? "bg-gray-600" : "bg-gray-400"
              }`}
              onClick={() => setActiveTab("createTask")}
            >
              Create Task
            </button>
          </li>
          <li>
            <button
              className={`w-full text-left p-2 rounded ${
                activeTab === "manageTask" ? "bg-gray-600" : "bg-gray-400"
              }`}
              onClick={() => setActiveTab("manageTask")}
            >
              Manage Task
            </button>
          </li>
        </ul>
      </div>

      {/* 右侧内容区域 */}
      <div className="flex-1 p-6" style={{ backgroundColor: 'rgb(255, 223, 186)' }}>
        {activeTab === "myTasks" && (
          <div>
            <h1 className="text-2xl font-bold mb-4">My Tasks</h1>
            <p>Here is the list of your tasks...</p>
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
{activeTab === "createTask" && (
  <div>
    <h1 className="text-2xl font-bold mb-4">Create Task</h1>
    <p className="mb-4">Here you can create a new task...</p>
    <form className="space-y-4">
      {/* 任务名称 */}
      <div>
        <label htmlFor="taskName" className="block text-lg font-medium">
          Task Name
        </label>
        <input
          type="text"
          id="taskName"
          name="taskName"
          placeholder="Enter the task name"
          className="w-full p-2 border rounded"
        />
      </div>

      {/* 任务时间 */}
      <div>
        <label htmlFor="taskTime" className="block text-lg font-medium">
          Task Time
        </label>
        <div className="flex space-x-4">
          <input
            type="date"
            id="startDate"
            name="startDate"
            placeholder="Start Date"
            className="w-1/2 p-2 border rounded"
          />
          <input
            type="time"
            id="startTime"
            name="startTime"
            placeholder="Start Time"
            className="w-1/2 p-2 border rounded"
          />
          <input
            type="time"
            id="endTime"
            name="endTime"
            placeholder="End Time"
            className="w-1/2 p-2 border rounded"
          />
        </div>
      </div>

      {/* 任务优先级 */}
      <div>
        <label htmlFor="priority" className="block text-lg font-medium">
          Priority
        </label>
        <select
          id="priority"
          name="priority"
          className="w-full p-2 border rounded"
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>

      {/* 任务状态 */}
      <div>
        <label htmlFor="status" className="block text-lg font-medium">
          Status
        </label>
        <select
          id="status"
          name="status"
          className="w-full p-2 border rounded"
        >
          <option value="completed">Completed</option>
          <option value="inProgress">In Progress</option>
          <option value="notStarted">Not Started</option>
        </select>
      </div>

      {/* 任务人员 */}
      <div>
        <label htmlFor="assignedTo" className="block text-lg font-medium">
          Assigned To
        </label>
        <input
          type="text"
          id="assignedTo"
          name="assignedTo"
          placeholder="Enter assignee's name"
          className="w-full p-2 border rounded"
        />
      </div>

      {/* 工作内容 */}
      <div>
        <label htmlFor="description" className="block text-lg font-medium">
          Task Description
        </label>
        <textarea
          id="description"
          name="description"
          placeholder="Enter task details"
          className="w-full p-2 border rounded"
          rows="4"
        ></textarea>
      </div>

      {/* 提交按钮 */}
      <div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white font-medium rounded hover:bg-blue-600"
        >
          Create Task
        </button>
      </div>
    </form>
  </div>
)}
        {activeTab === "manageTask" && (
          <div>
            <h1 className="text-2xl font-bold mb-4">Manage Tasks</h1>
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
