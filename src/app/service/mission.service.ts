import { Injectable } from '@angular/core';
import { Subject} from 'rxjs/Subject';

@Injectable()
export class MissionService {

    private missionAnnounced = new Subject<string>();
    private missionConfirmed = new Subject<string>();

    missionAnnounced$ = this.missionAnnounced.asObservable();
    missionConfirmed$ = this.missionConfirmed.asObservable();

    announceMission(mission: string) {
       this.missionAnnounced.next(mission);
    }

    confirmMission(astronaut: string) {
      this.missionConfirmed.next(astronaut);
    }


}
