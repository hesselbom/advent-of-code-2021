const t = require('./day12-part1')

test('day 12 part 1', () => {
  expect(t(`start-A
start-b
A-c
A-b
b-d
A-end
b-end`)).toBe(10)

  expect(t(`dc-end
HN-start
start-kj
dc-start
dc-HN
LN-dc
HN-end
kj-sa
kj-HN
kj-dc`)).toBe(19)

  expect(t(`fs-end
he-DX
fs-he
start-DX
pj-DX
end-zg
zg-sl
zg-pj
pj-he
RW-he
fs-DX
pj-RW
zg-RW
start-pj
he-WI
zg-he
pj-fs
start-RW`)).toBe(226)

  console.log(t(`CI-hb
IK-lr
vr-tf
lr-end
XP-tf
start-vr
lr-io
hb-qi
end-CI
tf-YK
end-YK
XP-lr
XP-vr
lr-EU
tf-CI
EU-vr
start-tf
YK-hb
YK-vr
start-EU
lr-CI
hb-XP
XP-io
tf-EU`))
})
