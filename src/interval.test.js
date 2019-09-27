const Interval = require('./interval');

describe('overlaps', function () {
    let interval1 = new Interval (2,4);
    let interval2 = new Interval (3,5); 
    let interval3 = new Interval (6,10);
    test('Test prime de l intervale [2,4] par rapport a [3,5] => true', () => {    
            expect(interval1.overlaps(interval2)).toBe(true);
    })
    test('Test prime de l intervale [2,4] par rapport a [6,10] => true', () => {    
        expect(interval1.overlaps(interval3)).toBe(false);
}) 
});