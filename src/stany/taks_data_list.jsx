import { useState } from "react";

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [newPrice, setNewPrice] = useState(0.0);
  const [sumAllPrice, setSumPrice] = useState(0.0);

  // Funkcje komponentu
  const newInputData = (e) => {
    setNewTask(e.target.value);
    console.log(newTask);
    console.log(tasks);
  };

  const newInputPrice = (e) => {
    setNewPrice(parseFloat(e.target.value));
  };

  const addNewTask = () => {
    if (newTask.trim() !== "" && !isNaN(newPrice)) {
      const newTasks = tasks.concat({
        id: Date.now(),
        content: newTask,
        completed: false,
        price: newPrice,
      });
      setTasks(newTasks);
      setNewTask(null);
      setNewPrice(null);
      setSumPrice(sumAllPrice + newPrice);
    }
  };

  const taskStatusChange = (taskId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        task.completed
          ? setSumPrice(sumAllPrice + parseFloat(task.price))
          : setSumPrice(sumAllPrice - parseFloat(task.price));
        return {
          id: task.id,
          content: task.content,
          completed: !task.completed,
          price: task.price,
        };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h2>Task List</h2>
      <input type="text" defaultValue={newTask} onChange={newInputData} />
      <input type="text" defaultValue={newPrice} onChange={newInputPrice} />

      <button onClick={addNewTask}>Dodaj nowe Zadanie</button>
      <ul>
        {tasks.map((task, idx) => (
          <li key={task.id}>
            <input
              type="checkbox"
              key={task.id}
              checked={task.completed}
              onChange={() => taskStatusChange(task.id)}
            />
            <span
              style={{
                textDecoration: task.completed ? "line-through" : "none",
              }}
            >
              {task.content},{task.price}
            </span>
          </li>
        ))}
      </ul>
      <input type="text" id="sp" readOnly value={sumAllPrice.toFixed(2)} />
    </div>
  );
}

export default TaskList;
