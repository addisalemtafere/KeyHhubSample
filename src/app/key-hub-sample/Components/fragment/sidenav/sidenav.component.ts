import {Component, NgZone, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {MatSidenav} from '@angular/material';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  private mediaMatcher: MediaQueryList =
    matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`);


  isDarkTheme = false;
  dir = 'ltr';

  constructor(
    zone: NgZone,
    private router: Router) {
    this.mediaMatcher.addListener(mql =>
      zone.run(() => this.mediaMatcher = mql));
  }

  @ViewChild(MatSidenav) sidenav: MatSidenav;

  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme;
  }

  toggleDir() {
    this.sidenav.toggle().then(() => this.sidenav.toggle());
  }

  ngOnInit() {

    this.router.events.subscribe(() => {
      if (this.isScreenSmall()) {
        this.sidenav.close();
      }
    });
  }

  isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }

}
