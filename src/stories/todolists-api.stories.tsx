import React, {useEffect, useState} from 'react'
import {todolistsAPI} from "../api/todolists-api";

export default {
    title: 'todolist API'
}
const settings = {
    withCredentials:true,
    headers: {
        'API-KEY': 'a62c9c4c-3024-41cb-a635-c00395c23b81'
    }
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
      todolistsAPI.getTodolists()
           .then((res)=>{
               setState(res.data)
           })
    }, [])
    console.log(state)
    return state && state.map((el:any)=>{
         return <div key={el.id} style={{
            backgroundColor: 'blueviolet',
             color:"white",
            padding:'10px',
            fontFamily: 'Roboto, sans-serif',
        }}>
            <ul>
                <li>todoID: {el.id || 'none?'}</li>
                <li>title: {el.title || 'none?'}</li>
                <li>addedDate: {el.addedDate || 'none?'}</li>
                <li>order: {el.order || 'none?'}</li>
            </ul>
        </div>
    })
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const title='REACT'
        todolistsAPI.createTodolist(title)
            .then((res)=>{
                setState(res.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoId ="2dddfd36-b7b4-44db-87bb-182ba3390ce8"
        todolistsAPI.deleteTodolist(todoId)
        .then((res)=>{
                    setState(res.data)
                })
    }, [])

    return <div>{JSON.stringify(state)}</div>
}

export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoId = "2dddfd36-b7b4-44db-87bb-182ba3390ce8"
        todolistsAPI.updateTodolist(todoId,'cок')
            .then((res)=>{
                setState(res.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

