import React,{Component} from 'react';

class MiniGraph extends Component{
	render(){
		return (
			<div className="state-graph">
	            <div id={`${this.props.id}`} className="chart"></div>
	            <div className="info">{this.props.name} {this.props.total}</div>
	        </div>
		);
	}

	componentDidMount(){
		const id = this.props.id,
			  data = this.props.data;
		$(id).sparkline(data, {
	        type: 'bar',
	        height: '32',
	        barWidth: 5,
	        barSpacing: 2,
	        barColor: '#c5c5ca'
	    });
	}
}

export default MiniGraph;