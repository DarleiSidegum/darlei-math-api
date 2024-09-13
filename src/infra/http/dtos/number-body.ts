import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class NumberBody {
    @ApiProperty({ required: true })
    @IsNotEmpty()
    a: number;

    @ApiProperty({ required: true })
    @IsNotEmpty()
    b: number;
}
