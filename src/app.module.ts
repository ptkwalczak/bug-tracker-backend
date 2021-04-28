import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BugsModule } from './bug/bugs.module';
@Module({
  imports: [BugsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
