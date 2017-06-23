import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const cars = [
      {id:1,name:'Ford Mustang', registration:'FM11'},
      {id:2,name:'Dodge Charger', registration:'DC22'},
      {id:3,name:'Ford F150', registration:'FF33'},
      {id:4,name:'Plymouth Cuda', registration:'PC44'},
      {id:5,name:'Chrysler', registration:'C55'},
      {id:6,name:'Oldsmobile',registration:'O66'}
    ];
    return {cars};
  }
}
