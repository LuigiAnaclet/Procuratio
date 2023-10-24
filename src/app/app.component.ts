import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  currentTime: string | undefined;
  private timeInterval: any;

  ngOnInit() {
    this.updateTime();
    // Update the time every second
    this.timeInterval = setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  updateTime() {
    const date = new Date();
    this.currentTime = `${this.pad(date.getHours())}:${this.pad(date.getMinutes())}`;
  }

  pad(number: number): string {
    return number < 10 ? '0' + number : number.toString();
  }

  ngOnDestroy() {
    if (this.timeInterval) {
      clearInterval(this.timeInterval);
    }
  }
}
