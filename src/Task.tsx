import React, {ChangeEvent, memo} from 'react';
import {TaskType} from "./Todolist";
import {Checkbox} from "@mui/material";
import {EditableSpan} from "./EditableSpan";
import IconButton from "@mui/material/IconButton/IconButton";
import {Delete} from "@mui/icons-material";
type TasksPropsType = {
    task:TaskType
    removeTask: (taskId: string) => void
    changeTaskStatus: (id: string, isDone: boolean) => void
    changeTaskTitle: (taskId: string, newTitle: string) => void
}
export const Task = memo((props:TasksPropsType) => {
    console.log('Task');
    const onClickHandler = () => props.removeTask(props.task.id)
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let newIsDoneValue = e.currentTarget.checked;
        props.changeTaskStatus(props.task.id, newIsDoneValue);
    }
    const onTitleChangeHandler = (newValue: string) => {
        props.changeTaskTitle(props.task.id, newValue);
    }
    return <div className={props.task.isDone ? "is-done" : ""}>
        <Checkbox
            checked={props.task.isDone}
            color="primary"
            onChange={onChangeHandler}
        />

        <EditableSpan value={props.task.title} onChange={onTitleChangeHandler} />
        <IconButton onClick={onClickHandler}>
            <Delete />
        </IconButton>
    </div>
})
