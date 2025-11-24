import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CurrentUserdata, CurrentUserResponsedata } from '../../interface/login';
import { Service } from '../../service-data/service';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet],
  templateUrl: './sidebar.html',
  styleUrls: ['./sidebar.css'],
})
export class Sidebar implements OnInit {
  isSidebarOpen = true;
  screenWidth = window.innerWidth;
  isMobileView = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.screenWidth = (event.target as Window).innerWidth;
    this.checkScreen();
  }

  constructor(private route: Router, private dep: Service) {
    this.checkScreen();
  }

  checkScreen() {
    this.isMobileView = this.screenWidth < 1024;
    this.isSidebarOpen = !this.isMobileView;
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  ngOnInit(): void {
    this.fetchCurrentUser();
  }

  currentUserData: CurrentUserdata | null = null;

  fetchCurrentUser() {
    this.dep.currentuserlogin().subscribe((res: CurrentUserResponsedata) => {
      this.currentUserData = res.message;
    });
  }

  logoutdata() {
    this.dep.logout().subscribe({
      next: (res) => {
        console.log(res);
        this.route.navigateByUrl('');
      },
    });
  }
}
