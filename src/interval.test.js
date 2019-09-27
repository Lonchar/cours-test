const Interval = require('./interval');

let interval1 = new Interval (2,4);
let interval2 = new Interval (3,5); 
let interval3 = new Interval (6,10);
let interval4 = new Interval (8,9);
describe('overlaps', function () {

    test('Test overlaps de l intervale [2,4] par rapport a [3,5] => true', () => {    
            expect(interval1.overlaps(interval2)).toBe(true);
    })
    test('Test overlaps de l intervale [2,4] par rapport a [6,10] => true', () => {    
        expect(interval1.overlaps(interval3)).toBe(false);
}) 
});
describe('includes', function () {

    test('Test includes de l intervale [2,4] par rapport a [3,5] => true', () => {    
            expect(interval1.includes(interval2)).toBe(false);
    })
    test('Test includes de l intervale [8,9] par rapport a [6,10] => true', () => {    
        expect(interval4.includes(interval3)).toBe(true);
}) 
});