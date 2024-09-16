import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class NumberBody {
    @ApiProperty({ required: true, type: Number })
    @IsNotEmpty()
    a: number;

    @ApiProperty({ required: true, type: Number })
    @IsNotEmpty()
    b: number;
}
