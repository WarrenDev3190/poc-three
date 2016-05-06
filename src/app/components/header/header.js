import React,{Component} from 'react';

class Header extends Component{
	render(){
		return (
			    <div className="header-section">
                <div className="logo dark-logo-bg hidden-xs hidden-sm">
                    <a href="index.html">
                        <img style={{width:'30px'}}src="public/img/andro.png" alt=""/>
                        <span className="brand-name">Andromeda</span>
                    </a>
                </div>

                <div className="icon-logo dark-logo-bg hidden-xs hidden-sm">
                    <a href="index.html">
                        <img style={{width:'25px'}}src="public/img/andro.png" alt=""/>
                    </a>
                </div>

                <a className="toggle-btn"><i className="fa fa-outdent"></i></a>

                <div className="notification-wrap">
                    <div className="right-notification">
                        <ul className="notification-menu">
                            <li>
                                <form className="search-content">
                                    <input type="text" className="form-control" name="keyword" placeholder="Search..."/>
                                </form>
                            </li>

                            <li>
                                <a href="#" className="btn btn-default dropdown-toggle" data-toggle="dropdown">
                                    <img src="public/img/img4.jpg" alt=""/>Nurse Joy
                                    <span className=" fa fa-angle-down"></span>
                                </a>
                                <ul className="dropdown-menu dropdown-usermenu purple pull-right">
                                    <li><a href="#">  Profile</a></li>
                                    <li>
                                        <a href="#">
                                            <span className="badge bg-danger pull-right">lvl40</span>
                                            <span>Level</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span className="label bg-info pull-right">new</span>
                                            Help
                                        </a>
                                    </li>
                                    <li><a href="#"><i className="fa fa-sign-out pull-right"></i> Log Out</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
		);
	}

	componentDidMount(){
		jQuery('.menu-list > a').click(function() {
	      var parent = jQuery(this).parent();
	      var sub = parent.find('> ul');
	      
	      if(!jQuery('body').hasClass('sidebar-collapsed')) {
	         if(sub.is(':visible')) {
	            sub.slideUp(300, function(){
	               parent.removeClass('nav-active');
	               jQuery('.body-content').css({height: ''});
	               adjustMainContentHeight();
	            });
	         } else {
	            visibleSubMenuClose();
	            parent.addClass('nav-active');
	            sub.slideDown(300, function(){
	                adjustMainContentHeight();
	            });
	         }
	      }
	      return false;
	   });

	   function visibleSubMenuClose() {

	      jQuery('.menu-list').each(function() {
	         var t = jQuery(this);
	         if(t.hasClass('nav-active')) {
	            t.find('> ul').slideUp(300, function(){
	               t.removeClass('nav-active');
	            });
	         }
	      });
	   }

	   function adjustMainContentHeight() {

	      // Adjust main content height
	      var docHeight = jQuery(document).height();
	      if(docHeight > jQuery('.body-content').height())
	         jQuery('.body-content').height(docHeight);
	   }

	   // add class mouse hover

	   jQuery('.side-navigation > li').hover(function(){
	      jQuery(this).addClass('nav-hover');
	   }, function(){
	      jQuery(this).removeClass('nav-hover');
	   });


	   // Toggle Menu

	   jQuery('.toggle-btn').click(function(){

	      var body = jQuery('body');
	      var bodyposition = body.css('position');

	      if(bodyposition != 'relative') {

	         if(!body.hasClass('sidebar-collapsed')) {
	            body.addClass('sidebar-collapsed');
	            jQuery('.side-navigation ul').attr('style','');

	         } else {
	            body.removeClass('sidebar-collapsed chat-view');
	            jQuery('.side-navigation li.active ul').css({display: 'block'});

	         }
	      } else {

	         if(body.hasClass('sidebar-open'))
	            body.removeClass('sidebar-open');
	         else
	            body.addClass('sidebar-open');

	         adjustMainContentHeight();
	      }

	       var owl = $("#news-feed").data("owlCarousel");
	       owl.reinit();

	   });
	   

	   searchform_reposition();

	   jQuery(window).resize(function(){

	      if(jQuery('body').css('position') == 'relative') {

	         jQuery('body').removeClass('sidebar-collapsed');

	      } else {

	         jQuery('body').css({left: '', marginRight: ''});
	      }

	      searchform_reposition();

	   });

	   function searchform_reposition() {
	      if(jQuery('.search-content').css('position') == 'relative') {
	         jQuery('.search-content').insertBefore('.sidebar-left-info .search-field');
	      } else {
	         jQuery('.search-content').insertAfter('.right-notification');
	      }
	   }
	}
};


export default Header;