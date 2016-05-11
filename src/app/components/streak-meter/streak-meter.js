import React from 'react';

const StreakMeter = (props) => (
	<li>
	    <span className={`label label-${props.count === 0 ? 'warning' : 'primary'} pull-right`}>{props.count} days</span>
	    <p>{props.title}</p>
	    <div className="progress progress-xs">
	        <div className="progress-bar progress-bar-default" style={{width:`${props.count}%`}}>
	            <span className="sr-only">{props.count} days</span>
	        </div>
	    </div>
	</li>
);

export default StreakMeter;