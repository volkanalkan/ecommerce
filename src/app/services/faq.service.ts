import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FAQ } from '../models/faq.model';

@Injectable({
  providedIn: 'root',
})
export class FAQService {
  private apiUrl = 'http://localhost:3000/faq';

  constructor(private http: HttpClient) {}

  getFAQs(): Observable<FAQ[]> {
    return this.http.get<FAQ[]>(this.apiUrl);
  }
}
