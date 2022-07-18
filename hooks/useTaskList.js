import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import userTasks from "../services/userTask";

const url = "http://localhost:3000/api/task";

export const useTaskList = (email) => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState({
    task: "",
  });

  const getTasks = useCallback(async () => {
    try {
      const response = await userTasks(email);

      setTasks(response);
    } catch (err) {
      console.error(err);
    }
  }, [email]);
  useEffect(() => {
    getTasks();
  }, [getTasks]);

  const handleChange = ({ currentTarget: input }) => {
    input.value === ""
      ? setTask({ task: "" })
      : setTask((prev) => ({ ...prev, task: input.value }));
  };

  const editTask = (id) => {
    const currentTask = tasks.filter((task) => task.id === id)[0];
    console.log("currentTask", currentTask.task);
    setTask(currentTask);
  };

  const addTask = async (e) => {
    e.preventDefault();
    console.log("add task");
    try {
      if (task.id) {
        const { data } = await axios.put(`${url}/${task.id}`, {
          task: task.task,
          // completed: task.completed,
        });
        const originalTasks = [...tasks];
        const index = originalTasks.findIndex((t) => t.id === task.id);
        originalTasks[index] = data.data[0];
        setTasks(originalTasks);
        setTask({ task: "" });
        console.log(data.message);
      } else {
        const { data } = await axios.post(url, {
          task: task.task,
          completed: false,
          email: email,
        });
        console.log("entrando creando", data);
        setTasks((prev) => [...prev, data.data[0]]);
        setTask({ task: "" });
        console.log(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const updateTask = async (id) => {
    try {
      const originalTasks = [...tasks];
      console.log("originalTasks", originalTasks);
      console.log(id);
      const index = originalTasks.findIndex((t) => t.id === id);
      console.log("indelx", index);
      const { data } = await axios.put(`${url}/${id}`, {
        completed: !originalTasks[index].completed,
      });
      originalTasks[index] = data.data[0];
      setTasks(originalTasks);
      console.log(data.message);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTask = async (id) => {
    try {
      const { data } = await axios.delete(`${url}/${id}`);
      setTasks((prev) => prev.filter((task) => task.id !== id));
      console.log(data.message);
    } catch (error) {
      console.log(error);
    }
  };
  return {
    tasks,
    task,
    handleChange,
    editTask,
    addTask,
    updateTask,
    deleteTask,
  };
};
