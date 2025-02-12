import { useForm } from "react-hook-form";
import Modal from "../Modal/Modal";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/features/tasks/taskSlice";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
  const disPatch = useDispatch()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    disPatch(addTask(data))
    handleCancel()
  };

  const handleCancel = () => {
    reset();
    setIsOpen(false);
  };


  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Add a task">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Title Field */}
        <div className="flex flex-col">
          <label htmlFor="title" className="text-sm font-semibold text-gray-700">Title</label>
          <input
            type="text"
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

        {/* Submit and Cancel Buttons */}
        <div className="mt-4 flex justify-end space-x-4">
          {/* Submit Button */}
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            Submit
          </button>

          {/* Cancel Button */}
          <button
            type="button"
            onClick={handleCancel}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
          >
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default AddTaskModal;
