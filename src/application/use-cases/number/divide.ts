import { INumberService } from '@helpers/services/number-service';
import { Injectable } from '@nestjs/common';

interface DivideRequest {
    a: number;
    b: number;
}

interface DivideResponse {
    result: number;
}

@Injectable()
export class DivideNumber {
    constructor(
        private readonly numberService: INumberService,
    ) {}

    async execute(request: DivideRequest): Promise<DivideResponse> {
        const { a, b } = request;
        const divide = await this.numberService.divide(a, b);

        return { result: divide };
    }
}
