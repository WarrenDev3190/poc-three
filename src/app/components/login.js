import React,{Component} from 'react';
import {Link} from 'react-router';

class Login extends Component{
	render(){
		return (
			<div className="login-body" style={{height:'100vh'}}>
				<div className="login-logo">
			          <img src="public/img/logo.png" alt=""/>
			      </div>

			      <h2 className="form-heading">Welcome</h2>
			      <div className="container log-row">
			          <form className="form-signin" action="index.html">
			              <div className="login-wrap">
			                  <input type="text" className="form-control" placeholder="3:4 - ID"/>
			                  <Link to="dashboard"><button className="btn btn-lg btn-success btn-block" type="submit" style={{backgroundColor:'#00D0B0'}}>LOGIN</button></Link>
			                  <label className="checkbox-custom check-success">
			                      <input type="checkbox" value="remember-me" id="checkbox1"/> <label for="checkbox1">Remember me</label>
			                      <a className="pull-right" data-toggle="modal" href="#forgotPass"> Forgot Password?</a>
			                  </label>

			                  <div className="registration">
			                      Dont have an account yet?
			                      <a className="" href="#">
			                          Create an account
			                      </a>
			                  </div>
			              </div>


			              <div aria-hidden="true" aria-labelledby="myModalLabel" role="dialog" tabindex="-1" id="forgotPass" className="modal fade">
			                  <div className="modal-dialog">
			                      <div className="modal-content">
			                          <div className="modal-header">
			                              <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
			                              <h4 className="modal-title">Forgot Password ?</h4>
			                          </div>
			                          <div className="modal-body">
			                              <p>Enter your e-mail address below to reset your password.</p>
			                              <input type="text" name="email" placeholder="Email" autocomplete="off" className="form-control placeholder-no-fix"/>

			                          </div>
			                          <div className="modal-footer">
			                              <button data-dismiss="modal" className="btn btn-default" type="button">Cancel</button>
			                              <button className="btn btn-success" type="button">Submit</button>
			                          </div>
			                      </div>
			                  </div>
			              </div>

			          </form>
			      </div>
			</div>
		);
	}
}

export default Login;