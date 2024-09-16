import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class NumbersBody {
    @ApiProperty({ required: true, type: [Number] })
    @IsNotEmpty()
    numbers: number[];
}
