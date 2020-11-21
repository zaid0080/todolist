import React, {useState} from 'react'
import './ListItems.css'
import { MdDelete } from "react-icons/md";


function ToDoList(){
	const [listItems, setListItems] = useState([])
	const [input, setInput] = useState('')

	
	const addList = (event) => {
		event.preventDefault();
		setListItems([...listItems, input]);
		setInput('');
	}
	

	const addList1 = e =>{
		if(e.which === 13){
			e.preventDefault();
			setListItems([...listItems, input]);
			setInput('');
		}
	}
	
	const textRemover = (index) => {
		console.log(index)
	const newTodos = [...listItems];
	newTodos.splice(index, 1);
	setListItems([...newTodos]);
	};
	
	
	
	return(
		<div id='container'>
			<h1>To-Do List</h1>
			<div className='inputButton'>
				<input className='input1' type = 'text' value={input} onKeyPress = {addList1}
					onChange = {e => setInput(e.target.value) } />
				
				<button disabled={!input} className='button1' onClick ={addList}>Add</button>
			</div>
			<ul>
				{listItems.map((item, index) => (
					<li key={index} ><span onClick={()=>{textRemover(index)}}><MdDelete /></span>{item}</li>
				))}
			</ul>
		</div>
	)
}

export default ToDoList