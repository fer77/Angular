import { Injectable } from '@angular/core';
import { DataService } from './services/data.service';
import { Http } from '../../node_modules/@angular/http';

@Injectable()
export class GithubFollowersService extends DataService {

  constructor(http: Http) {
    super('https://api.github.com/users/fer77/followers', http);
  }
}
