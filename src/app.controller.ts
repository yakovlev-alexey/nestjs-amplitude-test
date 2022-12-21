import { Controller, Get } from '@nestjs/common';
import { AmplitudeService } from 'nestjs-amplitude';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly amplitudeService: AmplitudeService,
  ) {}

  @Get()
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
    return this.appService.getHello();
  }
}
