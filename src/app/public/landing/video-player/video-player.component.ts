import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {
  @ViewChild('player') player: any;
  @Input() videoId;
  @Input() set command(value: any) {
    console.log("player", value)
    if (value == 'start01') {
      this.player.playVideo();
    }

    if (value == 'stop01') {
      this.player.stopVideo();
    }
  }


  constructor() { }

  ngOnInit(): void {

  }
  // Autoplay
  onReady() {

    // this.player.mute();
    // this.player.playVideo();
  }

  // Loop
  onStateChange(event) {
    if (event.data === 0) {
       this.player.playVideo();
    }
  }
}
