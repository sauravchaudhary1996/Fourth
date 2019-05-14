import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../../app.component';
//import { UserService } from '../../service/user/user.service';
// import { AppconfigService } from '../../service/appconfig/appconfig.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  getUserInfo: any = {};
  userInfo: any;
  hourInMilliSeconds: any;

  constructor(
    private router: Router,
    private appcomponent: AppComponent
    //private userservice: UserService
    // private appconfigservice: AppconfigService
  ) {
    //this.appcomponent.getuserinfo.subscribe(name => {
    //  this.getUserInfo = name;
    //});
    //this.hourInMilliSeconds = 2*60*60*1000;
  }

  ngOnInit() { 
    /*  this.sessionTimeLogout();
    document.onmousemove = () => { this.sessionTimeLogout(); };
    document.onmousedown = () => { this.sessionTimeLogout(); };
    document.onkeypress = () => { this.sessionTimeLogout(); };  */
  }

  logOut(event) {
    sessionStorage.clear();
    //this.userservice.clearUserInfo();
    // this.appconfigservice.clearUserProperty();
    window.location.hash = '';
    window.top.close();
    //window.location.pathname = 'appraisal/login';
  }

   /* sessionTimeLogout() {
    setTimeout(() => {
      this.logOut(event);
    }, this.hourInMilliSeconds);
  }  */

}
