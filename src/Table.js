import React from 'react'
import { Tab } from 'semantic-ui-react'
import Users from './users.json'


		const panes = Users.data.map(
			(user)=>({
				menuItem: user.username,
				render: () => <Tab.Pane><div>
					<h1>{user.username}. {user.position}</h1>
					<h2>{user.company}</h2>
					<p>{user.skills.join(", ")}</p>
				</div></Tab.Pane>
			})
		);

		const Table =()=>(	<Tab menu={{ fluid: true, vertical: true }}
		              menuPosition='left'
		              panes={panes} />)


export default Table;
