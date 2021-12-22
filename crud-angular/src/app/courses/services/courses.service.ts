import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first } from 'rxjs/operators';

import { Courses } from '~/courses/models/course';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private readonly BASE_URL = 'api/cursos';

  constructor(private httpClient: HttpClient) {}

  getAllCourses() {
    return this.httpClient.get<Courses[]>(this.BASE_URL).pipe(
      first(),
      // delay(1000),
      // tap((courses) => console.log(courses)),
    );
  }
}
