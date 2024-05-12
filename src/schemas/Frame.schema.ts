import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type FrameDocument = Frame & Document;

@Schema()
export class Frame {
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
  offsetX?: number;
  @Prop({ required: true })
  offsetY?: number;
  @Prop({ required: true })
  draggable: boolean;
  @Prop({ type: Object, required: true })
  columns: any;
  @Prop({ type: Object, required: true })
  body: any;
}

export const FrameSchema = SchemaFactory.createForClass(Frame);
