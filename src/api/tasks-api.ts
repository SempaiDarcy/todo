import axios from 'axios'

export type TasksItemsType = {
    description: string
    title: string
    completed: boolean
    status: number
    priority: number
    startDate: number
    deadline: number
    id: string
    todoListId: string
    order: number
    addedDate: number
}
export type ResponseType<D = {}> ={
    resultCode: number
    messages: Array<string>,
    data: D
}
// type GetTaskResponse = {
//     error:string|null
//     totalCount:number
// }
const instance = axios.create({
        baseURL: 'https://social-network.samuraijs.com/api/1.1/todo-lists/',
        withCredentials: true,
    }
)

export const tasksAPI = {
    getTasks(todolistId: string) {
       return instance.get<TasksItemsType>(`${todolistId}/tasks`)
    },
    postTasks(todolistId:string, title:string){
        return instance.post<ResponseType<{item:TasksItemsType}>>(`${todolistId}/tasks`,{title})
    },
    deleteTasks(todolistId:string,taskId:string){
        return instance.delete(`${todolistId}/tasks/${taskId}`)
    },
    updateTasks(todolistId:string,taskId:string,title:string){
        return  instance.put(`${todolistId}/tasks/${taskId}`, {title})
    }
}
