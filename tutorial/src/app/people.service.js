"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
const core_1 = require("@angular/core");
const http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
let PeopleService = class PeopleService {
    constructor(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.peopleUrl = 'http://api.themoviedb.org/3'; //URL to web api
        this.apiKey = 'api_key=802cd9bec58e75474a66bfa717fd1106';
    }
    getPeople() {
        return this.http.get(this.peopleUrl + '/person/popular?' + this.apiKey)
            .toPromise()
            .then(response => response.json().results)
            .catch(this.handleError);
    }
    ;
    handleError(error) {
        console.error('An error occurred', error); //for demo purposes only
        return Promise.reject(error.message || error);
    }
    getPerson(id) {
        const url = `${this.peopleUrl}/person/${id}?${this.apiKey}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }
    getParticipationCast(id) {
        const url = `${this.peopleUrl}/person/${id}/movie_credits?${this.apiKey}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().cast)
            .catch(this.handleError);
    }
    getParticipationCrew(id) {
        const url = `${this.peopleUrl}/person/${id}/movie_credits?${this.apiKey}`;
        return this.http.get(url)
            .toPromise()
            .then(response => response.json().crew)
            .catch(this.handleError);
    }
};
PeopleService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], PeopleService);
exports.PeopleService = PeopleService;
//# sourceMappingURL=people.service.js.map