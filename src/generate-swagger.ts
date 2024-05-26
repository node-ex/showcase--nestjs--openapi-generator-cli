import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/app.module';
import fs from 'fs';
import path from 'path';
import { generateOpenApiDocument } from '@/core/utils/swagger.utils';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const document = generateOpenApiDocument(app);

  // Get root path
  const rootPath = process.cwd();
  const openApiSpecPath = path.join(rootPath, 'openapi', 'spec');
  const openApiJsonPath = path.join(openApiSpecPath, 'openapi.json');

  if (!fs.existsSync(openApiSpecPath)) {
    fs.mkdirSync(openApiSpecPath);
  }
  fs.writeFileSync(openApiJsonPath, JSON.stringify(document));

  console.log('OpenAPI JSON file created');
}

void bootstrap();
