import React,{Component} from 'react';

class Graph extends Component{
	render(){
		return(
			<div className="col-md-8">
			    <section className="panel">
			        <header className="panel-heading">
			            Catheter Times
			            <span className="tools pull-right">
			                <a className="fa fa-repeat box-refresh" href="javascript:;"></a>
			            </span>
			        </header>
			        <div className="panel-body">

			            <div className="earning-chart-space" id="cath-average"></div>
			            <div className="row">
			            	<div className="col-sm-4">
			            		<p style={{color:"#5FD18A"}}>Avg Time On Cath</p>
			            	</div>
			            	<div className="col-sm-4">
			            		<p style={{color:"#76B6D0"}}>Points Attributed</p>
			            	</div>
			            </div>
			            <div className="row earning-chart-info">
			                <div className="col-sm-3 col-xs-6">
			                    <h4>{this.props.unit.percent_catheters_under_24_hours}</h4>
			                    <small className="text-muted">% Catheters Under 24hrs</small>
			                </div>
			                <div className="col-sm-3 col-xs-6">
			                    <h4>{this.props.unit.percent_catheters_under_48_hours}</h4>
			                    <small className="text-muted">% Catheters Under 48hrs</small>
			                </div>
			                <div className="col-sm-3 col-xs-6">
			                    <h4>{this.props.unit.percent_catheters_under_72_hours}</h4>
			                    <small className="text-muted">% Catheters Under 72hrs</small>
			                </div>
			            </div>
			        </div>
			    </section>
			</div>
		);
	}

	componentDidMount(){
		var data1 = this.props.data.map((row,i)=>{
				return [(31-i), Math.round(parseInt(row.average_time_on_catheter))]
		});
	    var data2 = this.props.data.map((row,i)=>{
	    	return [(31-i), Math.round(parseInt(row.average_time_on_catheter_pts)*10)]
	    });
	    $.plot($("#cath-average"), [
	        data1, data2
	    ],
	        {
            series: {
                lines: {
                    show: false,
                    fill: true
                },
                splines: {
                    show: true,
                    tension: 0.4,
                    lineWidth: 0.5,
                    fill: 0.4
                },
                points: {
                    radius: 0,
                    show: true
                },
                shadowSize: 2
            },
            grid: {
                hoverable: true,
                clickable: true,
                tickColor: "#f9f9f9",
                borderWidth: 1,
                color: '#d5d5d5',
                borderColor: "#f3f3f3"
            },
            colors: ["#5FD18A", "#76B6D0"],
            xaxis:{
            },
            yaxis: {
                ticks: 4
            },
            tooltip: true,
            tooltipOpts: {
                defaultTheme: false
            }

        });
	}
};

export default Graph;