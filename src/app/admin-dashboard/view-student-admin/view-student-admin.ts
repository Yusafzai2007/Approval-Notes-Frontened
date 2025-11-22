import { Component, inject } from '@angular/core';
import { Student, StudentsResponse } from '../../interface/viewStudent';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Service } from '../../service-data/service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-view-student-admin',
  imports: [CommonModule,FormsModule,RouterLink],
  templateUrl: './view-student-admin.html',
  styleUrl: './view-student-admin.css',
})
export class ViewStudentAdmin {

 joinclassdata: Student[] = [];
  private active = inject(ActivatedRoute);
  private dep = inject(Service);  // <-- safer in Angular 18 standalone
viewNotes(student: Student) {
  console.log('View notes for:', student);
  // Yahan se tum modal open kar sakte ho ya alag route pe navigate
}

  ngOnInit(): void {
    const classId = this.active.snapshot.paramMap.get('id');
    console.log('Class ID:', classId);

    if (classId) {
      this.dep.viewStudent(classId).subscribe({
        next: (res: StudentsResponse) => {
          this.joinclassdata = res.message;
        },
        error: (err) => {
          console.error('API Error:', err);
        },
      });
    } else {
      console.error('Class ID not found in route!');
    }
  }
}
