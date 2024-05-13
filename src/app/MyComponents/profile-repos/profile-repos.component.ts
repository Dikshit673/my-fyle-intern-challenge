import { Component, Input, OnInit } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-profile-repos',
  templateUrl: './profile-repos.component.html',
  styleUrl: './profile-repos.component.scss'
})
export class ProfileReposComponent implements OnInit {
  @Input() reposApi: any;
  p: number = 1;
  totalRepo: number = 10;

  constructor() { }

  ngOnInit() { }

  mySelectbox(event: any) {
    // console.log(event.target.value);
    this.totalRepo = event.target.value;
  }
}
