import { useState } from "react";
import Activity from "./Activity";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "./addSlice";
export default function ActivityList() {
  const [task, setTask] = useState("");
  const [List, setList] = useState([]);
  const currentTask = useSelector((state) => state.addSlice.task);
  const dispatch = useDispatch();
  function handleChange(event) {
    setTask(event.target.value);
    console.log(task);
  }

  function handleDelete(index) {
    setList((prevState) =>
      prevState.slice(0, index).concat(prevState.slice(index + 1))
    );
  }
  function addToDo(event) {
    event.preventDefault();
    dispatch(addTask(task));
    setList((prevState) => [...prevState, task]);
    setTask("");
  }

  const listItems = List.map((item, index) => {
    if (/\w/.test(item)) {
      return (
        <li key={index}>
          <Activity detail={item} index={index} handleDelete={handleDelete} />
        </li>
      );
    }
  });
  return (
    <>
      <form onSubmit={addToDo} className="flex  justify-center mt-32 mb-20">
        <div className="border p-4 rounded-full flex justify-between w-full focus-within:border-[#658354]">
          <input
            type="text"
            placeholder="Add a task"
            name="job"
            value={task}
            onChange={handleChange}
            className="w-full border-transparent outline-none"
          />
          <button type="submit" className="border-l px-4">
            <FontAwesomeIcon icon={faPlusCircle} className="text-green-800" />
          </button>
        </div>
      </form>
      <ul className="flex flex-col gap-4">{listItems.reverse()}</ul>
    </>
  );
}
