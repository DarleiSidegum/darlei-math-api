import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class NumbersBody {
    @ApiProperty({ required: true })
    @IsNotEmpty()
    numbers: number[];
}
