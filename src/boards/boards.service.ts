import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Board, BoardDocument } from 'src/schemas/board.schema';
import { Item, ItemDocument } from 'src/schemas/item.schema';

@Injectable()
export class BoardsService {
  constructor(
    @InjectModel(Board.name) private boardModel: Model<BoardDocument>,
    @InjectModel(Item.name) private itemModel: Model<ItemDocument>,
  ) {}

  getAllBoards() {
    return this.boardModel.find();
  }

  // Получение всех досок пользователя
  async getBoardsForUser(userId: string): Promise<Board[]> {
    return this.boardModel.find({ owner: userId }).populate('items').exec();
  }

  // Создание новой доски
  async createBoard(name: string, userId: string): Promise<Board> {
    const newBoard = new this.boardModel({ name, owner: userId, items: [] });
    return newBoard.save();
  }

  // Получение элементов выбранной доски
  async getItemsForBoard(boardId: string): Promise<Item[]> {
    const board = await this.boardModel
      .findById(boardId)
      .populate('items')
      .exec();
    return board.items;
  }

  // Добавление элемента на доску
  async addItemToBoard(boardId: string, itemData: any): Promise<Board> {
    const newItem = new this.itemModel(itemData);
    const board = await this.boardModel.findById(boardId).exec();
    board.items.push(newItem);
    console.log(board.items);
    return board.save();
  }
}
