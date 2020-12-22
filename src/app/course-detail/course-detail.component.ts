import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { CoursesService } from './../courses/courses.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  id: number;
  course: any;

  constructor(private _router: Router, private route: ActivatedRoute, private _coursesService: CoursesService) {
    this.subscription = new Subscription();
    this.id = 0;
   }

  ngOnInit(): void {
     console.log(this.route);
     this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.id = params.id;
      }
      );
    this.course = this._coursesService.getCourse(this.id);

    if (this.course == null){
      this._router.navigate(['/notFound'])
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
