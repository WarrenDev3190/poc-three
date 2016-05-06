import React,{Component} from 'react';
import StreakMeter from '../streak-meter/streak-meter.js';

const streaks = [
	{
		title: 'Catheters Below 24hrs',
		count: 45
	},
	{
		title: 'No Erroneous Documentation',
		count: 50
	}
];

class Sidebar extends Component{
	render(){
		return (
			<div className="sidebar-left">
	            <div className="logo dark-logo-bg visible-xs-* visible-sm-*">
	                <a href="#">
	                    <img style={{width:'40px'}}src="public/img/andro.png" alt=""/>
	                    <span className="brand-name">SlickLab</span>
	                </a>
	            </div>
	            <div className="sidebar-left-info">
	                <div className=" search-field"> </div>
	                <div className="sidebar-widget">
	                    <h4>Active Streaks</h4>
	                    <ul className="list-group">
	                        {streaks.map((streak,i)=>{
	                        	return <StreakMeter {...streak} key={i}/>
	                        })}
	                    </ul>
	                </div>
	            </div>
	        </div>
		);
	}
};

export default Sidebar;