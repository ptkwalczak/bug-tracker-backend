import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Patch,
  Post
} from '@nestjs/common';
import { AppController } from '../app.controller';
import { BugsService } from './bugs.service';
import { Bug, BugState } from './create-bug.dto';

@Controller('bugs')
export class BugsController {
  private readonly logger = new Logger(AppController.name);

  constructor(private readonly bugsService: BugsService) {}

  @Get()
  getAllBugs(): any {
    this.logger.debug('Getting all bugs');
    return this.bugsService.findAll();
  }
  @Post()
  addBug(
    @Body('title') bugTitle: string,
    @Body('description') bugDescription: string,
  ): any {
    this.logger.debug(`Adding bug ${bugTitle}`);
    return this.bugsService.create(bugTitle, bugDescription);
  }

  @Get(':id')
  getBugById(@Param('id') bugId: string): any {
    this.logger.debug(`Getting bug by id: ${bugId}`);
    return this.bugsService.findOne(bugId);
  }

  @Delete(':id')
  deleteBugById(@Param('id') bugId: string): any {
    this.logger.debug(`Deleting bug by id: ${bugId}`);
    return this.bugsService.deleteById(bugId);
  }
  @Patch(':id')
  updateBugById(
    @Param('id') id: string,
    @Body() body: Bug
  ): any {
    this.logger.debug(`Updating bug by id: ${id} with body: ${JSON.stringify(body)}`);
    return this.bugsService.updateById(id, body);
  }
}
