import React, { useState } from 'react';
import './App.css';
import OkrListItem from './OKRListItem';

function OKRListing({ group = {}, parent = {} }) {
	return (
		<div>
			{Object.keys(parent).map((id, index) => (
				<OkrListItem okr={group[id]} parent={parent[id]} index={index+1} />
			))}
		</div>
	);
}

export default OKRListing;
