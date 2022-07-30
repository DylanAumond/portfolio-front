import React, { useState } from 'react'

export default function FormProjectTasks({projectTasks, save}) {
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
            <div>Ajouter un tâche</div>

            <input type='text' name='fr' placeholder='fr' value={task.fr} onChange={(e)=>handleChange(e)}/>
            <input type='text' name='en' placeholder='en' value={task.en} onChange={(e)=>handleChange(e)}/>
            <div onClick={()=>{addTask()}}>
                Ajouter
            </div>
        </div>

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
