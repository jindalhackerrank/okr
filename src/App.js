import React, { useState, useEffect } from 'react';
import './App.css';
import CircularProgress from '@material-ui/core/CircularProgress';
import OKRListing from './OKRListing';
import Filters from './Filters';

const fetchData = async () => {
	return new Promise(async (resolve) => {
		let data = await fetch('https://okrcentral.github.io/sample-okrs/db.json');
		data = data.json();
		resolve(data);
	});
};

const groupOkr = (okrList, filters) => {
	let data = {
		group: {},
		parent: {},
	};

	let filteredData = filters.length > 0 ? okrList.filter((value) => filters.indexOf(value.category) !== -1) : okrList;
	filteredData.map((value) => {
		if (data['group'][value.parent_objective_id]) data['group'][value.parent_objective_id].push(value);
		else if (value.parent_objective_id) data['group'][value.parent_objective_id] = [];
		else data['parent'][value.id] = value;
	});
	return data;
};

function App() {
	const [okrList, setOkrList] = useState([]);
	const [loading, setLoading] = useState(true);
	const [filters, setFilters] = useState([]);
	useEffect(() => {
		fetchData().then((data) => {
			setOkrList(data.data);
			setLoading(false);
		});
	}, ['fetchInitialData']);
	return (
		<div className="content">
			{loading ? (
        <div className="loader-cntnr"ƒ>
				<CircularProgress />
        </div>
			) : (
				<div>
					<Filters
						selected={filters}
						onSelect={(value) => {
							let f = filters.slice();
							let i = f.indexOf(value);
							if (i === -1) f.push(value);
							else f.splice(i, 1);
							setFilters(f);
						}}
					/>
          <div className="list-cntnr">
					<OKRListing {...groupOkr(okrList, filters)} />
          </div>
				</div>
			)}
		</div>
	);
}

export default App;
