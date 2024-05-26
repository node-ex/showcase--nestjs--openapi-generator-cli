import {
  SwaggerModule,
  DocumentBuilder,
  SwaggerDocumentOptions,
} from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

export function generateOpenApiDocument(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('App')
    .setDescription('App API description')
    .addTag('app')
    .setVersion('1.0')
    .build();
  const options: SwaggerDocumentOptions = {};
  const document = SwaggerModule.createDocument(app, config, options);

  return document;
}
