import { BaseResourceModel } from "./base-resource.model";

export class User extends BaseResourceModel {
  constructor(
    public id?:number,
    public name?: string,
    public description?: string,
    public username?: string,
    public email?: string,
    public address?: [],
    public phone?: string,
    public website?: string,
    public company?: []
  ){
    super();
  }
  
  static fromJson(jsonData: any): User {
    return Object.assign(new User(), jsonData);
  }
}