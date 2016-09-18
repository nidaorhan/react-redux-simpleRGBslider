import React 						from 'react';
import * as actions 				from './reducer'; 

class App extends React.Component {
	
	_handleRangeInput(e, colorType) {
		this.props.dispatch( actions.changeColor({
			colorType,
			colorValue: e.target.value
		}) )
	}

	render () {
		let {colorState} = this.props;
		let red = parseInt(colorState.red);
		let green = parseInt(colorState.green);
		let blue = parseInt(colorState.blue);
		let total = red+green+blue;
		let divStyle = {
			textAlign : "center", 
			paddingTop:"5%",
			position: "absolute",
			top: "0", 
			bottom: "0", 
			right:"0", 
			left: "0", 
			backgroundColor: `rgba(${red},${green},${blue},1)`
		}

		function componentToHex(c) {
		    var hex = c.toString(16);
		    return hex.length == 1 ? "0" + hex : hex;
		}

		function rgbToHex(red, green, blue) {
		    return "#" + componentToHex(red) + componentToHex(green) + componentToHex(blue);
		}
		
		return (
			<div className={total<=320 ? "whiteText" : ""} style={divStyle}>

				<h1>RGB SLIDER WITH REACT & REDUX</h1>
				
				<div className="colorBox">
					<span className="colorName">Red: </span>
					<span className="colorValue">{red}</span>
				</div>

				<input 
					defaultValue="26"
					onChange={(e)=> {
						this._handleRangeInput(e, 'red')
					}} 
					className="input" type="range" min="0" max="255" 
				/> <br/>
				
				<div className="colorBox">
					<span className="colorName">Green: </span>
					<span className="colorValue">{green}</span>
				</div>
				
				<input 
					defaultValue="46"
					onChange={(e)=> {
						this._handleRangeInput(e, 'green')
					}} 
					className="input" type="range" min="0" max="255" 
				/> <br/>
				
				<div className="colorBox">
					<span className="colorName">Blue: </span>
					<span className="colorValue">{blue}</span>
				</div>
				
				<input 
					defaultValue="125"
					onChange={(e)=> {
						this._handleRangeInput(e, 'blue')
					}} 
					className="input" type="range" min="0" max="255" 
				/> <br/>
				<span className="hexValue">{rgbToHex(red, green, blue)}</span>

			</div>
		)
	}
}




export default App;