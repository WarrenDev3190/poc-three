import React,{Component} from 'react';

const StatePanel = (props) => (
	<div className="col-lg-3 col-sm-6">
	    <section className={`panel ${props.color}`}>
	        <div className="symbol">
	            <i className={`fa fa-${props.icon}`}></i>
	        </div>
	        <div className={`value ${props.icon_color}`}>
	            <h1 className="timer" data-from="0" data-to={props.to} data-speed="1000">
	            </h1>
	            <p>{props.title}</p>
	        </div>
	    </section>
	</div>
);

class StateOverview extends Component{
	render(){
		return(
			<div className="row state-overview">
				<StatePanel 
					color="purple" 
					icon="plus-circle"
					icon_color="white"
					to={this.props.data.pts_total} 
					title="Points Total"/>

				<StatePanel 
				color="green" 
				icon="file-text"
				icon_color="white"
				to={0} 
				title="Docs Filed"/>

				<StatePanel 
					color="green" 
					icon="group" 
					icon_color="white"
					to={24} 
					title="Patients On Floor"/>

				<StatePanel 
					color="green" 
					icon_color="white"
					icon="dashboard" 
					to={this.props.data.average_time_on_catheter} 
					title="Avg Time On Catheter"/>
			</div>
		);
	}
};

export default StateOverview;