import React, {useState} from "react";
import { useQuery } from 'react-query'


export function Todos() {
    const [todos, setTodos] = useState([])
    const [loading, setLoading] = useState(false)

    const response = useQuery('todos', getTodos)

    React.useEffect(() => {
        setLoading(response.isLoading)
    }, [response.isLoading])

    React.useEffect(() => {
        if (response.isSuccess) {
            setTodos(response.data)
        }
    }, [response.data, response.isSuccess])



    if (loading) return <span>Loading....</span>

    function getTodos() {
        return fetch("https://jsonplaceholder.typicode.com/todos")
            .then(res => res.json())
            .then(data => {
                return data
            })
            .catch(e => Promise.reject(e))
    }
    return (
        <div>
            {todos.map(todo => <div><div>{todo.title}</div><hr/></div>)}
        </div>
    )
}