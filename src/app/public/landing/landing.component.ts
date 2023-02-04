import { Video } from './../../models/video';
import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  private refreshTime=1800000;
  private disableReload:boolean=false;
  public command:string;
  videoList: Video[] = [];
  constructor(private http: HttpClient,) {
    this.http.get('https://raw.githubusercontent.com/creativeIssue/data/main/video-list.js').subscribe((list: []) => {
      console.log("list", list)
      list?.forEach(link => {
        this.videoList.push(new Video(link))
      })
    })

  }

  ngOnInit() {

    // setInterval(() => {
    //   if(!this.disableReload)
    //   window.location.reload();
    // }, this.refreshTime)
  }

  onValueChange(obj:any){
   const value:string=obj.value;
    console.log("value", value)
    this.command=value;
    if(value.indexOf("disableReload"))
    {
    this.disableReload=true
    }
    if(value.indexOf("newTime1"))
    {
     const time= value.split('-')[0];
     this.refreshTime=Number(time);
     console.log('time',time,this.refreshTime);
    }
  }
}




