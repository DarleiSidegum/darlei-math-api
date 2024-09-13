import { Module } from '@nestjs/common';
import { HttpModule } from './infra/http/http.module';
import { INumberService } from '@helpers/services/number-service';
import { NumberService } from '@infra/services/number.service';
import { INumbersService } from '@helpers/services/numbers-service';
import { NumbersService } from '@infra/services/numbers.service';

@Module({
    imports: [
        HttpModule,
    ],
    providers: [
        {
            provide: INumberService,
            useClass: NumberService,
        },
        {
            provide: INumbersService,
            useClass: NumbersService,
        },
    ],
    exports: [
        INumberService,
        INumbersService,
    ],
})
export class AppModule {
}
