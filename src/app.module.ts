import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { UserModuleModule } from './user-module/user-module.module';
import { AuthControllerController } from './auth-controller/auth-controller.controller';
import { AuthServiceService } from './auth-service/auth-service.service';
import { DatabaseModuleModule } from './database-module/database-module.module';
import { UserControllerController } from './user-controller/user-controller.controller';
import { UserServiceService } from './user-service/user-service.service';

@Module({
  imports: [UsersModule, UserModuleModule, DatabaseModuleModule],
  controllers: [AppController, AuthControllerController, UserControllerController],
  providers: [AppService, AuthServiceService, UserServiceService],
})
export class AppModule {}
