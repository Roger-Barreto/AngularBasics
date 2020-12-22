import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CoursesService } from './courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses: any[];
  page: number;

  constructor(
    private _coursesService: CoursesService,
    private _activatedRoute: ActivatedRoute
  ) {
    this.courses = [];
    this.page = 1;
  }

  ngOnInit(): void {
    this.courses = this._coursesService.getCourses();

    this._activatedRoute.queryParams.subscribe(
      (queryParams: any) => {
        this.page = queryParams ['page'];
      }
    )
  }

}
