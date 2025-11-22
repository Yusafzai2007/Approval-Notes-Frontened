import { Component, inject } from '@angular/core';
import { Notesingle, NotesResponsesingle } from '../../interface/singleidnotes';
import { ActivatedRoute } from '@angular/router';
import { Service } from '../../service-data/service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-get-all-students',
  imports: [CommonModule, FormsModule],
  templateUrl: './get-all-students.html',
  styleUrl: './get-all-students.css',
})
export class GetAllStudents {
  joinclassdata: Notesingle[] = [];
  private active = inject(ActivatedRoute);
  private dep = inject(Service);

  ngOnInit(): void {
    const classId = this.active.snapshot.paramMap.get('studentId');
    console.log('Class ID:', classId);

    if (classId) {
      this.dep.getsingleidnotes(classId).subscribe({
        next: (res: NotesResponsesingle) => {
          // Filter out rejected notes
          this.joinclassdata = res.message.filter(note => note.status !== 'rejected');
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
