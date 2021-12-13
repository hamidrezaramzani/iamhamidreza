import React from "react";
import Dashboard from "../../components/Dashboard";
import NewProjectForm from "../../components/Projects/NewProjectForm";


function newProject() {
  return (
    <Dashboard title="New Project">
      <NewProjectForm />
    </Dashboard>
  );
}

export default newProject;
