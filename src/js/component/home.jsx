
import React, { useState } from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
//create your first component
const Home = () => {
	const [tareas, setTareas] = useState(["Hacer la comida", "Lavar la ropa"])
	const [nuevaTarea, setNuevaTarea] = useState("")
	
	
	const handleTareaNueva = (event) => {
		setNuevaTarea(event.target.value)
	}
	const handleSubmit = (event) => {
		event.preventDefault()
		setTareas([...tareas,nuevaTarea])
		setNuevaTarea("")
	}
	const handleDelete = (positionToDelete) => {
		const newArr = []
		for (let i = 0; i < tareas.length; i++) {
			if (i !== positionToDelete) {
				newArr.push(tareas[i])
			}
		}
		setTareas(newArr)
	}
	return (
	
		<div className="w-25 m-auto mt-5 border border-5 ">
			<form onSubmit={handleSubmit}> 
				<div className="mb-3 fs-4">
					<label htmlhtmlFor="exampleInputEmail1" className="form-label d-flex justify-content-center text-black">LISTA DE TAREAS</label>
					<input onChange={handleTareaNueva} type="text" className="form-control border border-4" id="newTask" value={nuevaTarea} aria-describedby="taskHelp"/>
					<div id="taskHelp" className="form-text"></div>
				</div>
				<button type="submit" className="btn btn-success border border-4  ">Submit</button>
			</form>
			
			
			<ul className="w-15 m-auto mt-3">
				{/* Utilizamos el método map para generar dinámicamente los elementos <li> */}
				{tareas.map((item, index) => (
				<li className="text-secondary gap-2" key={index}>{item}
					<button onClick={()=>handleDelete(index)} type="button" className="fs-6 border-0 btn-sm">X</button>
				</li>
				))}
			</ul>
			{tareas.length === 0 ? <span>No hay tareas </span> : <span> {tareas.length}</span>}
			{tareas.length === 0 ? <span></span> : <span>{tareas.length}</span>}
		</div>


	);
};
export default Home;