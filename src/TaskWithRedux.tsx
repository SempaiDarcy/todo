import React, {ChangeEvent, memo} from 'react';
import {TaskType} from "./Todolist";
import {Checkbox} from "@mui/material";
import {EditableSpan} from "./EditableSpan";
import IconButton from "@mui/material/IconButton/IconButton";
import {Delete} from "@mui/icons-material";
import {useDispatch} from "react-redux";
import {changeTaskAC, changeTaskTitleAC, removeTaskAC} from "./state/tasks-reducer";
type TasksPropsType = {
    task:TaskType
    todolistId:string
}
export const TaskWithRedux = memo(({task,todolistId}:TasksPropsType) => {
    console.log('TaskWithRedux');
    const {id,title,isDone} = task
    const dispatch = useDispatch()
    const onClickHandler = () =>dispatch( removeTaskAC(id, todolistId))
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let newIsDoneValue = e.currentTarget.checked;
        const action = changeTaskAC(id, todolistId, newIsDoneValue);
        dispatch(action)
    }
    const onTitleChangeHandler = (newValue: string) => {
        dispatch(changeTaskTitleAC(id, newValue,todolistId))
    }
    return <div className={isDone ? "is-done" : ""}>
        <Checkbox
            checked={isDone}
            color="primary"
            onChange={onChangeHandler}
        />

        <EditableSpan value={title} onChange={onTitleChangeHandler} />
        <IconButton onClick={onClickHandler}>
            <Delete />
        </IconButton>
    </div>
})
