import { Component, OnInit, AfterViewInit } from '@angular/core';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  properties:any;
  constructor(private _HomeService: HomeService) { }

  ngOnInit() {
    this._HomeService.fetchProperties().subscribe((res)=>{
      this.properties = res.properties;
      this.loadScript('../assets/js/main.js');
    })
  }

  ngAfterViewInit(){
    

  }
  
 
  public loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }

}

