import './App.css';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, Routes } from 'react-router-dom';
import News from './components/News/News';
import Friends from './components/Friends/Friends';
import store from './redux/redux-store';
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = (props) => {
	return (
		<div className='app-wrapper'>
			<Header />
			<Navbar />
			<div className='app-wrapper-content'>
				<Routes>
					<Route path='profile' element={<Profile store={store}/>} />
					<Route path='dialogs' element={<DialogsContainer store={store} />} />
					<Route path='news' element={<News />} />
					<Route path='friends' element={<Friends />} />
				</Routes>

			</div>

		</div>
	);
}

export default App;
