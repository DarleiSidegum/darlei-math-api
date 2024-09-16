import { Controller } from '@nestjs/common';
import {
    Body,
    Post,
} from '@nestjs/common/decorators';
import {
    ApiExtraModels,
    ApiOperation,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';
import { ApiResponseType } from '@infra/common/swagger/response.decorator';
import { SumNumbers } from '@application/use-cases/numbers/sum';
import { NumbersBody } from '../dtos/numbers-body';
import { AverageNumbers } from '@application/use-cases/numbers/average';
import { ResultViewModel } from '../view-models/result-view-model';

@Controller('numbers')
@ApiTags('numbers')
@ApiResponse({ status: 500, description: 'Internal error' })
@ApiExtraModels(ResultViewModel)
export class NumbersController {
    constructor(
        private _sumNumbers: SumNumbers,
        private _averageNumbers: AverageNumbers,
    ) {}

    @ApiOperation({ summary: 'Sum Numbers' })
    @Post('sum')
    @ApiResponseType(ResultViewModel)
    async sumNumbers(@Body() body: NumbersBody) {
        const { result } = await this._sumNumbers.execute(body);
        return new ResultViewModel(result);
    }

    @ApiOperation({ summary: 'Average Numbers' })
    @Post('average')
    @ApiResponseType(ResultViewModel)
    async averageNumbers(@Body() body: NumbersBody) {
        const { result } = await this._averageNumbers.execute(body);
        return new ResultViewModel(result);
    }
}
