import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Directory from "../Routes/Directory";
import DoneTasks from "../Routes/DoneTasks";
import Home from "../Routes/Home";
import ImportantTasks from "../Routes/ImportantTasks";
import SearchResults from "../Routes/SearchResults";
import TaskOnly from "../Routes/TaskOnly";
import TodaysTasks from "../Routes/TodaysTasks";
import HeaderTasks from "./HeaderTasks";

const TasksSection: React.FC = () => {
  return (
    <main className=" pt-5 pb-8 sm:pb-16 px-3 md:px-8 md:w-full xl:w-8/12 m-auto min-h-screen">
      <HeaderTasks />
      <Routes>
        <Route path="/test-react-deploy/" element={<Home />} />
        <Route path="/test-react-deploy/today" element={<TodaysTasks />} />
        <Route
          path="/test-react-deploy/important"
          element={<ImportantTasks />}
        />
        <Route
          path="/test-react-deploy/completed"
          element={<DoneTasks done={true} title="Completed tasks" />}
        />
        <Route
          path="/test-react-deploy/uncompleted"
          element={<DoneTasks done={false} title="Uncompleted tasks" />}
        />
        <Route path="/test-react-deploy/results" element={<SearchResults />} />
        <Route path="/test-react-deploy/dir/:dir" element={<Directory />} />
        <Route path="/test-react-deploy/task/:taskId" element={<TaskOnly />} />
        <Route path="/test-react-deploy*" element={<Navigate to="" />} />
      </Routes>
    </main>
  );
};

export default TasksSection;
