import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ENVLINKS } from 'src/environments/environment';
import { APIService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private apiService: APIService) { }

  register(data: any) {
    debugger;
    return this.apiService.postData(ENVLINKS.ENDPOINT, data);
  }
}
