import { useEffect, useState } from "react";
import { retrieveALLTodosForUsernameApi, deleteTodoApi } from "./api/TodoApiService";

function ListTodosComponent(){
    const today = new Date();
    const targetDate = new Date(today.getFullYear()+12, today.getMonth(), today.getDay());

    const [todos, setTodos] = useState([])
    const [message, setMessage] = useState(null)

    useEffect( () => refreshTodos(), [])

    function refreshTodos(){
        retrieveALLTodosForUsernameApi('in28minutes')
            .then( (response) => {
                console.log(response.data)
                setTodos(response.data)
            })
            .catch( error => console.log(error) )
            .finally( ()=> console.log('cleanup'));
    }

    function deleteTodo(id){
        console.log("clicked"+ id)
        deleteTodoApi('in28minutes', id)
            .then(
                ()=>{
                    setMessage(`Delete of todo with ${id} successful`) // 삭제 성공 메세지 표시
                    refreshTodos() // todo리스트 업데이트
                }
            )
            .catch( error => console.log(error) )
    }
    return(
        <div className="container">
            <h1>Things you want To Do!</h1>
            {message && <div className="alert alert-warning">{message}</div>}
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Is done?</th>
                            <th>TargetDate</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(
                                todo => (
                                    <tr key={todo.id}>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate.toString()}</td>
                                        <td><button className="btn btn-warning" onClick={()=>deleteTodo(todo.id)}>Delete</button></td>
                                    </tr>
                                )
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListTodosComponent;