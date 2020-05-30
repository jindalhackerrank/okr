import React, { useState } from 'react';
import './App.css';
import Chip from '@material-ui/core/Chip';

function Filters({ selected, onSelect = () => {} }) {
	return (
		<div className="filters-cntnr">
			{[
				'Company',
				'Sales',
				'Marketing',
				'Finance',
				'People',
				'Product Management',
				'Engineering',
				'Administration',
				'Customer Success',
				'Design',
			].map((value) => (
				<Chip
					label={value}
                    className="filter-item"
					onClick={() => onSelect(value)}
					color={selected.indexOf(value) !== -1 ? 'primary' : ''}
				/>
			))}
		</div>
	);
}

export default Filters;
