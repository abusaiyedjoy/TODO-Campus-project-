import { ArrowRightIcon, TrashIcon } from '@heroicons/react/24/outline';
import { useDispatch } from 'react-redux';
import { taskRemove, updateTask } from '../../redux/features/tasks/taskSlice';

const TaskCard = ({task}) => {
  const disPatch = useDispatch()

  let updateStatus;
  if(task.status == 'pending'){
    updateStatus = 'running'
  }else if(task.status == 'running'){
    updateStatus = 'complate'
  }else{
    updateStatus = 'archived'
  }

  return (
    <div className="bg-secondary/10 rounded-md p-5">
      <h1
        className={`text-lg font-semibold mb-3  ${
          task.priority === 'high' ? 'text-red-500' : ''
        } ${task.priority === 'medium' ? 'text-yellow-500' : ''} ${
          task.priority === 'low' ? 'text-green-500' : ''
        }`}
      >
        {task?.title}
      </h1>
      <p className="mb-3">{task?.description}</p>
      <p className="text-sm">Assigned to - {task?.assignedTo}</p>
      <div className="flex justify-between mt-3">
        <p>{task?.date}</p> 
        <div className="flex gap-3">
          <button onClick={()=> disPatch(taskRemove(task.id))}  title="Delete">
            <TrashIcon className="h-5 w-5 text-red-500" />
          </button>
          <button onClick={()=> disPatch(updateTask({id: task.id, status: updateStatus}))} title="Update">
            <ArrowRightIcon className="h-5 w-5 text-primary" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
