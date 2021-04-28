import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post
} from '@nestjs/common';
import { BugsService } from './bugs.service';
import { BugState } from './create-bug.dto';

@Controller('bugs')
export class BugsController {
  constructor(private readonly bugsService: BugsService) {}

  @Get()
  getAllBugs(): any {
    return this.bugsService.findAll();
  }
  @Post()
  addBug(
    @Body('title') bugTitle: string,
    @Body('description') bugDescription: string,
  ): any {
    return this.bugsService.create(bugTitle, bugDescription);
  }

  @Get(':id')
  getBugById(@Param('id') bugId: string): any {
    return this.bugsService.findOne(bugId);
  }

  @Delete(':id')
  deleteBugById(@Param('id') todoId: string): any {
    return this.bugsService.deleteById(todoId);
  }
  @Patch(':id')
  updateBugById(
    @Param('id') id: string,
    @Body('title') title: string,
    @Body('description') description: string,
    @Body('state') state: BugState,
  ): any {
    return this.bugsService.updateById(id, title, description, state);
  }
}
