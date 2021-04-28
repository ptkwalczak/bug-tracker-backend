import { Injectable, NotFoundException } from '@nestjs/common';
import { generate } from 'shortid';
import { Bug, BugState } from './create-bug.dto';
@Injectable()
export class BugsService {
  private bugsDb: Bug[] = [];
  findAll(): any {
    return [...this.bugsDb];
  }
  create(title: string, description: string): any {
    const id = generate();
    const newBug = new Bug(id, title, description, 'opened');
    this.bugsDb = this.bugsDb.concat(newBug);
    return newBug;
  }
  findOne(id: string): any {
    const bugIndex = this.bugsDb.find(elem => elem.id === id);
    if (bugIndex === undefined) {
      throw new NotFoundException();
    }
    return bugIndex;
  }
  deleteById(id: string): any {
    const index = this.bugsDb.findIndex(elem => elem.id === id);
    if (index === -1) {
      throw new NotFoundException();
    }
    this.bugsDb.splice(index);
    return { message: 'Bug Deleted' };
  }
  updateById(id: string, updatedBug: Bug): any {
    const index = this.bugsDb.findIndex(elem => elem.id === id);
    if (index === -1) {
      throw new NotFoundException();
    }
    const bugToUpdate = this.bugsDb[index];
    if (updatedBug.title) {
      bugToUpdate.title = updatedBug.title;
    }
    if (updatedBug.description) {
      bugToUpdate.description = updatedBug.description;
    }
    if (updatedBug.state) {
      bugToUpdate.state = updatedBug.state;
    }

    this.bugsDb[index] = bugToUpdate;
    return { message: 'Bug updated' };
  }
}
