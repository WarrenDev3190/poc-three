import React,{Component} from 'react';
import MiniGraph from '../mini-graph/mini-graph.js';

const stateGraphs = [
	{
		name: 'Avg Catheter Time',
		id: '#cath',
		total: '44hrs',
		data: [87,109,111,95,120,99,87,100,67,75,65,87]
	}
]

class PageHead extends Component{
	render(){
		return (
			<div className="page-head">
                <h3>
                    Dashboard
                </h3>
                <span className="sub-title">Welcome to Andromeda dashboard</span>
                <div className="state-information">
                    {stateGraphs.map((graph,i)=>{
                    	return <MiniGraph {...graph} key={i}/>
                    })}
                </div>
            </div>
		);
	}
};

export default PageHead;