import { Injectable } from '@nestjs/common';
import { PowerService } from '../power/power.service';

@Injectable()
export class DiskService {
  private powerConsumption: number = 20;
  constructor(private powerService: PowerService) {}
  getData(): string {
    this.powerService.supplyPower(this.powerConsumption);
    console.log(
      `Drawing ${this.powerConsumption} watts of power from power service`,
    );
    return 'Data returned';
  }
}
