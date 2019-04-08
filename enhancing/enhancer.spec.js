const enhancer = require('./enhancer.js');
// test away!

it('returns duration to 100', () => {
    expect(enhancer.repair({ name: 'tester',
    durability: 90,
    enhancement: 4}))
    .toBe({ name: 'tester',
    durability: 100,
    enhancement: 4})
})

testItem = {
    name: 'tester',
    durability: 90,
    enhancement: 4
}

it('success', () => {
    expect(enhancer.succeed({ name: 'tester',
    durability: 90,
    enhancement: 4}))
    .toBe({ name: 'tester',
    durability: 90,
    enhancement: 5})
})
it('success', () => {
    expect(enhancer.succeed({ name: 'tester',
    durability: 90,
    enhancement: 20}))
    .toBe({ name: 'tester',
    durability: 90,
    enhancement: 20})
})

it('fail', () => {
    expect(enhancer.fail({name: 'tester',
    durability: 90,
    enhancement: 20}))
    .toBe({ name: 'tester',
    durability: 80,
    enhancement: 19})
})