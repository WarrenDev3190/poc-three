import React,{Component} from 'react';
import StreakMeter from '../streak-meter/streak-meter.js';

class Sidebar extends Component{
	render(){
		const streaks = [
			{
				title: 'Under 24hrs over 75hrs',
				count: this.props.data.percent_under_24_over_75_streak
			},
			{
				title: 'Under 48hrs over 75hrs',
				count: this.props.data.percent_under_48_over_75_streak
			},
			{
				title: 'Under 72hrs over 75hrs',
				count: this.props.data.percent_under_72_over_75_streak
			},
			{
				title: 'Over 75hrs',
				count: this.props.data.percentile_over_75_streak
			},
			{
				title: 'No Documentaion',
				count: this.props.data.no_doc_streak
			},
			{
				title: 'Erroneous Documentation',
				count: this.props.data.erroneous_streak
			}
		];
		return (
			<div className="sidebar-left">
	            <div className="logo dark-logo-bg visible-xs-* visible-sm-*">
	                <a href="#">
	                    <img style={{width:'40px'}}src="public/img/andro.png" alt=""/>
	                    <span className="brand-name">Andromeda</span>
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