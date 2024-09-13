import { INumbersService } from '@helpers/services/numbers-service';
import { Injectable } from '@nestjs/common';
import { SumNumbers } from './sum';

interface AverageRequest {
    numbers: number[];
}

interface AverageResponse {
    result: number;
}

@Injectable()
export class AverageNumbers {
    constructor(
        private readonly numbersService: INumbersService,
        private readonly sumNumbers: SumNumbers
    ) { }

    async execute(request: AverageRequest): Promise<AverageResponse> {
        const { numbers } = request;
        const average = await this.numbersService.average(numbers);
        return { result: average };
    }
}
