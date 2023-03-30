import {TasksStateType} from "../AppWithReducers";
import {v1} from "uuid";
import {AddTodolistActionType, RemoveTodolistActionType} from "./todolists-reducer";

export type RemoveTaskActionType = {
    type: 'REMOVE-TASK'
    todolistId: string
    taskId: string
}
export type AddTaskActionType = {
    type: 'ADD-TASK'
    title: string
    todolistId: string
}
export type ChangeTaskStatusActionType = {
    type: 'CHANGE-TASK-STATUS'
    taskId: string
    todolistId: string
    isDone: boolean
}
export type ChangeTaskTitleActionType = {
    type: 'CHANGE-TASK-TITLE'
    taskId: string
    todolistId: string
    title: string
}

type ActionsType = RemoveTaskActionType | AddTaskActionType
    | ChangeTaskStatusActionType | ChangeTaskTitleActionType
    | AddTodolistActionType | RemoveTodolistActionType;

const initialState:TasksStateType = {}
export const tasksReducer = (state= initialState, action: ActionsType):TasksStateType => {
    switch (action.type) {
        case "REMOVE-TASK":
            return {
                ...state,
                [action.todolistId]:state[action.todolistId].filter(el=>el.id!=action.taskId)
            }
        case "ADD-TASK":
            return {...state,
                [action.todolistId]:[{id: v1(),title:action.title,isDone:false},...state[action.todolistId]]
            }
        case 'CHANGE-TASK-STATUS':
            return {...state,
                [action.todolistId]:state[action.todolistId].map(el=>el.id===action.taskId?{...el,isDone:action.isDone}:el)
            }
        case 'CHANGE-TASK-TITLE':
            debugger
            return {...state,
                [action.todolistId]:state[action.todolistId].map(el=>el.id===action.taskId?{...el,title:action.title}: el)
            }
        case 'ADD-TODOLIST':
            return {...state,[action.todolistId]: []}
        case "REMOVE-TODOLIST":{
            const copy = {...state};
            delete copy[action.id];
            return copy
        }
        default:
            return state;
    }
}

export const removeTaskAC = (taskId:string,todolistId:string):RemoveTaskActionType => {
    return {type:'REMOVE-TASK',taskId,todolistId} as const
}
export const addTaskAC = (title:string,todolistId:string):AddTaskActionType => {
    return {type:'ADD-TASK',title,todolistId} as const
}
export const changeTaskAC = (taskId:string,todolistId:string,isDone:boolean):ChangeTaskStatusActionType => {
    return {type:'CHANGE-TASK-STATUS',isDone,taskId,todolistId,} as const
}
export const changeTaskTitleAC = (todolistId:string,taskId:string,title:string):ChangeTaskTitleActionType => {
    return {type:'CHANGE-TASK-TITLE',todolistId,taskId,title} as const
}