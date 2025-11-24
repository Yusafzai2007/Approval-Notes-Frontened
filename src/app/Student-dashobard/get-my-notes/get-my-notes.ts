import { Component, OnInit } from '@angular/core';
import { Notedataupload, NotesResponse } from '../../interface/classNotes';
import { Service } from '../../service-data/service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SafeUrlPipe } from '../../../pipes/safe-url.pipe';

@Component({
  selector: 'app-get-my-notes',
  standalone: true,
  imports: [CommonModule, FormsModule, SafeUrlPipe],
  templateUrl: './get-my-notes.html',
  styleUrls: ['./get-my-notes.css'],
})
export class GetMyNotes implements OnInit {
  mynotesdata: Notedataupload[] = [];
  editingNote: any = null;
  selectedFileForEdit: File | null = null;

  constructor(private dep: Service) {}

  ngOnInit(): void {
    this.notes();
  }

  notes() {
    this.dep.MyNotes().subscribe((res: NotesResponse) => {
      this.mynotesdata = res.message;
    });
  }

  // Open edit modal
  openEditModal(note: any) {
    let realId = note._id;
    if (realId && typeof realId === 'object' && realId.$oid) {
      realId = realId.$oid;
    }
    if (!realId) {
      console.error('Note _id is missing!', note);
      return;
    }
    this.editingNote = { ...note, _id: realId };
  }

  closeEditModal() {
    this.editingNote = null;
    this.selectedFileForEdit = null;
  }

  onFileSelected(event: any) {
    if (event.target.files.length > 0) {
      this.selectedFileForEdit = event.target.files[0];
    }
  }

  saveEdit() {
    const formData = new FormData();
    formData.append('title', this.editingNote.title);
    formData.append('description', this.editingNote.description);
    formData.append('className', this.editingNote.ClassName);

    if (this.selectedFileForEdit) {
      formData.append('file', this.selectedFileForEdit);
    }

    this.dep.editNotes(this.editingNote._id, formData).subscribe({
      next: () => {
        alert('Note updated successfully!');
        this.notes();
        this.closeEditModal();
      },
      error: (err) => {
        console.error(err);
        alert('Error updating note');
      },
    });
  }

  deleteNote(id: string) {
    if (!confirm('Are you sure you want to delete this note?')) return;

    this.dep.deletenotes(id, {}).subscribe({
      next: () => {
        alert('Note deleted successfully!');
        this.notes();
      },
      error: (err) => {
        console.error(err);
        alert('Error deleting note');
      },
    });
  }

  isPDF(url: string): boolean {
    if (!url) return false;
    return url.toLowerCase().endsWith('.pdf');
  }
}
