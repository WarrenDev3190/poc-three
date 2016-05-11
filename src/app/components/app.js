import React,{Component} from 'react';
import Sidebar from './sidebar/sidebar.js';
import Header from './header/header.js';
import PageHead from './page-head/page-head.js';
import StateOverview from './state-overview/state-overview.js';
import Graph from './graph/graph.js';
import Leaderboard from './leaderboard/leaderboard.js';
import LevelMeter from './level-meter/level-meter.js';
import TwitterFeed from './twitter-feed/twitter-feed.js';
import leaderboardData from '../data/leaderboard.json';
import methodistData from '../data/methodist.json';
const medUnit = methodistData.filter(u=>u.department_name === 'MED UNIT');

class App extends Component{
	render(){
		return (
			<div>
				<section>
					<Sidebar data={medUnit[0]}/>
					<div className="body-content">
						<Header/>
						<PageHead/>
						<div className="wrapper">
							<StateOverview data={medUnit[0]}/>
							<div className="row">
								<Graph data={medUnit} unit={medUnit[0]}/>
								<Leaderboard data={leaderboardData}/>
							</div>
							<div className="row">
								<LevelMeter data={medUnit[0]}/>
							</div>
						</div>
					</div>
				</section>
			</div>
		)
	}

	componentDidMount(){
		//countTo
        $('.timer').countTo();
        //owl carousel
        $("#news-feed").owlCarousel({
            navigation : true,
            slideSpeed : 300,
            paginationSpeed : 400,
            singleItem : true,
            autoPlay:true
        });
	}
};

export default App;