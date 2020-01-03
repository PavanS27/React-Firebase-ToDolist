import React, { useState } from "react";
import { FaPizzaSlice } from "react-icons/fa";
import PropTypes from "prop-types";
import { AddTask } from "../AddTask";
import Brightness4SharpIcon from "@material-ui/icons/Brightness4Sharp";
import Navbar from "./navbar";
import Tooltip from "@material-ui/core/Tooltip";

export const Header = ({ darkMode, setDarkMode }) => {
  const [shouldShowMain, setShouldShowMain] = useState(false);
  const [showQuickAddTask, setShowQuickAddTask] = useState(false);

  return (
    <header className="header" data-testid="header">
      <nav>
        <div className="logo">
          <img
            src="https://uvce.ac.in/img/UVCE/uvce_vector.png"
            alt="Todoist"
          />
        </div>
        <div className="settings">
          <ul>
            <li className="mainhead">UVCE TO-DO</li>
            <li className="settings__add">
              {" "}
              <Tooltip title="Quick Add" placement="bottom">
                <button
                  data-testid="quick-add-task-action"
                  aria-label="Quick add task"
                  type="button"
                  onClick={() => {
                    setShowQuickAddTask(true);
                    setShouldShowMain(true);
                  }}
                  onKeyDown={() => {
                    setShowQuickAddTask(true);
                    setShouldShowMain(true);
                  }}
                >
                  +
                </button>
              </Tooltip>
            </li>
            <li className="settings__darkmode">
              <Tooltip title="Dark Mode" placement="bottom">
                <button
                  data-testid="dark-mode-action"
                  aria-label="Darkmode on/off"
                  type="button"
                  onClick={() => setDarkMode(!darkMode)}
                  onKeyDown={() => setDarkMode(!darkMode)}
                >
                  <Brightness4SharpIcon />
                </button>
              </Tooltip>
            </li>
          </ul>
        </div>
      </nav>

      <AddTask
        showAddTaskMain={false}
        shouldShowMain={shouldShowMain}
        showQuickAddTask={showQuickAddTask}
        setShowQuickAddTask={setShowQuickAddTask}
      />
    </header>
  );
};

Header.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  setDarkMode: PropTypes.func.isRequired
};
