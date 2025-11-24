import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Service } from '../../service-data/service';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login {
  logindata = {
    email: '',
    password: '',
  };

  constructor(private data: Service, private router: Router) {}
  socket: any;

  submit() {

  // 🔴 1. EMPTY FIELD VALIDATION
  if (!this.logindata.email || !this.logindata.password) {
    alert("Please fill in all fields");
    return;
  }

  this.data.userlogin(this.logindata).subscribe({
    next: (res: any) => {
      console.log(res);

      // 🔵 2. CHECK ROLE AND REDIRECT
      if (res.tourism.role === 'teacher') {
        // alert('Login successful as Teacher');
        this.router.navigateByUrl('class');
      } else {
        // alert('Login successful');
        this.router.navigateByUrl('admin/Add-Notes');
      }
    },

    error: (err) => {
      console.log(err);

      // 🔴 3. 404 ERROR → User Not Found
      if (err.status === 404) {
        alert("Please create a account");
      }

      // 🔴 4. Other backend errors (optional)
      else {
        alert("Login failed. Please try again.");
      }
    },
  });
}

}
