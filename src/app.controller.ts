import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  despedir(): string {
    return this.appService.despedir();
  }
  postdespedir(): string {
    return this.appService.despedirconpost();
  }
}
