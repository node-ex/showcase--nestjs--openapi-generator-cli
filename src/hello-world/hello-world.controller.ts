import { HelloWorldService } from '@/hello-world/hello-world.service';
import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('hello-world')
@Controller({
  path: 'hello-world',
})
export class HelloWorldController {
  constructor(private readonly helloWorldService: HelloWorldService) {}

  @ApiOperation({
    summary: 'Get a greeting message',
    description: 'Get a greeting message',
  })
  @ApiResponse({
    status: 200,
    description: 'Returns a greeting message',
    // type: String,
    schema: {
      example: 'Hello, world!',
      type: 'string',
    },
  })
  @Get()
  greet(): string {
    return this.helloWorldService.getGreeting();
  }
}
