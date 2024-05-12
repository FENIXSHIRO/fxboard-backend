import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Board } from 'src/schemas/Board.schema';
import { Item } from 'src/schemas/Item.schema';
import { BoardsService } from './boards.service';

@Controller('boards')
export class BoardsController {
  constructor(private readonly boardsService: BoardsService) {}

  @Get('all')
  getAllBoards() {
    return this.boardsService.getAllBoards();
  }

  @Get('byUser/:userId')
  async getBoardsForUser(@Param('userId') userId: string): Promise<Board[]> {
    return this.boardsService.getBoardsForUser(userId);
  }

  @Get(':boardId/items')
  async getItemsForBoard(@Param('boardId') boardId: string): Promise<Item[]> {
    const items = await this.boardsService.getItemsForBoard(boardId);
    if (!items) {
      throw new NotFoundException('Board not found');
    }
    return items;
  }

  @Post(':userId/create')
  async createBoard(
    @Param('userId') userId: string,
    @Body('name') name: string,
  ): Promise<Board> {
    return this.boardsService.createBoard(name, userId);
  }

  @Post(':boardId/items/add')
  async addItemToBoard(
    @Param('boardId') boardId: string,
    @Body() itemData: any,
  ): Promise<Board> {
    return this.boardsService.addItemToBoard(boardId, itemData);
  }

  @Patch(':boardId/items')
  async updateBoardItems(
    @Param('boardId') boardId: string,
    @Body() itemData: any,
  ) {
    return this.boardsService.updateBoardItems(boardId, itemData);
  }

  @Delete(':boardId/items/:itemId')
  async deleteitemFromBoard(
    @Param('boardId') boardId: string,
    @Param('itemId') itemId: string,
  ): Promise<Board> {
    return this.boardsService.deleteitemFromBoard(boardId, itemId);
  }
}
