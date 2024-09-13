import { INumberService } from '@helpers/services/number-service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class NumberService implements INumberService {
    constructor() {}

    async sum(a: number, b: number): Promise<number> {
        return await Promise.resolve(a + b);
    }

    async divide(a: number, b: number): Promise<number> {
        if (b === 0) throw new Error('Cannot divide by zero');
        return await Promise.resolve(a / b);
    }
}
