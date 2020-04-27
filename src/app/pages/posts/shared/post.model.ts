import { BaseResourceModel } from "../../../shared/models/base-resource.model";

export class Post extends BaseResourceModel {
  constructor(
    public id?:number,
    public title?: string,
    public body?: string,
    public userId?: number
  ){
    super();
  }
  
  static fromJson(jsonData: any): Post {
    return Object.assign(new Post(), jsonData);
  }
}