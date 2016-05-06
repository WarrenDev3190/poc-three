import React,{Component} from 'react';

class LevelMeter extends Component{
	render(){
		return(
			<div className="col-md-8">
			    <section className="panel">
			        <div className="panel-body cpu-graph">
			            <div className="row">
			                <div className="col-md-7">
			                    <div className="c-info">
			                        <h3>cpu usages</h3>
			                        <p>Once this tab is open click the CPU button above the list of programs twice</p>
			                    </div>
			                </div>
			                <div className="col-md-5">
			                    <div className="easy-pie-chart">
			                        <div className="percentage-light" data-percent="33"><span>33%</span>
			                        </div>
			                    </div>
			                </div>
			            </div>
			        </div>
			    </section>
			</div>
		);
	}

	componentDidMount(){
		var Script = function () {
			    $('.percentage-light').easyPieChart({
			        barColor: function(percent) {
			            percent /= 100;
			            return "rgb(" + Math.round(255 * (1-percent)) + ", " + Math.round(255 * percent) + ", 0)";
			        },
			        trackColor: '#eeeeee',
			        barColor:'#90d7ed',
			        scaleColor: false,
			        lineCap: 'butt',
			        lineWidth: 15,
			        animate: 1000,
			        size: 150
			    });

			    $('.update-easy-pie-chart').click(function(){
			        $('.easy-pie-chart .percentage').each(function() {
			            var newValue = Math.floor(100*Math.random());
			            $(this).data('easyPieChart').update(newValue);
			            $('span', this).text(newValue);
			        });
			    });

			    $('.updateEasyPieChart').on('click', function(e) {
			        e.preventDefault();
			        $('.percentage, .percentage-light').each(function() {
			            var newValue = Math.round(100*Math.random());
			            $(this).data('easyPieChart').update(newValue);
			            $('span', this).text(newValue);
			        });
			    });

		}();
	}
}

export default LevelMeter;