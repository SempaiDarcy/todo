import axios from "axios";
import {TodolistType} from "../App";

type TodolistsItemsType = {
    "id": string,
    "title": string,
    "addedDate": string,
    "order": number
}
 export type ResponseType<D = {}> = {
    resultCode: number
    messages: Array<string>
    fieldsErrors:string[]
     data: D
}

const instance = axios.create({

        baseURL: 'https://social-network.samuraijs.com/api/1.1/',
        withCredentials: true,
    }
)

export const todolistAPI = {
    getTodolists() {
         return  instance.get<Array<TodolistsItemsType>>(`todo-lists`)
    },
    createTodolist(title:string) {
          return  instance.post<ResponseType<{item:TodolistType}>>('todo-lists',{title})
    },
    deleteTodolist(todoId:string) {
         return   instance.delete<ResponseType>(`todo-lists/${todoId}`)
    },
    updateTodolist(todoId:string,title:string) {
         return  instance.put<ResponseType>(`todo-lists/${todoId}`,{
            title
        })
    }

}