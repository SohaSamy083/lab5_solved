import { Component, OnDestroy, OnInit } from '@angular/core';
import { NotificationService } from '../../services/notification.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit,OnDestroy{
  subscribtion!:Subscription
  constructor(private _notifications:NotificationService){

  }

  ngOnInit() {
   
  this.subscribtion=this._notifications.getNotifications().subscribe({
      next:(notification)=>{
        console.log(notification)
      },
      error:(err)=>{
        console.log(err)
      },
      complete:()=>{
        alert("No more notifications");
      }
    })
  }
  ngOnDestroy(){
    this.subscribtion.unsubscribe()
  }
}
