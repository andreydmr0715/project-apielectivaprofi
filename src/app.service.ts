import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World, mi primera llamada a un método get';
  }
  despedir(): string {
    return 'chao';
  }
  despedirconpost(): string {
    return 'chao con post';
  }
}
