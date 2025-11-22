import { Component, inject, OnInit } from '@angular/core';
import { Notesingle, NotesResponsesingle } from '../../interface/singleidnotes';
import { ActivatedRoute } from '@angular/router';
import { Service } from '../../service-data/service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // for ngModel
import {  Notedataupload, NotesResponse } from '../../interface/classNotes';

@Component({
  selector: 'app-all-admin-student-notess',
  imports: [CommonModule, FormsModule],
  templateUrl: './all-admin-student-notess.html',
  styleUrls: ['./all-admin-student-notess.css'],
})
export class AllAdminStudentNotess implements OnInit {

  joinclassdata: Notedataupload[] = [];
  selectedStatus: { [key: string]: string } = {}; // selected status for each note
  modalNote: Notesingle | null = null; // Track the note being edited

  private active = inject(ActivatedRoute);
  private dep = inject(Service);
ngOnInit(): void {
  // Get both studentId and classId from route
  const studentId = this.active.snapshot.paramMap.get('studentId');
  const classId = this.active.snapshot.paramMap.get('classId');

  console.log('Student ID:', studentId);
  console.log('Class ID:', classId);

  if (studentId && classId) {
    // Call backend API
    this.dep.getUserByClass(studentId, classId).subscribe({
      next: (res: NotesResponse) => {
        this.joinclassdata = res.message;

        // Initialize selectedStatus for each note
        this.joinclassdata.forEach(note => {
          this.selectedStatus[note._id] = note.status;
        });
      },
      error: (err) => {
        console.error('API Error:', err);
      }
    });
  } else {
    console.error('Student ID or Class ID not found in route!');
  }
}


  // Open modal
  openModal(note: Notesingle) {
    this.modalNote = note;
    this.selectedStatus[note._id] = note.status; // set current status
  }

  // Close modal
  closeModal() {
    this.modalNote = null;
  }

  // Update note status
  updateStatus(noteId: string) {
    const status = this.selectedStatus[noteId];
    if (!status || !noteId) return;

    this.dep.editstatus({ status }, noteId).subscribe({
      next: (res: any) => {
        console.log('Status updated:', res);
        const note = this.joinclassdata.find(n => n._id === noteId);
        if (note) note.status = status;
        this.closeModal(); // close modal after update
      },
      error: (err) => {
        console.error('Failed to update status', err);
      }
    });
  }
}
