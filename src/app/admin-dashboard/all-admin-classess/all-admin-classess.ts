import { Component } from '@angular/core';
import { Service } from '../../service-data/service';
import { Classdata, ClassesResponsedata } from '../../interface/admin-classess';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-all-admin-classess',
  imports: [CommonModule, FormsModule,RouterLink],
  templateUrl: './all-admin-classess.html',
  styleUrl: './all-admin-classess.css',
})
export class AllAdminClassess {
  constructor(private dep: Service) {}

  joinclassdata: Classdata[] = [];
  selectedClass: Classdata | null = null; // For editing

  ngOnInit(): void {
    this.allclassesdata();
  }

  allclassesdata() {
    this.dep.adminclassess().subscribe((res: ClassesResponsedata) => {
      this.joinclassdata = res.message;
    });
  }

  // Open edit modal
  editClass(c: Classdata) {
    this.selectedClass = { ...c }; // clone object to avoid immediate table update
  }

  // Close modal
  closeModal() {
    this.selectedClass = null;
  }

  // Update class
  updateClass() {
    if (this.selectedClass) {
      this.dep.admineditclass(this.selectedClass._id, {
        ClassName: this.selectedClass.ClassName,
        Subject: this.selectedClass.Subject
      }).subscribe({
        next: (res) => {
          // Update local data after success
          const index = this.joinclassdata.findIndex(c => c._id === this.selectedClass!._id);
          if (index !== -1) {
            this.joinclassdata[index] = { ...this.selectedClass! };
          }
          this.closeModal();
        },
        error: (err) => {
          console.error(err);
        }
      });
    }
  }





deleteclass(id: string) {
  const confirmed = confirm("Are you sure you want to delete this class?");
  if (!confirmed) return; // If user cancels, do nothing

  this.dep.deleteClass(id).subscribe({
    next: (res) => {
      console.log(res);
      // Remove deleted class from local array
      this.joinclassdata = this.joinclassdata.filter(c => c._id !== id);
    },
    error: (err) => {
      alert(err.message);
    }
  });
}












}
