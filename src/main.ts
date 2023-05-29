import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [
      'https://web-ft-mingame-6g2llf3p55qu.sel3.cloudtype.app/*',
      'http://localhost:3000/*',
    ],
    methods: ['GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS'],
    credentials: true,
  });

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(8080);
}
bootstrap();
