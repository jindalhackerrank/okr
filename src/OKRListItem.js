import React, { useState } from 'react';
import './App.css';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function OKRListItem({ okr = [], parent, index }) {
	const [expanded, setExpanded] = useState(true);
	return (
		<div>
			<ExpansionPanel expanded={expanded} onClick={() => setExpanded(!expanded)}>
				<ExpansionPanelSummary expandIcon={okr.length > 0 ? <ExpandMoreIcon /> : ''} classes="summary">
					<Typography variant="h6">{`${index}) ${parent.title}`}</Typography>
				</ExpansionPanelSummary>
				<ExpansionPanelDetails>
					<List>
						{okr.map((value) => (
							<ListItem alignItems="flex-start">
								<ListItemIcon>
									<FiberManualRecordIcon />
								</ListItemIcon>
								<ListItemText primary={value.title} />
							</ListItem>
						))}
					</List>
				</ExpansionPanelDetails>
			</ExpansionPanel>
		</div>
	);
}

export default OKRListItem;
