import { assert } from 'chai';
import { describe, it } from 'mocha';
import IUnamiDev from '../src/IUnamiDev';
import UnamiDev from '../src/UnamiDev';

const unamiDev: IUnamiDev = new UnamiDev();
document.body.appendChild(unamiDev as unknown as Node);

describe('IUnamiDev', () => {
    describe('default name property value', () => {
        it('name should be "UnamiDev"', () => {
            assert.strictEqual(unamiDev.name, 'UnamiDev');
        });
    });
});
