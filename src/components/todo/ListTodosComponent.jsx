function ListTodosComponent(){
    const today = new Date();
    const targetDate = new Date(today.getFullYear()+12, today.getMonth(), today.getDay());
    const todos = [
                    {id: 1, description: 'Learn AWS', done: false, targetDate: targetDate},
                    {id: 2, description: 'Learn Full Strak Dev', done: false, targetDate: targetDate},
                    {id: 3, description: 'Learn Full Strak DevOps', done: false, targetDate: targetDate},
                
                ]

    return(
        <div className="container">
            <h1>Things you want To Do!</h1>
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Description</td>
                            <td>Is done?</td>
                            <td>TargetDate</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(
                                todo => (
                                    <tr key={todo.id}>
                                        <td>{todo.id}</td>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate.toString()}</td>
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