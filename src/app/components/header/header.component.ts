import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  isLogged!:boolean
  constructor(private _authentication: AuthenticationService) {}
  ngOnInit(): void {
    this._authentication.getAuthSubject().subscribe({
      next:(authStatus)=>{
        this.isLogged=authStatus;
      }
    })
  }

}
