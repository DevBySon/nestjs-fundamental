import { Inject, Injectable } from '@nestjs/common';
import { DevConfigService } from './common/providers/DevConfigService';

@Injectable()
export class AppService {
  constructor(
    private devConfigService: DevConfigService,
    @Inject('CONFIG') private config: string,
  ) {}

  getHello(): string {
    return `Hello World! ${this.devConfigService.getDBHOST()} at ${this.config}`;
  }
}
