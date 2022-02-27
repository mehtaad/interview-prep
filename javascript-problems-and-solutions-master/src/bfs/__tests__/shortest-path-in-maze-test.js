import { assert } from 'chai';
import { shortestPath } from '../shortest-path-in-maze-ii';

describe('Shortest Path in Maze', () => {
  const testCases = [
    [
      [
        ['.', 'X', '.', '#', '.', '.'],
        ['.', '#', '.', '.', '#', '.'],
        ['.', '#', '.', '.', '.', '.'],
        ['.', '#', '#', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '#'],
      ],
      [0, 1],
      -1,
    ],
    [
      [
        ['.', 'X', '.', '#', '.', '.'],
        ['.', '#', '.', '.', '#', '.'],
        ['.', '#', '.', '.', '.', '.'],
        ['.', '#', '#', '.', '.', '.'],
        ['.', 'Y', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '#'],
      ],
      [0, 1],
      6,
    ],
    [
      [
        ['#', 'X', '.', '#', '.', '.'],
        ['#', '#', '.', '.', '#', '.'],
        ['#', '#', '#', '.', '.', '.'],
        ['#', '#', '#', '.', '.', '.'],
        ['.', '#', '#', '.', '.', '.'],
        ['.', 'Y', '.', '.', '.', '#'],
      ],
      [0, 1],
      9,
    ],
    [
      [
        ['#', 'X', '.', '#', '.', '.'],
        ['#', '#', '.', '.', '#', '.'],
        ['#', '#', '#', '.', '.', '.'],
        ['#', '#', '#', '.', '.', '.'],
        ['.', '.', '#', '.', '.', '.'],
        ['.', 'Y', '.', '.', '.', '#'],
      ],
      [0, 1],
      9,
    ],
    [
      [
        ['.', 'X', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.'],
        ['.', 'Y', '.', '.', '.', '.'],
      ],
      [0, 1],
      5,
    ],
  ];

  testCases.forEach(([maze, px, expected], index) => {
    it(`should get the minimum steps for case ${index}`, () => {
      const actual = shortestPath(maze, px);
      assert.equal(actual, expected);
    });
  });
});
