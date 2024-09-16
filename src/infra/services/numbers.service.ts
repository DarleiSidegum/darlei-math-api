import { INumberService } from '@helpers/services/number-service';
import { INumbersService } from '@helpers/services/numbers-service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NumbersService implements INumbersService {
    constructor(
        private readonly numberService: INumberService
    ) {}

    async sum(numbers: number[]): Promise<number> {
        let total = 0;
        for (const num of numbers) {
            total = await this.numberService.sum(total, num);
        }
        return total;
    }

    async average(numbers: number[]): Promise<number> {
        const total = await this.sum(numbers);
        return await this.numberService.divide(total, numbers.length);
    }
}
