import { BaseResourceModel } from "../../../shared/models/base-resource.model";

export class Photos extends BaseResourceModel {
  constructor(
    public id?:number,
    public title?: string,
    public url?: string,
    public thumbnailUrl?: string,
    public albumId?: number
  ){
    super();
  }
  
  static fromJson(jsonData: any): Photos {
    return Object.assign(new Photos(), jsonData);
  }
}