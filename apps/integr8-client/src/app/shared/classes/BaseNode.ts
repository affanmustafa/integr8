import { INode } from '../interfaces/INode';

export abstract class BaseNode implements INode {
  id: string;
  name: string;
  type: string;

  constructor(id: string, name: string, type: string) {
    this.id = id;
    this.name = name;
    this.type = type;
  }

  abstract execute(input: any): Promise<any>;
}
