import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileHerosComponent } from './profile-heros.component';

describe('ProfileHerosComponent', () => {
  let component: ProfileHerosComponent;
  let fixture: ComponentFixture<ProfileHerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileHerosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileHerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
