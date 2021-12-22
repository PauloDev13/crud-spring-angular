import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { CoursesService } from '~/courses/services/courses.service';
import { ErrorDialogComponent } from '~/shared/components/error-dialog/error-dialog.component';

import { Courses } from '../models/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  courses$: Observable<Courses[]>;
  displayedColumns = ['name', 'category'];

  constructor(private coursesService: CoursesService, private dialog: MatDialog) {
    this.courses$ = coursesService.getAllCourses().pipe(
      catchError(() => {
        this.onError('Erro ao buscar cursos. Tente mais tarde.');
        return of([]);
      }),
    );
  }

  ngOnInit(): void {}

  onError(msgDialog: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: msgDialog,
    });
  }
}
