import React,{Component} from 'react';
import MiniGraph from '../mini-graph/mini-graph.js';

const stateGraphs = [
]

class PageHead extends Component{
	render(){
		return (
			<div className="page-head">
                <h3>
                    Dashboard
                </h3>
                <span className="sub-title">Welcome to the Andromeda Dashboard</span>
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