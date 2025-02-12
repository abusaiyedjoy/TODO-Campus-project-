import { useForm } from "react-hook-form";
import Modal from "../Modal/Modal";
import { useSelector } from "react-redux";

const MyTaskDetails = ({ id, isOpen, setIsOpen }) => {

  const {task}= useSelector((state)=> state.taskSlice)
  const singleTask = task.find((item)=> item.id === id)

  const {
    register,
    formState: { errors },
  } = useForm();

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="My Task Details">
      <form className="space-y-4">
        {/* Title Field */}
        <div className="flex flex-col">
          <label htmlFor="title" className="text-sm font-semibold text-gray-700">Title</label>
          <input
            type="text"
            defaultValue={singleTask?.title}
            id="title"
            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            {...register("title", { required: "Title is required" })}
          />
          {errors.title && <span className="text-red-500 text-xs">{errors.title.message}</span>}
        </div>

        {/* Description Field */}
        <div className="flex flex-col">
          <label htmlFor="description" className="text-sm font-semibold text-gray-700">Description</label>
          <textarea
            id="description"
            defaultValue={singleTask?.description}
            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            {...register("description", { required: "Description is required" })}
          />
          {errors.description && <span className="text-red-500 text-xs">{errors.description.message}</span>}
        </div>

        {/* date Field */}
        <div className="flex flex-col">
          <label htmlFor="date" className="text-sm font-semibold text-gray-700">Deadline</label>
          <input
            type="date"
            id="date"
            defaultValue={singleTask?.date}
            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            {...register("date", { required: "date is required" })}
          />
          {errors.date && <span className="text-red-500 text-xs">{errors.date.message}</span>}
        </div>

        {/* Assign To Field */}
        <div className="flex flex-col">
          <label htmlFor="assignedTo" className="text-sm font-semibold text-gray-700">Assign To</label>
          <select
            type="text"
            id="assignedTo"
            defaultValue={singleTask?.assignedTo}
            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            {...register("assignedTo", { required: "Assign To is required" })}
          >
            <option value="">Assign by</option>
            <option value="Abu Saiyed Joy">Abu Saiyed Joy</option>
            <option value="Arafat Shabbir">Arafat Shabbir</option>
            <option value="Rayhan Rakib">Rayhan Rakib</option>
          </select>
          {errors.assignedTo && <span className="text-red-500 text-xs">{errors.assignedTo.message}</span>}
        </div>

        {/* priority Field */}
        <div className="flex flex-col">
          <label htmlFor="priority" className="text-sm font-semibold text-gray-700">Priority</label>
          <select
            id="priority"
            defaultValue={singleTask?.priority}
            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            {...register("priority", { required: "priority is required" })}
          >
            <option value="">Select priority</option>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          {errors.priority && <span className="text-red-500 text-xs">{errors.priority.message}</span>}
        </div>
      </form>
    </Modal>
  );
};

export default MyTaskDetails;
