var React = require('react')

module.exports = class AppComp extends React.Component  {

	handleClick(){
		alert("Clicked");
	}
	render(){
		return (
			<html>
				<head> 
					<title>Server Side Rendering</title>
				</head>
				<body> 
					<div>
						<h1>React server side rendering</h1>
						<button onClick={this.handleClick}> Click </button>
					</div>
					<script src="/bundle.js" />
				</body>
			</html>
		);

	}
}

