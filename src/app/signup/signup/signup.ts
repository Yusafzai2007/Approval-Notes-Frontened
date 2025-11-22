import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Service } from '../../service-data/service';

@Component({
  selector: 'app-signup',
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {
  constructor(private router: Router,private dep:Service) {}

  logindata = {
    userName: '',
    email: '',
    password: '',
    role: ''   
  };

 submit() {

  // 🔴 1. VALIDATION — EMPTY FIELDS
  if (!this.logindata.userName || 
      !this.logindata.email || 
      !this.logindata.password || 
      !this.logindata.role) 
  {
    alert("Please fill in all fields");
    return;
  }

  // 🔵 2. CALL SIGNUP API
  this.dep.usersignup(this.logindata).subscribe({
    next: (res) => {
      console.log(res);
      alert("Signup successful!");
      this.router.navigateByUrl(""); // login page
    },

    error: (err) => {
      console.log(err);

      // 🔴 3. 409 — EMAIL ALREADY EXISTS
      if (err.status === 409) {
        alert("Email already exists. Please use another email.");
      }

      // 🔴 4. Other errors
      else {
        alert("Signup failed. Please try again.");
      }
    }
  });
}

}
