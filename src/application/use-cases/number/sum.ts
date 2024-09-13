import { INumberService } from '@helpers/services/number-service';
import { Injectable } from '@nestjs/common';

interface SumRequest {
    a: number;
    b: number;
}

interface SumResponse {
    result: number;
}

@Injectable()
export class SumNumber {
    constructor(
        private readonly numberService: INumberService,
    ) {}

    async execute(request: SumRequest): Promise<SumResponse> {
        const { a, b } = request;
        const sum = await this.numberService.sum(a, b);

        return { result: sum };
    }
}
