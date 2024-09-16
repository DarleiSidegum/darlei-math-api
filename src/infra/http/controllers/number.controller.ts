import { SumNumber } from '@application/use-cases/number/sum';
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
import { NumberBody } from '../dtos/number-body';
import { DivideNumber } from '@application/use-cases/number/divide';
import { ApiResponseType } from '@infra/common/swagger/response.decorator';
import { ResultViewModel } from '../view-models/result-view-model';

@Controller('number')
@ApiTags('number')
@ApiResponse({ status: 500, description: 'Internal error' })
@ApiExtraModels(ResultViewModel)
export class NumberController {
    constructor(
        private _sumNumber: SumNumber,
        private _divideNumber: DivideNumber,
    ) {}

    @ApiOperation({ summary: 'Sum Number' })
    @Post('sum')
    @ApiResponseType(ResultViewModel)
    async sumNumber(@Body() body: NumberBody) {
        const { result } = await this._sumNumber.execute(body);
        return new ResultViewModel(result);
    }

    @ApiOperation({ summary: 'Divide Number' })
    @Post('divide')
    @ApiResponseType(ResultViewModel)
    async divide(@Body() body: NumberBody) {
        const { result } = await this._divideNumber.execute(body);
        return new ResultViewModel(result);
    }
}
