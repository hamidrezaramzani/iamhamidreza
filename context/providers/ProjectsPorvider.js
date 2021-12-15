import { createContext, useReducer } from "react";
import reducer from "../reducers/projectsReducer";
export const ProjectsContext = createContext();

const ProjectsProvider = ({ children }) => {
  const initialState = [];
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ProjectsContext.Provider value={{ dispatch, state }}>
      {children}
    </ProjectsContext.Provider>
  );
};

export default ProjectsProvider;
