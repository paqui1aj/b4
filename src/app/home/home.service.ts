import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private _http: HttpClient) {

   }

  
  fetchProperties(filter='feature', start=0, total=4):Observable<any>{
    return Observable.create((observer:any)=>{
      return this._http.get('http://homebidplus_live.localhost/api/properties/list?filter=featured&start=0&total=4').subscribe((res:any)=>{
        console.log(res)
        observer.next(res);
        observer.complete();
      })
    })
  }
}
