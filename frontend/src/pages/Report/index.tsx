import React, { useState } from "react";

const Report = () => {
  const [activeTab, setActiveTab] = useState("myReport"); // 跟踪选中子导航项
  const [projectName, setProjectName] = useState(""); // 项目名称
  const [departmentName, setDepartmentName] = useState(""); // 部门名称
  const [timeRange, setTimeRange] = useState("daily"); // 默认时间范围
  const [customRange, setCustomRange] = useState({ start: "", end: "" }); // 自定义时间范围
  const [generatedReport, setGeneratedReport] = useState(""); // 生成的报告内容

  // 生成报告逻辑
  const generateReport = () => {
    let report = "";

    if (activeTab === "myReport") {
      report = `Personal Report for project "${projectName}" during the selected time range.`;
    } else if (activeTab === "taskReport") {
      report = `Project Report for project "${projectName}" in department "${departmentName}" during the selected time range.`;
    }

    if (timeRange === "custom") {
      report += ` Custom Range: ${customRange.start} to ${customRange.end}`;
    } else {
      report += ` Time Range: ${timeRange}`;
    }

    setGeneratedReport(report);
  };

  return (
    <div className="h-screen flex">
      {/* 左侧子导航栏 */}
      <div className="w-1/4 bg-gray-800 p-6" style={{ backgroundColor: 'rgb(255, 245, 230)' }}>
        <h2 className="text-xl font-bold mb-4">Report Menu</h2>
        <ul className="space-y-4">
          {/* My Report */}
          <li>
            <button
              className={`w-full text-left p-2 rounded text-white ${
                activeTab === "myReport" ? "bg-gray-600" : "bg-gray-400"
              }`}
              onClick={() => setActiveTab("myReport")}
            >
              My Report
            </button>
          </li>
          {/* Task Report */}
          <li>
            <button
              className={`w-full text-left p-2 rounded text-white ${
                activeTab === "taskReport" ? "bg-gray-600" : "bg-gray-400"
              }`}
              onClick={() => setActiveTab("taskReport")}
            >
              Task Report
            </button>
          </li>
        </ul>
      </div>

      {/* 右侧内容区域 */}
      <div className="flex-1 p-6" style={{ backgroundColor: 'rgb(255, 223, 186)' }}>
        <h1 className="text-2xl font-bold mb-4">
          {activeTab === "myReport" ? "My Report" : "Task Report"}
        </h1>

        {/* 项目名称输入 */}
        <div className="mb-6">
          <h2 className="text-lg font-bold">Project Name</h2>
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Enter the project name"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
        </div>

        {/* 部门选择（仅在 Task Report 时显示） */}
        {activeTab === "taskReport" && (
          <div className="mb-6">
            <h2 className="text-lg font-bold">Department</h2>
            <input
              type="text"
              className="w-full p-2 border rounded"
              placeholder="Enter the department name"
              value={departmentName}
              onChange={(e) => setDepartmentName(e.target.value)}
            />
          </div>
        )}

        {/* 时间范围选择 */}
        <div className="mb-6">
  <h2 className="text-lg font-bold">Select Time Range</h2>
  <div className="space-y-4">
    <div>
      <label>
        <input
          type="radio"
          name="timeRange"
          value="daily"
          checked={timeRange === "daily"}
          onChange={(e) => setTimeRange(e.target.value)}
        />
        <span className="ml-2">Daily</span>
      </label>
    </div>
    <div>
      <label>
        <input
          type="radio"
          name="timeRange"
          value="weekly"
          checked={timeRange === "weekly"}
          onChange={(e) => setTimeRange(e.target.value)}
        />
        <span className="ml-2">Weekly</span>
      </label>
    </div>
    <div>
      <label>
        <input
          type="radio"
          name="timeRange"
          value="monthly"
          checked={timeRange === "monthly"}
          onChange={(e) => setTimeRange(e.target.value)}
        />
        <span className="ml-2">Monthly</span>
      </label>
    </div>
    <div>
      <label>
        <input
          type="radio"
          name="timeRange"
          value="custom"
          checked={timeRange === "custom"}
          onChange={(e) => setTimeRange(e.target.value)}
        />
        <span className="ml-2">Custom</span>
      </label>
      {timeRange === "custom" && (
        <div className="mt-4 flex space-x-4">
          <div className="w-1/2">
            <label className="block text-sm font-medium">Start Date:</label>
            <input
              type="date"
              className="w-full p-2 border rounded"
              value={customRange.start}
              onChange={(e) =>
                setCustomRange((prev) => ({ ...prev, start: e.target.value }))
              }
            />
          </div>
          <div className="w-1/2">
            <label className="block text-sm font-medium">End Date:</label>
            <input
              type="date"
              className="w-full p-2 border rounded"
              value={customRange.end}
              onChange={(e) =>
                setCustomRange((prev) => ({ ...prev, end: e.target.value }))
              }
            />
          </div>
        </div>
      )}
    </div>
  </div>
</div>

        {/* 生成报告按钮 */}
        <div className="mb-6">
          <button
            onClick={generateReport}
            className="px-4 py-2 bg-blue-500 text-white font-medium rounded hover:bg-blue-600"
          >
            Generate Report
          </button>
        </div>

        {/* 生成的报告 */}
        {generatedReport && (
          <div className="p-4 border rounded bg-white">
            <h2 className="text-lg font-bold">Generated Report</h2>
            <p>{generatedReport}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Report;
