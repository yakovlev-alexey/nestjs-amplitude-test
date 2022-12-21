import { Module } from '@nestjs/common';
import { AmplitudeModule } from 'nestjs-amplitude';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    AmplitudeModule.registerAsync({
      imports: [],
      inject: [],
      useFactory: () => ({ apiKey: 'amplitude_api_key', debug: true }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
