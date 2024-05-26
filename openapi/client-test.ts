import { Configuration, HelloWorldApi } from './client-sdk/dist';

async function main() {
  const configuration = new Configuration({
    basePath: 'http://localhost:3000',
  });
  const api = new HelloWorldApi(configuration);
  const response = await api.helloWorldControllerGreet();
  console.log(response);
}

void main();
