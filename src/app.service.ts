import { Injectable } from '@nestjs/common';
import { AmplitudeService } from 'nestjs-amplitude';

@Injectable()
export class AppService {
  constructor(private readonly amplitudeService: AmplitudeService) {}
  getHello(): string {
    this.amplitudeService.logEvent({
      event_type: 'Node.js Event',
      user_id: 'datamonster@gmail.com',
      location_lat: 37.77,
      location_lng: -122.39,
      ip: '127.0.0.1',
      event_properties: {
        keyString: 'valueString',
        keyInt: 11,
        keyBool: true,
      },
    });
    return 'Hello World!';
  }
}
