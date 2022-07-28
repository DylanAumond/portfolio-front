import React, { useState } from 'react'

export default function FormProjectTasks({projectTasks, save}) {
    const [task,setTask] = useState({
        fr : '',
        en : ''
    })

    const handleChange=(e)=>{
        setTask({ ...task, [e.target.name]: e.target.value });
    }

    const addTask = () => {
        if(projectTasks.indexOf(task) < 0){
            save([ ...projectTasks, task])
        }
    }

    const removeTask = (targetTask) => {
        let index = projectTasks.indexOf(targetTask)
        save([...projectTasks.filter((t,i) => i !== index)])
    }
  return (
    <div>
        <div>FormProjectTasks</div>

        <input type='text' name='fr' value={task.fr} onChange={(e)=>handleChange(e)}/>
        <input type='text' name='en' value={task.en} onChange={(e)=>handleChange(e)}/>
        <div onClick={()=>{
            addTask()
            }}
        >Ajouter</div>

        {projectTasks.map((task,index) => (
            <div key={index} className='flex items-center'>
                <div>
                    <div>FR: {task.fr}</div>
                    <div>EN: {task.en}</div>
                </div>
                <div
                    className='cursor-pointer ml-4'
                    onClick={()=>{removeTask(task);}}
                >
                    X
                </div>
            </div>
        ))}
    </div>
    )
}
