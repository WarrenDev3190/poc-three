import React,{Component} from 'react';

class Leaderboard extends Component{
	render(){
		return (
            <div className="col-md-4">
			    <section className="panel">
			        <header className="panel-heading head-border">
			            notification
			            <span className="tools pull-right">
			                <a className="fa fa-repeat box-refresh" href="javascript:;"></a>
			            </span>
			        </header>
			        <div className="noti-information notification-menu">
			            <div className="notification-list mail-list not-list">
			                <a href="javascript:;" className="single-mail">
			                        <span className="icon bg-primary">
			                            <i className="fa fa-envelope-o"></i>
			                        </span>
			                    <span className="purple-color">John Doe</span> send you a mail
			                    <p>
			                        <small>Just Now</small>
			                    </p>
			                        <span className="read tooltips" data-original-title="Mark as Unread" data-toggle="tooltip" data-placement="left">
			                            <i className="fa fa-circle-o"></i>
			                        </span>
			                </a>
			                <a href="javascript:;" className="single-mail">
			                        <span className="icon bg-success">
			                            <i className="fa fa-comments-o"></i>
			                        </span>
			                    <span className="red-color">Jim Doe</span> mentioned you a post
			                    <p>
			                        <small>30 Mins Ago</small>
			                    </p>
			                        <span className="read tooltips" data-original-title="Mark as Unread" data-toggle="tooltip" data-placement="left">
			                            <i className="fa fa-circle-o"></i>
			                        </span>
			                </a>
			                <a href="javascript:;" className="single-mail">
			                        <span className="icon bg-warning">
			                            <i className="fa fa-warning"></i>
			                        </span> Application Error
			                    <p>
			                        <small> 2 Days Ago</small>
			                    </p>
			                        <span className="read tooltips" data-original-title="Mark as Unread" data-toggle="tooltip" data-placement="left">
			                            <i className="fa fa-circle-o"></i>
			                        </span>
			                </a>
			                <a href="javascript:;" className="single-mail text-center">
			                    View All Notification
			                </a>
			            </div>
			        </div>
			    </section>
			</div>
		);
	}
}

export default Leaderboard;