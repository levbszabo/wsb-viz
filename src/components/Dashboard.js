import React, { Component } from 'react'
import TableauReport from 'tableau-react-embed';

const options = {height: 827, width: 1000};

class Dashboard extends Component {
    render() {
    return (
      <div className="content">
	    <TableauReport
	url="https://public.tableau.com/views/wsb-viz/Dashboard1"
	options = {options} />
	    
      </div>
    )
  }
}

export default Dashboard
