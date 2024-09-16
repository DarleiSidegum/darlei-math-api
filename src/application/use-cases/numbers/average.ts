import { INumbersService } from '@helpers/services/numbers-service';
import { Injectable } from '@nestjs/common';

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
    ) { }

    async execute(request: AverageRequest): Promise<AverageResponse> {
        const { numbers } = request;
        const average = await this.numbersService.average(numbers);
        return { result: average };
    }
}
