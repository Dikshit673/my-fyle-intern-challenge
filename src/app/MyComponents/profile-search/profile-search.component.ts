import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-profile-search',
  templateUrl: './profile-search.component.html',
  styleUrl: './profile-search.component.scss'
})
export class ProfileSearchComponent implements OnInit {

  @Output() usernameEntered = new EventEmitter<string>();
  username: string = '';

  ngOnInit(): void { }

  onUsernameSubmit() {
    this.usernameEntered.emit(this.username);
  }

}
