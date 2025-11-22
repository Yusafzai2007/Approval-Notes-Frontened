import { Component, OnInit } from '@angular/core';
import { Service } from '../../service-data/service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClassInfo, JoinedClassesResponse } from '../../interface/all-classes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-notes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-notes.html',
  styleUrls: ['./add-notes.css'],
})
export class AddNotes implements OnInit {

  notedata = {
    title: "",
    description: "",
    file: null as any,
    className: "" // selected class
  };

  joinclassdata: ClassInfo[] = [];
  loading: boolean = false;

  constructor(private dep: Service, private router: Router) {}

  ngOnInit(): void {
    this.allclassesdata();
  }

  // Fetch joined classes
  allclassesdata() {
    this.dep.allClasses().subscribe((res: JoinedClassesResponse) => {
      this.joinclassdata = res.message;
      console.log("Joined classes:", this.joinclassdata);
    });
  }

  // File selection
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) this.notedata.file = file;
  }

  // Upload notes
  uploadNotes() {
    if (!this.notedata.className) {
      alert("Please select a class");
      return;
    }

    if (!this.notedata.file) {
      alert("Please select a file before uploading");
      return;
    }

    const formData = new FormData();
    formData.append("title", this.notedata.title);
    formData.append("description", this.notedata.description);
    formData.append("file", this.notedata.file);
    formData.append("className", this.notedata.className);

    // Debug: check FormData contents
    console.log("FormData entries:");
    formData.forEach((value, key) => console.log(key, value));

    this.loading = true;

    this.dep.uploadNotes(formData).subscribe({
      next: (res) => {
        console.log("Notes uploaded successfully:", res);
        alert("Notes uploaded successfully!");
        this.notedata = { title: "", description: "", file: null, className: "" };
        this.loading = false;
      },
      error: (err) => {
        console.error("Error uploading notes:", err);
        alert(err.error?.message || "Error uploading notes");
        this.loading = false;
      }
    });
  }

  // Navigate to join class page
  goToJoinClass() {
    this.router.navigate(['/join-class']);
  }

}
