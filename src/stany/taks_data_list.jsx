import React, { useState } from "react";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  //   Funkcje komponentu
  const newInputData = (e) => {
    setNewTask(e.target.value);
  };

  const addNewTask = () => {
    if (newTask.trim() !== "") {
      const newTasks = tasks.concat({
        id: Date.now(),
        content: newTask,
        completed: false,
      });
      setTasks(newTask);
      setNewTask("");
    }
  };

  const taskStatusChange = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          id: task.id,
          content: task.content,
          completed: !task.completed,
        };
      }
      return task;
    });
  };

  return (
    <>
      <input type="text" id="txt" />
      <button>Dodaj</button>
    </>
  );
};

export default TaskList;
