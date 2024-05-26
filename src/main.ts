import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/app.module';
import { SwaggerModule } from '@nestjs/swagger';
import { generateOpenApiDocument } from '@/core/utils/swagger.utils';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const document = generateOpenApiDocument(app);
  SwaggerModule.setup(
    'api',
    app,
    document,
    // https://swagger.io/docs/open-source-tools/swagger-ui/usage/configuration/
    { explorer: true, swaggerOptions: { showCommonExtensions: true } },
    /**
     * Documentation for Swagger plugin options in `nest-cli.json`
     * https://docs.nestjs.com/openapi/cli-plugin
     *
     * Swagger integration example
     * https://github.com/nestjs/nest/tree/master/sample/11-swagger
     */
  );

  await app.listen(3000);
}

void bootstrap();
