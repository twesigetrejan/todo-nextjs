import { Itask } from "./types/tasks";

const baseUrl = 'http://localhost:3002/tasks'

export default async function getAllTodos(): Promise<Itask[]> {
    const res = await fetch(`${baseUrl}`, { cache: 'no-store' });
    const todos = await res.json();
    return todos;
}

export const addTodo = async (todo: Itask): Promise<Itask> => {
    const res = await fetch(`${baseUrl}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    })
    const newTodo = await res.json();
    return newTodo;

}