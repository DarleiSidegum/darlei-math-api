import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { useContainer } from 'class-validator';
import { ResponseFormat, ResponseInterceptor } from './infra/common/interceptors/response.interceptor';
import compression from 'compression';
import express from 'express';
import { ValidationPipe } from '@nestjs/common';
async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    useContainer(app.select(AppModule), { fallbackOnErrors: true });
    const config = new DocumentBuilder().setTitle('MATH API DARLEI').setDescription('MATH API').setVersion('1.0').build();
    const document = SwaggerModule.createDocument(app, config, {
        extraModels: [ResponseFormat],
        deepScanRoutes: true,
    });
    SwaggerModule.setup('api', app, document);
    app.use(compression());
    app.use(express.json({ limit: '50mb' }));
    app.use(express.urlencoded({ limit: '50mb', extended: true }));
    app.enableCors({
        credentials: true,
        origin: true,
        allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept'],
        exposedHeaders: [],
    });
    app.useGlobalPipes(new ValidationPipe());
    app.useGlobalInterceptors(new ResponseInterceptor());
    await app.listen(3000);
}
bootstrap();
