import { INumbersService } from '@helpers/services/numbers-service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NumbersService implements INumbersService {
    constructor() {}

    sum(numbers: number[]): Promise<number> {
        throw new Error('Method not implemented.');
    }

    average(numbers: number[]): Promise<number> {
        throw new Error('Method not implemented.');
    }
}
