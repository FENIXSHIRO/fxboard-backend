import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ItemDocument = Item & Document;

@Schema()
export class Item {
  @Prop({ required: true })
  id: string;

  @Prop({ required: true })
  x: number;

  @Prop({ required: true })
  y: number;

  @Prop({ required: true })
  width: number;

  @Prop({ required: true })
  height: number;

  @Prop({ required: true })
  offsetX: number;

  @Prop({ required: true })
  offsetY: number;

  @Prop({ required: true })
  rotation: number;

  @Prop({ required: true })
  scaleX: number;

  @Prop({ required: true })
  scaleY: number;

  @Prop({ required: true })
  draggable: boolean;

  @Prop({ required: true })
  name: string;

  @Prop({ type: Object, required: true })
  item: any;

  @Prop({ type: Object, required: false })
  text: any;

  @Prop([
    {
      id: { type: String, required: true },
      x: { type: Number, required: true },
      y: { type: Number, required: true },
      radius: { type: Number, required: true },
      fill: { type: String, required: true },
      stroke: { type: String, required: true },
      strokeWidth: { type: Number, required: true },
      scaleX: { type: Number, required: true },
      scaleY: { type: Number, required: true },
    },
  ])
  connectionInput: any[];
}

export const ItemSchema = SchemaFactory.createForClass(Item);
