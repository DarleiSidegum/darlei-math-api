import { INumbersService } from '@helpers/services/numbers-service';
import { Injectable } from '@nestjs/common';

interface SumRequest {
    numbers: number[];
}

interface SumResponse {
    result: number;
}

@Injectable()
export class SumNumbers {
    constructor(
        private readonly numbersService: INumbersService,
    ) { }

    async execute(request: SumRequest): Promise<SumResponse> {
        const { numbers } = request;
        const sum = await this.numbersService.sum(numbers);
        return { result: sum };
    }
}
