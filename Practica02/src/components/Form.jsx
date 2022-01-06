import React,{useState} from 'react'
import Todo from '../components/Todo'

const Form = () => {
    const [todo, setTodo] = useState({})
    const [cant, setCant] = useState({})
    const [todos, setTodos] = useState([
        /*{todo: 'todo 1', cant: '1'},
        {todo: 'todo 2', cant: '2'},
        {todo: 'todo 3', cant: '3'}*/
    ])
    const handleChange1 = e => setTodo({[e.target.name]: e.target.value})
    const handleChange2 = e => setCant({[e.target.name]: e.target.value})
    const handleClick = e => {
        if(Object.keys(todo).length === 0 || todo.todo.trim() === '') {
            alert('el campo no puede estar vacio')
            return
        }
        if(Object.keys(cant).length === 0 || cant.cant.trim() === '') {
            alert('el campo no puede estar vacio')
            return
        }
        setTodos([...todos, {todo: todo.todo, cant: cant.cant}])
    }
    const deleteTodo = indice => {
        const newTodos = [...todos]
        newTodos.splice(indice, 1)
        setTodos(newTodos)
    }
    return (
        <>
            <form onSubmit={e => e.preventDefault()}>
                <label>Agregar tarea</label><br />
                <input type="text" name="todo" onChange={handleChange1} />
                <input type="number" name="cant" onChange={handleChange2} />
                <button onClick={handleClick}>agregar</button>
            </form>
            {
                todos.map((value, index) => (
                    <Todo todo={value.todo} cant={value.cant} key={index} index={index} deleteTodo={deleteTodo} />
                ))
            }
        </>
    )
}
export default Form