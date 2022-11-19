import logo from './logo.svg';
import './App.css';
import Layout from './Components/Layout/Layout';
import Buy from "./pages/Buy/Buy"
import CardContainer from './Components/Cards/CardContainer';

function App() {
	return (
		<div>
			<Layout />
			<div className="main-content">
				<button type="button" class="conn-wlt btn btn-primary float-right">
					Buy NFT
				</button>
				<button type="button" class="conn-wlt btn btn-primary float-right">
					Check Status
				</button>
				<button type="button" class="conn-wlt btn btn-primary float-right">
					Renew Subsciption
				</button>
			</div>
			<CardContainer />
      
      <Buy />
		</div>
	);
}

export default App;
