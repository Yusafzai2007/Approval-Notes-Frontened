import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Service } from '../../service-data/service';
import { Student, StudentsResponse } from '../../interface/viewStudent';

@Component({
  selector: 'app-view-students',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './view-students.html',
  styleUrls: ['./view-students.css'],
})
export class ViewStudents implements OnInit {
  joinclassdata: Student[] = [];
  private active = inject(ActivatedRoute);
  private dep = inject(Service);  // <-- safer in Angular 18 standalone
viewNotes(student: Student) {
  console.log('View notes for:', student);
  // Yahan se tum modal open kar sakte ho ya alag route pe navigate
}

  ngOnInit(): void {
    const classId = this.active.snapshot.paramMap.get('classId');
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
