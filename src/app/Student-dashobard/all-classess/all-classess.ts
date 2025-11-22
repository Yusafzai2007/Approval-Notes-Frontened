import { Component, OnInit } from '@angular/core';
import { Service } from '../../service-data/service';
import { ClassInfo, JoinedClassesResponse } from '../../interface/all-classes';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-all-classess',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './all-classess.html',
  styleUrls: ['./all-classess.css'],
})
export class AllClassess implements OnInit {
  constructor(private dep: Service) {}

  joinclassdata: ClassInfo[] = [];

  ngOnInit(): void {
    this.allclassesdata();
  }

  allclassesdata() {
    this.dep.allClasses().subscribe((res: JoinedClassesResponse) => {
      this.joinclassdata = res.message;
    });
  }
}
