import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { AccountServiceService } from '../../services/account-service.service';

@Component({
  selector: 'app-aproved',
  templateUrl: './aproved.component.html',
  styleUrl: './aproved.component.css'
})
export class AprovedComponent {
  constructor(
    private authService: AuthService,
    private accountService: AccountServiceService
  ) {}

  ngOnInit(): void {
    this.authService.createSession().subscribe((response) => {
      localStorage.setItem('session_id', response.session_id);
      this.accountService.getAccountDetails().subscribe((response) => {
        localStorage.setItem('user_name', response.name);
        localStorage.setItem('user_photo', response.avatar.tmdb.avatar_path);
        localStorage.setItem('logged_in', 'true');

        window.location.href = 'http://localhost:4200/home';
      });
    });
  }
}
