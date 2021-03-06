const t = require('./day20-part2')

test('day 20 part 2', () => {
  expect(t(`..#.#..#####.#.#.#.###.##.....###.##.#..###.####..#####..#....#..#..##..###..######.###...####..#..#####..##..#.#####...##.#.#..#.##..#.#......#.###.######.###.####...#.##.##..#..#..#####.....#.#....###..#.##......#.....#..#..#..##..#...##.######.####.####.#.#...#.......#..#.#.#...####.##.#......#..#...##.#.##..#...##.#.##..###.#......#.#.......#.#.#.####.###.##...#.....####.#..#..#.##.#....##..#.####....##...##..#...#......#.#.......#.......##..####..#...#.#.#...##..#.#..###..#####........#..####......#..#

#..#.
#....
##..#
..#..
..###`)).toBe(3351)

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
