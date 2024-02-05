import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {
  private powerConsumption: number = 10;
  constructor(private powerService: PowerService) {}
  compute(num1: number, num2: number) {
    this.powerService.supplyPower(this.powerConsumption);
    console.log(
      `Drawing ${this.powerConsumption} watts of power from power service`,
    );
    return num1 + num2;
  }
}
