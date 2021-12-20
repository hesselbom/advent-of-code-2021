const t = require('./day20-part1')

test('day 20 part 1', () => {
  expect(t(`..#.#..#####.#.#.#.###.##.....###.##.#..###.####..#####..#....#..#..##..###..######.###...####..#..#####..##..#.#####...##.#.#..#.##..#.#......#.###.######.###.####...#.##.##..#..#..#####.....#.#....###..#.##......#.....#..#..#..##..#...##.######.####.####.#.#...#.......#..#.#.#...####.##.#......#..#...##.#.##..#...##.#.##..###.#......#.#.......#.#.#.####.###.##...#.....####.#..#..#.##.#....##..#.####....##...##..#...#......#.#.......#.......##..####..#...#.#.#...##..#.#..###..#####........#..####......#..#

#..#.
#....
##..#
..#..
..###`)).toBe(35)

  // 5559 = too high
  console.log(t(`#.#.####.####.#.#.#.....##.#..#####...##..#.#..#.####.#.#...#.#.#.#...#########.#.....#.#...##.##.#.####...##.#..##..##.###.##...#.#.#.##.##.#.#.#..#..#..#..##..##..##..#.#...#.#...#..#....#....#.##.##..###.....####.#.####...########.#.##.#.#.#.....#..##..##..###....#.###..###......#..#####..##..#..#.##..#..#..##.#.###.#.....#....#..####..####....#..##.#..####.#...##.###..#.....###..#..#..##...#####.#.....#..##..##..####.###.#.##..####.###.##...##..#...###.####...###....###.#..#.#.####.#...##.......##...#..

.#..##....##.....##....##...##.###.####..##.#.#.#.#....#.#..#..###.#....##..##..#######..#.##.#.##.#
......#.#.##...#.#..#..##.##.###..#.#.#....#..#...#..##...#####.####..####.###...##...##.##....###..
#.##.#..#.##.#.#.###.#.....##..##.#...##....#......#....#.#.###.....#.###..#.#..##...##..##.#.##....
......##.#.#.#.......#####.#....##.##...#.##.##....#..##..##..##.#..#..##..###..#.#.#.#...##..#..#..
.#.....####..##..#.##.....####....#.....##..#.#.#.#...#...##.#.##.#.#..###...##..#.#.##......#..#.##
...#..#..##...#.#...#....##..####..##.###.###..####.##.##..##.###..#.#.##.#......#.#.#.#..####..#...
....#...#...###.##.####.#....#..##.#.##..####..##.....#......###...#.####...#####.#.#......####.#...
....#.....######.....##.##...#.#.#.##..#...####...##...##...#.#.#...###..###.##..#.#.#....#.##...###
.##.######.##.##.######.#....###.#...###.###.#.#..#..##..###.#..#..#.#.######.##.##...#.#.####.#.###
..#..###..#..####.#.#.#...###...####....#....###.#.#.###.##.#.######.##..#.#....##.#.#.....##.####..
.###.###.......#.##.#....#..##.##.##.....##.#..##.#..##.##..#...###...#..#...##.#..#.#.####..##.....
..##.###.##........##.#.##...##.####..##.#...####..###..#..##########.#...###.#...##.##.#...#...##.#
##........#..#####..#.####...##..#..###...#.##.###......#..###.#.#.....###.#.....##...####...#....#.
#.###..#####.#.#..##...###..######...###..##..#.##..##.##.##...##.###..###..##..#.###....##....#..#.
...##.#.###..#..######..#..#..##.#...#...####.####.#...####..#.###..###.##.#####.....##.###.#.###...
..#...#....###....#.#....##.#.##.#####.###.#....##.##.##.#.#.##.####.#..##.#..#.##.##..##...####..##
#.######.##....#..####....##...#####.##...#.##..#.#..##.....###.##...##.######.#..#..#.####.#.##.#.#
#.######....##.....#..##....####.#.#...#..#...#.#.#.#.#.#..#.#..###.....#..###.##.....#######..###.#
..##.#..##..###.#.###...#.......#.###..###.#.###.#######.#..###..#..##.#.#...####..#..#.....#..####.
##.#.#.#....#.....#....#.#.##.#..##.####......####....#..##...#..####.#####.###.#....#####..###.#.#.
.#.##...#...#.##..##.###...###.##.#...#.#.#....###.#..#...#.#..###..#.#.#.#.###..####..########.#.#.
....###.#.#.#.....#..##.#.#.#.#..######.#.#.##..#.###.####.#..#.#######.##.#...#.##.####.#.#..#....#
##.#.##...########.#.#.#...#.#.#.#..##..#...##.#...####..#...#.##...##...#..#...#.###....#.#.#.#.#..
#.......#..###.###..###.##.###..###..#......##.##.#...#####...#...##.#..##.#.###..#.###.####.###.##.
..#....##.....##..#....#..##.#.#..#.##.#.##.##.##########.....####..##.###..#..#.#....##...#..#....#
..##.#..##..#.#####...####..#.##.###.....####..##..##...####.#..#.##..#...#...#.....#..###..##...##.
....#..###...#...#.###.#..#..##.####..#..#.###.....##...#########.#...###..#.#.#.....##..###...#..#.
###.#.##.#..#.###.#.#..###.##..###...###....#.#..#.............#..#.##.####.....###.###.###....#....
..#.###.#....###..#.###.##.#..#.###..##.#...##...#.#.###..#.#.##....#.##.#.#..#..#......###.##.##.#.
##..####..#.#.#...##....#.##..#.......##...#.......###.####..####.#..####.#...###...#...#........###
#.#...###.#.#.###....#.#..##.##....##.#..#.#..#.##.#.#####..###..#...#..######....##.##....###.###..
#.#.#..####..#.##..##.##.######.####.#.##...##..##..####...##.#.###...##.###...#.##...##...####.#..#
.##.#..##..##...#.##.#.####.....#.#..#.#####.###..###.#.#..##....#..#..###.#.....##....###.#########
#####.##.#.########.#..###.###.#.#.##..#.###.#..#...#.#.#.#.##..#....###.#...###..#.#..##...##.#....
.#.#..#.#######.###..##...##..#..###.#..#####.#..#...#####...#.......#..#.######..##.....##.#.#...##
#.....#..###.##.#.###.#.........#.#.#.#####.##.###########.#...###.#..#..#..#.##...#....#..#....#.#.
#.###...#.#..#.##.###...####.##.##.##..#..#.####.##.#####.....###...##.###.#..#..#..#.##.####.####..
##...##..#..#######..#####......#..#..##..#..#..#.###.##.##.....#####.#.###..###..#..#.#######...#.#
.#...###...#..##.......#####.###.#...##...##.##..#.##.####.......#.#...#...#..###.##.....##..#..#..#
#..#.##..#..##...#.#######....#...#.###.#.##...##..#..#.#.#.#...#.###.###.##......#..#.####.#..#####
........##...###..#.#...###.###.###.#..#..##..#.##..##..##...#...#.##.#.#.####.....####....##.##...#
#.##.###.##.#.#.#.#.#..#......###.######.#..#..#.#.#...#.#.##..#....##.##.##.#.#....#.......##..#.#.
#####.#####.#.#..#.#......##.####...##..##.#.#.#..#....####..######.###..##.##...##.######.##....#..
.##.#..###...#########...##....###.##.#####....###.##.####..##..#.....#.#......##....###.#####..##.#
.#...##.##.#..###..###......####.###........###.#.####..#..####..#.#...######.##.####..#.###.#......
#.#.##.##.####.#.##.#..##...####..#.#.##.#..#.#.....##.......#####..#####......#.......#....##.##.##
####.#.#.##...#.####.##.#...#.###..##.##....###.#####..#######..##.##.##....###.######..#......#.###
#.##...##.#.##.####.####.##.#..#########...##.#..##...#.#.#.####....####.#..#....###...##..####.#...
..###..###..###...#..##...##.#.#.#..##....#.###.#####.........#.#....#.#####.##....#.##...#..##..#.#
.#.#.#.#..#...#..##.#...######.##.###....#..#...##.#..#.##.#.#.#..#######..##.#..#....##..#....##.#.
##.#.###..##...#..##.##...###.##.#.##....#..#...#..##...##..####.....###.##.##.....#..##..##..##.##.
##.##..#.#..#..#####..#.#...#....#.##..#...########.#######..#.#.###.#...#..####.#..##.#.###.##..#..
#.#.#...#.#.###...##.###.##.#..#..#..#..#.##.###.#..#######...#..#.##.#...#.##.#...##.#.##..#..#.###
#.#.#####.###...#..#..########..##..#.####.###...#.#.#..#..#.#...#.....##.##.#####.#..####..####...#
.#..##....##.#.##.#.....#..#..####.#.##.###.....#.#..##...#..####..#####...#.....#.##..###.##.###.#.
####..#..###..###.#.####..####..#.##.###..#.###...####.#....######...#.#...#.#...####...##.####.#.##
.###..######......#...##.###.###.###..##.......#..###..##.##.##....#..#..#.##.#.##..#..#..#..#..#.#.
##..##.##.####.####.#..#.....#.#......##.#####.#...##...####.#####.###.#...###.###..##.###..#..##.#.
.#..###.....##.###.#....##.##.....#..#.#....#.####..####.###..#..##..###.....##.##.#.######.###.#..#
#.....##....#..#.#.#..#..###...#..#..#..####.##.#..#.##....##.#.###..#..#.....#.....#.##...##.....##
###...#.#...#.#..#####.###.#.........#.###.....#....#####....#.#....##.#.#.##...#...#.#...#.##....##
..##..#..#.#####.##.##.#######...#.#####.##..##.....#####.####.#.####..#.#.#..#...#.#.#.#....#.#....
###.#..##.####....#..#.##.#.####..#..##...#..#..##.#....#...#####..##...#.#######.#.####......######
.#..##.....##..#..#.##..#.#########..##.#######...#.##.#.##...#.###..##..#..#.###.#..#...##.#.#.###.
.##...######...####.#.#####.#.#..##.#...##.#...####..####...#..###...###.....#.##.#.#....###..##....
#.##...#..#..#.#.#.#....#....####.#.#.#.####..####...#.#.##..#....##.....#..#....###.###.#.#####....
#.#.##.##..#.#...#....##..#...#.#.##..#.#....##...#..##.######.....#..###.#####.##..#.#.####.#...#.#
#.###..##.#.#..#.#..#.###.#....#..##...#.#.#..#.#..#####.##.##.....#.#.###..######...#.#.##...###..#
.##.#...###...#...##.####..###.....####.#.####..##.##..#.###.#..####...#.###.#.##...#.#..##..#...#..
.###.#.#..#....##.##..##..###.####.##..##...#####.#.#...##.#..#...#...##.###...##..#......#...#.####
.......##.#..#.#.###.####..#.#.##.########..#.###..#.#......#....##..#.###..#..#....##..##..#......#
#.#..#...####.##..#..#.#..###.......##..#..#....#.#....#.#.#..##.##..#....#...#####.####.##.##...#.#
..#.....#####..#...###.####.##.#..##.#..#..########.#..#..##.###.#.##..#.######....##....##.###.#.##
#.#.#.#..#..#.#.#.#.#...#####.##.#.#.####..##..###.###.##.#.#..###..#.#.#....#...##.#...###...#.#.#.
#.#.#..#.#.#..###.#.#....#.....#.#.###.......##...##....#....##.#.####.#.###...#.##.#..####.#...###.
#...##.#####.##.#..#..###..###.#.#...##..##...#...#...##..##...#......#...#..##.#.##.....#...#..#.##
#..##.#...#..#.#.####...##.######...#..##.##.##...#####.....#.#.#.#.##.####....#.#...####.##.#.##...
##..#.##..#.####.#.####..#..##.###.....##.#...##.#..#.#..#.#...#...#..#..###.##..##..#.###..###.##.#
.##.#..##.#########.##...........##..#..##...##.#.....##.###...###.####.#.#.##...##....##.#.#.#.#.##
#...#...###.###....#####....#.#...##.####.##..#.###..#.#.#..##...###.##..####..###.###.##......#####
.#..#.##.##.##...#.##...#.....#.##.##.#.#.#..#...#.#.##....###.###.#.#.#.##.#..##########....####.#.
..#..#.###..###.#..#.#.#..#.#.###....####.#####.##.###..#..####...#......#####..###........#..##...#
#.#.#.#.##..######.....##..#.##.#####...##......#.#.#..####.#..##.#####.....#.##.##..####.##.#.##...
...##...#..##...##...##..#....#..#####.#####.#.##.#......##.##...####.#####..##...#...#..####..##..#
.##.#.###########...###...##..#....#...#...###.##.###...######..##.....#..#.######.#####.#..#.#.####
..#....##.......##.##.....##...##....#.###.#..#...##..#...#....###.##.##..###.####..###..##.##..##.#
###....#.#.....#...#####.#.#....#.##..##########.#.######....###..###.##.#####.####..###.#.#.#.###.#
#.##.##..#..#####.....#..#.####.###.#...##..#.....###..#...######.##..##.###.##..#####....##.#####..
#...#..###.#....##..##.###.###..#.#...##..#.###....######..#..###.#..###.##....#.#..#...#.#..###.#.#
#..##..#.#.....#.....###.##.#...#...###..#.#####..##......#..#.##..###.#..##.###...####...##..#....#
###...######..#.#...#...#..#..#..####.##.##.##.##.##..##.###.#.#.##...#.#..#..#...####...#.###.#.###
..#.#.##..#.###.....#...#..##..##...#..#.....####...#.#..........##.....###.#..##.#.##...##.#..#..#.
#.##....###.#.##...###.#...#.#.#..#.###.#####.#######..#....##..##.####.##..#..#..#####...####..#.##
#...#.####..##.###.#...##......#.####...#..##.....#.##..##.#.##...#...##.#.##.#.##.......##..###.###
....###.##..#.#..###..#....#..#.#.#####...#....#.##...##..#.#..#..########.#.#...##....#.#.#..##.##.
..#......#.#.#.#.#...#.#.####..##.#####.##.......###....#.#.#.#....#....#######...#.#...#....#.##..#
.##.#.#...#...##...#...########.##.#.#.#.##...#..#.##..##.#.###..##..#####.#.#.....#...#..###.....#.
#...#....####..#..#####..#.##.....#.#.#...######......#.#.###...#.####.#......##...####.#.#.##.###.#
.###.....###...##.###..#.####.###.#...###.#....#..#..#.#.##.##....###.##..##..#....#####..###..##.##
#...#.##.##.#...#.....#..####..#.#..#.#.#.###..#.......###...#.....#...##.##...#.#####.#.#....#...##`))
})
