

import React, { useState } from "react";
import "./TasksManagement.css";
import { MdDelete } from "react-icons/md";
import { MdMovieEdit } from "react-icons/md";
import { RxUpdate } from "react-icons/rx";

const TasksManagement = ({ task, index, deleteTask, editTask, tasks }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleUpdateClick = () => {
    editTask(index, editedTask);
    setIsEditing(false);
  };

  console.log(tasks);

  return (
    <div>
      <div className="task">
        <div className="editTask">
          <input
            title="Complete"
            className="updateInput"
            type="checkbox"
            onChange={(e) => setIsChecked(e.target.checked)}
            value={isChecked}
          />
          {isEditing ? (
            <input
              type="text"
              value={editedTask}
              onChange={(e) => setEditedTask(e.target.value)}
              autoFocus={true}
            />
          ) : (
            <div
              className="taskElement"
              style={{
                textDecoration: isChecked ? "line-through" : "none",
                color: isChecked ? "#B9B4C7" : "white",
              }}
            >
              {task}
            </div>
          )}
        </div>

        <div className="btn">
          <div className="editAndUpdateBtn">
            {isEditing ? (
              <button title="Update" onClick={handleUpdateClick}>
                <RxUpdate />
              </button>
            ) : (
              <button title="Edit" onClick={handleEditClick}>
                <MdMovieEdit />
              </button>
            )}
          </div>

          <div className="deleteBtn">
            <button title="Delete" onClick={() => deleteTask(index)}>
              <MdDelete />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TasksManagement;
