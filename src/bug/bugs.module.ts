import { Module } from '@nestjs/common';
import { BugsController } from './bugs.controllers';
import { BugsService } from './bugs.service';

@Module({
  controllers: [BugsController],
  providers: [BugsService],
})
export class BugsModule {}
