import {ICharacter } from './interfaces/ICharacter';

export const CHARACTERS: ICharacter[] = [
  {
    'name': 'Luke Skywalker',
    'url': 'https://swapi.co/api/people/1/'
  },
  {
    'name': 'Darth Vader',
    'url': 'https://swapi.co/api/people/4/'
  },
  {
    'name': 'Obi-wan Kenobi',
    'url': 'https://swapi.co/api/people/unknown/'
  },
  {
    'name': 'R2-D2',
    'url': 'https://swapi.co/api/people/3/'
  }
];
// character.url -- select CharDetails
// export const details = [{
//   'name': 'Luke Skywalker',
//   'height': '172',
//   'homeworld': 'https://swapi.co/api/planets/1/',
//   'films': [
//   'https://swapi.co/api/films/2/',
//   'https://swapi.co/api/films/6/',
//   'https://swapi.co/api/films/3/',
//   'https://swapi.co/api/films/1/',
//   'https://swapi.co/api/films/7/'
// }]
//
// export const movies = [{
//   {
//     'count': 7,
//     'next': null,
//     'previous': null,
//     'results': [
//       {
//         'title': 'A New Hope',
//         'episode_id': 4,
//         'director': 'George Lucas',
//         'producer': 'Gary Kurtz, Rick McCallum',
//         'release_date': '1977-05-25',
//         'characters': [
//           'https://swapi.co/api/people/1/',
//           'https://swapi.co/api/people/2/',
//           'https://swapi.co/api/people/3/',
//           'https://swapi.co/api/people/4/',
//           'https://swapi.co/api/people/5/',
//           'https://swapi.co/api/people/6/',
//           'https://swapi.co/api/people/7/',
//           'https://swapi.co/api/people/8/',
//           'https://swapi.co/api/people/9/',
//           'https://swapi.co/api/people/10/',
//           'https://swapi.co/api/people/12/',
//           'https://swapi.co/api/people/13/',
//           'https://swapi.co/api/people/14/',
//           'https://swapi.co/api/people/15/',
//           'https://swapi.co/api/people/16/',
//           'https://swapi.co/api/people/18/',
//           'https://swapi.co/api/people/19/',
//           'https://swapi.co/api/people/81/'
//         ],
// }]
