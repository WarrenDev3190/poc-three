import React,{Component} from 'react';

const LeaderBoardRow = (props) => (
	<a href="#" className="single-mail">
            <span className="icon bg-primary">
                <i className={`fa fa-${props.division === "San Antonio Division" ? 'trophy' : 'star'}`}></i>
            </span>
        <span className="purple-color">{props.department_name}</span> {props.division}
        <p>
            <small>{props.cumulative_pts}</small>
        </p>
            <span className="read tooltips" data-original-title="Mark as Unread" data-toggle="tooltip" data-placement="left">
                <i className="fa fa-circle-o"></i>
            </span>
    </a>
);

class Leaderboard extends Component{
	render(){
		return (
            <div className="col-md-4">
			    <section className="panel">
			        <header className="panel-heading head-border">
			            Leaderboard
			            <span className="tools pull-right">
			                <a className="fa fa-repeat box-refresh" href="javascript:;"></a>
			            </span>
			        </header>
			        <div className="noti-information notification-menu">
			            <div className="notification-list mail-list not-list">
			                {this.props.data.map((row,i)=>{
			                	return <LeaderBoardRow {...row} key={i}/>
			                })}
			                <a href="javascript:;" className="single-mail text-center">
			                    View All
			                </a>
			            </div>
			        </div>
			    </section>
			</div>
		);
	}
}

export default Leaderboard;