import React, { useState } from 'react'

export default function FormProjectTasks({projectTasks, save}) {
    // default task object
    const [task,setTask] = useState({
        fr : '',
        en : ''
    })

    // handle change event on input values
    const handleChange=(e)=>{
        setTask({ ...task, [e.target.name]: e.target.value });
    }

    // add a task to the project
    const addTask = () => {
        if(projectTasks.indexOf(task) < 0){
            save([ ...projectTasks, task])
        }
    }

    // remove a task from the project
    const removeTask = (targetTask) => {
        let index = projectTasks.indexOf(targetTask)
        save([...projectTasks.filter((t,i) => i !== index)])
    }
  return (
    <div>
        <div>
            <div>Tasks</div>

            <input type='text' name='fr' placeholder='FR' className='w-1/2 border-y-2' value={task.fr} onChange={(e)=>handleChange(e)}/>
            <input type='text' name='en' placeholder='EN' className='w-1/2 border-y-2' value={task.en} onChange={(e)=>handleChange(e)}/>
            
            <div onClick={()=>{addTask()}} className="bg-blue-600 p-2 m-2 rounded-lg text-center text-white cursor-pointer">
                Add
            </div>
        </div>

        {projectTasks.map((task,index) => (
            <div key={index} className='flex items-center'>
                <div>
                    <div>FR: {task.fr}</div>
                    <div>EN: {task.en}</div>
                </div>
                <div
                    className='cursor-pointer ml-4 bg-red text-white p-1 rounded-lg cursor-pointer'
                    onClick={()=>{removeTask(task);}}
                >
                    X
                </div>
            </div>
        ))}
    </div>
    )
}
