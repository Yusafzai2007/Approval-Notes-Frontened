import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-class',
  imports: [CommonModule,FormsModule],
  templateUrl: './class.html',
  styleUrl: './class.css',
})
export class Class {

  formdata = {
    ClassName: '',
    Subject: '',
  };

  successMessage: string = '';
  errorMessage: string = '';

  constructor(private http: HttpClient) {}

  submitForm() {
    if (this.formdata.ClassName && this.formdata.Subject ) {
      this.http.post(
        'http://localhost:4000/api/v1/class-create',
        this.formdata,
        { withCredentials: true } // ✅ send cookies with request
      ).subscribe({
        next: (res: any) => {
          this.successMessage = "Class created successfully!";
          this.errorMessage = '';
          this.formdata = { ClassName: '', Subject: '',};
          console.log(res);
           // reset form
        },
        error: (err) => {
          this.errorMessage = err.error?.message || 'Something went wrong!';
          this.successMessage = '';
        }
      });
    } else {
      this.errorMessage = "Please fill all required fields!";
      this.successMessage = '';
    }
  }
}
