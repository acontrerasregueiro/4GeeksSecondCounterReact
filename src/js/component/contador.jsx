import React from "react";
/*
const Contador = () => {
    return <div>loladasdasdasdlalo</div>;
};

export default Contador;
*/

export const Contador = (props) => {
	let segundos = props.segundos % 10;
	let decenas = (props.segundos / 10) % 10;
	let centenas = (props.segundos / 100) % 10;
	let millar = (props.segundos / 1000) % 10;
	console.log(centenas);
	// setInterval((segundos, decenas, centenas, millar) => {
	return (
		<div className="row col-10" id="divMain">
			<div className="col">
				<div className="card h-100 icono">
					<i className="fa-solid fa-clock"></i>
					{/* <p>{props.segundos}</p> */}
				</div>
			</div>
			<div className="col">
				<div className="card h-100 millar">{Math.floor(millar)}</div>
			</div>
			<div className="col">
				<div className="card h-100 centenas">
					{Math.floor(centenas)}
				</div>
			</div>
			<div className="col">
				<div className="card h-100 decenas">{Math.floor(decenas)}</div>
			</div>
			<div className="col">
				<div className="card h-100 seconds">{segundos}</div>
			</div>
		</div>
	);
	// //console.log(segundos);
	// }, 500);
};
