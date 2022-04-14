import './App.css';

const App = () => {
	return (
		<div>
			<Header />
			<Technologies />
		</div>
	);
}


const Header = () => {
	return(
		<div>
			<a href='#'>1</a>
			<a href='#'>2</a>
			<a href='#'>3</a>
			<a href='#'>4</a>
		</div>
	)
}
const Technologies = () => {
	return(
		<div>
			<div>One</div>
			<div>Two</div>
			<div>Three</div>
		</div>
	)
}

export default App;
