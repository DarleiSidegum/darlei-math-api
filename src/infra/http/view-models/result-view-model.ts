import { ApiProperty } from '@nestjs/swagger';

export class ResultViewModel {
    @ApiProperty({type: Number})
    result: number;

    constructor(result: number) {
        this.result = result;
    }
}
