import { Component } from '@angular/core';
import { Service } from '../../service-data/service';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-class-code',
  imports: [CommonModule, FormsModule],
  templateUrl: './class-code.html',
  styleUrl: './class-code.css',
})
export class ClassCode {
  constructor(private router: Router, private dep: Service) {}

  logindata = {
    classCode: '',
  };

  submit() {
    this.dep.joinclass(this.logindata).subscribe({
      next: (res: any) => {
        if (res.statuscode === 404) {
          alert('Your code is wrong');
          return;
        }
        console.log(res);
        this.logindata.classCode=''
      },
      error: (err) => {
        if (err.status === 404) {
          alert('Your code is wrong');
        }
      },
    });
  }
}
