import { Injectable, Injector } from '@angular/core';
import { User } from "../models/user.model";

import { BaseResourceService } from "./base-resource.service";
import { API_URL } from "../../app.config"

@Injectable({
  providedIn: 'root'
})
export class UsersService extends BaseResourceService<User> {

  constructor(protected injector: Injector) {
    super(`${API_URL}users`, injector, User.fromJson);
  }

}