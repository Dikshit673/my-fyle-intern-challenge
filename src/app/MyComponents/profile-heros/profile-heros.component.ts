import { Component, Input, OnInit } from '@angular/core';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-profile-heros',
  templateUrl: './profile-heros.component.html',
  styleUrl: './profile-heros.component.scss'
})
export class ProfileHerosComponent implements OnInit {
  faLocationDot = faLocationDot;
  @Input() herosApi: any;

  ngOnInit(): void { }

}
