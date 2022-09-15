export interface TodoItem{
    id:string,
    title:string,
    status:string,
    onCheck?:(todoId:string) => void,
    onDelete?:(todoId:string) => void
}

export interface TodoItemProps{
    title:string,
    status:string,
    onCheck?:(todoId:string) => void,
    onDelete?:(todoId:string) => void
}