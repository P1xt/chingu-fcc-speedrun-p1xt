import { Component, OnInit } from '@angular/core';
import { GetTwitchService } from '../../services/twitch.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-twitch-client',
  templateUrl: './twitch-client.component.html',
  styleUrls: ['./twitch-client.component.scss']
})
export class TwitchClientComponent implements OnInit {
  streamers = ["cinnamontoastken", "ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
  streamerData: any = [];
  selectedStreamers: any = [];

  constructor(private getTwitchService: GetTwitchService) { }

  ngOnInit() {
    this.getEntries();
  }
  getEntries() {
    this.streamerData = [];
    for (let streamer of this.streamers) {

      this.getTwitchService.getStreamer(streamer)
        .subscribe(data => {
          if (data.error === "Not Found") {
            this.streamerData.push({ 'display_name': streamer, 'found': false });
          } else {
            data['found'] = true;
            this.getTwitchService.getStream(streamer)
              .subscribe(stream => {
                if (stream.stream === null) {
                  data['status'] = 'offline';
                } else {
                  data['status'] = 'online';
                  data['stream_status'] = stream.status;
                }
                this.streamerData.push(data);
              })
          }
        })
    }
    this.selectedStreamers = this.streamerData;
  }
  pickAll() {
    this.selectedStreamers = this.streamerData;
  }
  pickOnline() {
    this.selectedStreamers = this.streamerData.filter(a => a.status === 'online');
  }
  pickOffline() {
    this.selectedStreamers = this.streamerData.filter(a => a.status === 'offline');
  }
}
