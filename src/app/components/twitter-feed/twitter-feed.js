import React,{Component} from 'react';

class TwitterFeed extends Component{
	render(){
		return (
			<div className="col-md-4">
				<section className="panel">
			        <div className="slick-carousal">
			            <div className="overlay-c-bg"></div>
			            <div id="news-feed" className="owl-carousel owl-theme">
			                <div className="item">
			                    <h3 className="text-success">News</h3>
			                    <span className="date">12 March 2015</span>
			                    <h1>If today were the last day of your life, would you want to do what your are about to do today</h1>
			                    <div className="text-center">
			                        <a href="javascript:;" className="view-all">View All</a>
			                    </div>
			                </div>
			                <div className="item">
			                    <h3 className="text-success">News</h3>
			                    <span className="date">11 February 2015</span>
			                    <h1>SlickLab build with Boostrap latest version 3+. Its very easy to customize. Hope you enjoy it..</h1>
			                    <div className="text-center">
			                        <a href="javascript:;" className="view-all">View All</a>
			                    </div>
			                </div>
			                <div className="item">
			                    <h3 className="text-success">News</h3>
			                    <span className="date">10 January 2015</span>
			                    <h1>It has huge usable widgets, amazing design, clean code quality, super responsive and quick customar support.</h1>
			                    <div className="text-center">
			                        <a href="javascript:;" className="view-all">View All</a>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </section>
			</div>
		);
	}
};

export default TwitterFeed;