import React,{Component} from 'react';

class StateOverview extends Component{
	render(){
		return(
			<div className="row state-overview">
				<div className="col-lg-3 col-sm-6">
			        <section className="panel purple">
			            <div className="symbol">
			                <i className="fa fa-send"></i>
			            </div>
			            <div className="value white">
			                <h1 className="timer" data-from="0" data-to="320"
			                    data-speed="1000">
			                </h1>
			                <p>New Order</p>
			            </div>
			        </section>
			    </div>
			    <div className="col-lg-3 col-sm-6">
			        <section className="panel ">
			            <div className="symbol purple-color">
			                <i className="fa fa-tags"></i>
			            </div>
			            <div className="value gray">
			                <h1 className="purple-color timer" data-from="0" data-to="123"
			                    data-speed="1000">
			                </h1>
			                <p>Item Sold</p>
			            </div>
			        </section>
			    </div>
			    <div className="col-lg-3 col-sm-6">
			        <section className="panel green">
			            <div className="symbol ">
			                <i className="fa fa-cloud-upload"></i>
			            </div>
			            <div className="value white">
			                <h1 className="timer" data-from="0" data-to="432"
			                    data-speed="1000">
			                </h1>
			                <p>Item Upload</p>
			            </div>
			        </section>
			    </div>
			    <div className="col-lg-3 col-sm-6">
			        <section className="panel">
			            <div className="symbol green-color">
			                <i className="fa fa-bullseye"></i>
			            </div>
			            <div className="value gray">
			                <h1 className="green-color timer" data-from="0" data-to="2345"
			                    data-speed="3000">
			                </h1>
			                <p>Unique Visit</p>
			            </div>
			        </section>
			    </div>
			</div>
		);
	}
};

export default StateOverview;