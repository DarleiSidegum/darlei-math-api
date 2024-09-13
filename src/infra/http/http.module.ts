import { SumNumber } from '@application/use-cases/number/sum';
import { Module } from '@nestjs/common';
import { NumberController } from './controllers/number.controller';
import { NumbersController } from './controllers/numbers.controller';
import { SumNumbers } from '@application/use-cases/numbers/sum';
import { AverageNumbers } from '@application/use-cases/numbers/average';
import { DivideNumber } from '@application/use-cases/number/divide';

const USE_CASES_NUMBER = [
    SumNumber,
    DivideNumber
];

const USE_CASES_NUMBERS = [
    SumNumbers,
    AverageNumbers
];


@Module({
    imports: [
    ],
    controllers: [
        NumberController,
        NumbersController
    ],
    providers: [
        ...USE_CASES_NUMBER,
        ...USE_CASES_NUMBERS
    ],
    exports: [],
})
export class HttpModule {}
