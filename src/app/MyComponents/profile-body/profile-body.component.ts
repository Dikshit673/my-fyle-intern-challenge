import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-body',
  templateUrl: './profile-body.component.html',
  styleUrl: './profile-body.component.scss'
})
export class ProfileBodyComponent implements OnInit {
  @Input() herosApi: any;
  @Input() reposApi: any;

  ngOnInit(): void { }
}
