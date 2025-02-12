import {
  CheckIcon,
  DocumentMagnifyingGlassIcon,
} from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MyTaskDetails from './MyTaskDetails';
import { updateTask, userTask } from '../../redux/features/tasks/taskSlice';


const MyTasks = () => {
  const { task, usersTask } = useSelector((state) => state.taskSlice)
  const { name } = useSelector((state) => state.userSlice)
  const [isOpen, setIsOpen] = useState(false);
  const [taskId, setTaskId] = useState(0);
  const disPatch = useDispatch()

  const handleModal = (id)=>{
    setTaskId(id)
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    disPatch(userTask(name))
  }, [name, task, disPatch])

  return (
    <div>
      <MyTaskDetails id={taskId} isOpen={isOpen} setIsOpen={setIsOpen} />
      <h1 className="text-xl my-3">My Tasks</h1>
      <div className=" h-[750px] overflow-auto space-y-3">
        {usersTask?.map((item) => (
          <div
            key={item.id}
            className="bg-secondary/10 rounded-md p-3 flex justify-between"
          >
            <h1>{item.title}</h1>
            <div className="flex gap-3">
              <button className="grid place-content-center" title="Details">
                <DocumentMagnifyingGlassIcon onClick={() => handleModal(item.id)} className="w-5 h-5 text-primary" />
              </button>
              <button className="grid place-content-center" title="Complated">
                <CheckIcon
                  onClick={() => disPatch(updateTask({ id: item.id, status: 'complate' }))}
                  className="w-5 h-5 text-primary" />
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default MyTasks;



