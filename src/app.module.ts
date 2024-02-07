import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { UserModuleModule } from './user-module/user-module.module';
import { AuthControllerController } from './auth-controller/auth-controller.controller';

@Module({
  imports: [UsersModule, UserModuleModule],
  controllers: [AppController, AuthControllerController],
  providers: [AppService],
})
export class AppModule {}
