export interface INode {
  id: string;
  name: string;
  type: string;
  execute(input: any): Promise<any>;
}
