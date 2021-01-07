import { assert } from 'chai';
import { describe, it } from 'mocha';
import PositionElement from '../src/core/PositionElement';
import IPositionElement from '../src/interfaces/core/IPositionElement';

describe('IPositionElement interface', () => {
    describe('default values', () => {
        const positionElement: IPositionElement = new PositionElement();
        it('default x should be 0', () => {
            assert.strictEqual(positionElement.x, 0);
        });
        it('default y should be 0', () => {
            assert.strictEqual(positionElement.y, 0);
        });
    });
});
