import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Friends from './components/Friends/Friends';

const App = (props) => {
	return (
		<div className='app-wrapper'>
			<Header />
			<Navbar />
			<div className='app-wrapper-content'>
				<Routes>
					<Route path='profile' element={<Profile
						state={props.state.profilePage}
						dispatch={props.dispatch} />} />
					<Route path='dialogs' element={<Dialogs state={props.state.dialogPage} />} />
					<Route path='news' element={<News />} />
					<Route path='friends' element={<Friends />} />
				</Routes>

			</div>

		</div>
	);
}

export default App;
