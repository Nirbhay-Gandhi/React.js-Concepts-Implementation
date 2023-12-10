import React, {useState, useEffect} from "react";
import axios from 'axios';

function Test_API()
{
    /**Demo Api str: {todos: Array(30), total: 150, skip: 0, limit: 30} */
    
    const [toDoList, setToDoList] = useState([]);

    const [toDoItem, setToDoItem] = useState({"id":1,
    "todo":"Do something nice for someone I care about",
    "completed":true,
    "userId":26});

    const url = 'https://dummyjson.com/todos';

    const getAllToDos = () => {
        axios.get(url)
        .then( (response) => {
            const allToDos = response.data;
            console.log("api call: ", allToDos);
            setToDoList(allToDos.todos);
            console.log("Array: ",toDoList);
        } )
        .catch( (error) => {
            console.log(error);
        } )
    }

    useEffect( () => {
        getAllToDos();
    }, []);

    return(
        <>
            {/* Showing the toDos in the table */}
            
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>ToDO</th>
                        <th>Completed</th>
                        <th>UserID</th>
                    </tr>
                </thead>
                <tbody>

                    { toDoList.map( task => 
                        <tr key={task.id}>
                            <td>{task.id}</td>
                            <td>{task.todo}</td>
                            <td>{task.completed.toString()}</td>
                            <td>{task.userId}</td>
                        </tr>
                    ) }

                </tbody>
            </table>
            
        </>
    );
}

export default Test_API;