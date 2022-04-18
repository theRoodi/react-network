import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Technologies from './components/Technologies';

const App = () => {
	return (
		<div className='app-wrapper'>
			<header className='header'>
				<img src='https://cdn.logo.com/hotlink-ok/logo-social.png' />
			</header>
			<nav className='nav'>
				<div><a href='#'>Profile</a></div>
				<div><a href='#'>Messages</a></div>
				<div><a href='#'>News</a></div>
			</nav>
			<div className='content'>
				<div>
					<img src='https://images.ctfassets.net/hrltx12pl8hq/5KiKmVEsCQPMNrbOE6w0Ot/341c573752bf35cb969e21fcd279d3f9/hero-img_copy.jpg' />
				</div>
				<div className='avatar'>
					<img src='https://static.vecteezy.com/system/resources/previews/000/425/632/large_2x/avatar-icon-vector-illustration.jpg' />
				</div>

				<div>
					My posts
					<div>
						new post
					</div>
					<div>post1</div>
					<div>post2</div>
					<div>post3</div>
				</div>
			</div>

		</div>
	);
}

export default App;
