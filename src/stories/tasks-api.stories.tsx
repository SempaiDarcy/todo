import React, {useEffect, useState} from 'react'
import {tasksAPI} from "../api/tasks-api";

export default {
    title: 'tasks API'
}

export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoId = "dae2593b-f63f-461b-8f57-d716868d39e3"
        tasksAPI.getTasks(todoId).then(
            (res)=>{
                setState(res.data)
            }
        )
    }, [])
    console.log(state)
    return state && state.items.map((el:any)=>{
        return <div key={el.id} style={{
            backgroundColor: 'bisque',
            padding:'10px',
            fontFamily: 'Roboto, sans-serif',
        }}>
            <ul>
                <li>todoID: {el.todoListId || 'none?'}</li>
                <li>taskID: {el.id || 'none?'}</li>
                <li>title: {el.title || 'none?'}</li>
                <li>addedDate: {el.addedDate || 'none?'}</li>
                <li>startDate: {el.startDate || 'none?'}</li>
                <li>order: {el.order || 'none?'}</li>
                <li>completed: {el.completed || 'none?'}</li>
                <li>deadLine: {el.deadline || 'none?'}</li>
                <li>description: {el.description || 'none?'}</li>
                <li>priority: {el.priority || 'none?'}</li>
                <li>status: {el.status || 'none?'}</li>
            </ul>
        </div>
    })
}
export const CreateTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(()=>{
        const todoId = "dae2593b-f63f-461b-8f57-d716868d39e3"
        const title = 'task1'
        tasksAPI.postTasks(todoId,title).then(
            (res)=>{
                setState(res.data)
            }
        )
    },[])
    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTasks = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoId = "dae2593b-f63f-461b-8f57-d716868d39e3"
        const taskId= "000661eb-6ab8-4104-8040-cc51b1f3fcad"
        tasksAPI.deleteTasks(todoId,taskId).then(
            (res)=>{
                setState(res.data)
            }
        )
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTasksTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoId = "dae2593b-f63f-461b-8f57-d716868d39e3"
        const taskId= "19c4d8bb-afaf-4722-b49a-63864b0eefb5"
        const title = 'task2'
        tasksAPI.updateTasks(todoId,taskId,title).then(
            (res)=>{
                setState(res.data)
            }
        )
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
