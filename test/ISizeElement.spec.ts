import { assert } from 'chai';
import { describe, it } from 'mocha';
import SizeElement from '../src/core/SizeElement';
import ISizeElement from '../src/interfaces/core/ISizeElement';

describe('ISizeElement interface', () => {
    describe('default values', () => {
        it('default minWidth should be 0', () => {
            const sizeElement: ISizeElement = new SizeElement();
            assert.strictEqual(sizeElement.minWidth, 0)
        });
        it('default width should be NaN', () => {
            const sizeElement: ISizeElement = new SizeElement();
            assert.isNaN(sizeElement.width);
        });
        it('default maxWidth should be Infinity', () => {
            const sizeElement: ISizeElement = new SizeElement();
            assert.strictEqual(sizeElement.maxWidth, Infinity);
        });
        it('default minHeight should be 0', () => {
            const sizeElement: ISizeElement = new SizeElement();
            assert.strictEqual(sizeElement.minHeight, 0)
        });
        it('default height should be NaN', () => {
            const sizeElement: ISizeElement = new SizeElement();
            assert.isNaN(sizeElement.height);
        });
        it('default maxHeight should be Infinity', () => {
            const sizeElement: ISizeElement = new SizeElement();
            assert.strictEqual(sizeElement.maxHeight, Infinity);
        });
        it('default percentWidth should be NaN', () => {
            const sizeElement: ISizeElement = new SizeElement();
            assert.isNaN(sizeElement.percentWidth);
        });
        it('default percentHeight should be NaN', () => {
            const sizeElement: ISizeElement = new SizeElement();
            assert.isNaN(sizeElement.percentHeight);
        });
    });
    describe('given default size, width and height is NaN', () => {
        it('when when size(NaN, NaN), width and height should be NaN', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.size(NaN, NaN);
            assert.isNaN(sizeElement.width);
            assert.isNaN(sizeElement.height);
        });
        it('when when size(-100, -100), width and height should be 0', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.size(-100, -100);
            assert.strictEqual(sizeElement.width, 0);
            assert.strictEqual(sizeElement.height, 0);
        });
        it('when when size(-100, NaN), width should be 0 and height should be NaN', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.size(-100, NaN);
            assert.strictEqual(sizeElement.width, 0);
            assert.isNaN(sizeElement.height);
        });
        it('when when size(NaN, -100), width should be NaN and height should be 0', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.size(NaN, -100);
            assert.isNaN(sizeElement.width);
            assert.strictEqual(sizeElement.height, 0);
        });
        it('when when size(200, 200), width and height should be 200', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.size(200, 200);
            assert.strictEqual(sizeElement.width, 200);
            assert.strictEqual(sizeElement.height, 200);
        });
    });
    describe('given minWidth is default', () => {
        it('when minWidth is set to -100, minWidth should be 0', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.minWidth = -100;
            assert.strictEqual(sizeElement.minWidth, 0);
        });
        it('when minWidth is set to NaN, minWidth should be 0', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.minWidth = NaN;
            assert.strictEqual(sizeElement.minWidth, 0);
        });
        it('when minWidth is set to 100, minWidth should be 100', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.minWidth = 100;
            assert.strictEqual(sizeElement.minWidth, 100);
        });
    });
    describe('given width is default', () => {
        it('when width is set to -100, width should not be smaller than minWidth, so 0 in this case', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.width = -100;
            assert.strictEqual(sizeElement.width, sizeElement.minWidth);
        });
        it('when width is set to NaN, width should be NaN', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.width = NaN;
            assert.isNaN(sizeElement.width);
        });
        it('when width is set to 100, width should not be larger than maxWidth, so 100 in this case, because maxWidth is Infinity', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.width = 100;
            assert.strictEqual(sizeElement.width, 100);
        });
    });
    describe('given maxWidth is default', () => {
        it('when maxWidth is set to -100, maxWidth should not be smaller than minWidth, so 0 in this case', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.maxWidth = -100;
            assert.strictEqual(sizeElement.maxWidth, sizeElement.minWidth);
        });
        it('when maxWidth is set to NaN, maxWidth should be Infinity', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.maxWidth = NaN;
            assert.strictEqual(sizeElement.maxWidth, Infinity);
        });
        it('when maxWidth is set to 100, maxWidth should not be smaller than minWidth, so 100 in this case', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.maxWidth = 100;
            assert.strictEqual(sizeElement.maxWidth, 100);
        });
    });
    describe('width constraints', () => {
        describe('given minWidth is 100 and maxWidth is 300', () => {
            it('when width is set to NaN, width should be NaN', () => {
                const sizeElement: ISizeElement = new SizeElement();
                sizeElement.minWidth = 100;
                sizeElement.maxWidth = 300;
                sizeElement.width = NaN;
                assert.isNaN(sizeElement.width);
            });
            it('when width is set to -100, width should be 100', () => {
                const sizeElement: ISizeElement = new SizeElement();
                sizeElement.minWidth = 100;
                sizeElement.maxWidth = 300;
                sizeElement.width = -100;
                assert.strictEqual(sizeElement.width, 100);
            });
            it('when width is set to 50, width should be 100', () => {
                const sizeElement: ISizeElement = new SizeElement();
                sizeElement.minWidth = 100;
                sizeElement.maxWidth = 300;
                sizeElement.width = 50;
                assert.strictEqual(sizeElement.width, 100);
            });
            it('when width is set to 350, width should be 300', () => {
                const sizeElement: ISizeElement = new SizeElement();
                sizeElement.minWidth = 100;
                sizeElement.maxWidth = 300;
                sizeElement.width = 350;
                assert.strictEqual(sizeElement.width, 300);
            });
            it('when width is set to 200, width should be 200', () => {
                const sizeElement: ISizeElement = new SizeElement();
                sizeElement.minWidth = 100;
                sizeElement.maxWidth = 300;
                sizeElement.width = 200;
                assert.strictEqual(sizeElement.width, 200);
            });
        });
    });
    describe('moving width constraints', () => {
        describe('given minWidth is 100, maxWidth is 300 and width is 150', () => {
            it('when minWidth is set to 200, width should be 200', () => {
                const sizeElement: ISizeElement = new SizeElement();
                sizeElement.minWidth = 100;
                sizeElement.maxWidth = 300;
                sizeElement.width = 150;
                sizeElement.minWidth = 200;
                assert.strictEqual(sizeElement.width, 200);
            });
            it('when minWidth is set to 350, minWidth and width should be 300', () => {
                const sizeElement: ISizeElement = new SizeElement();
                sizeElement.minWidth = 100;
                sizeElement.maxWidth = 300;
                sizeElement.width = 150;
                sizeElement.minWidth = 350;
                assert.strictEqual(sizeElement.minWidth, 300);
                assert.strictEqual(sizeElement.width, 300);
            });
            it('when maxWidth is set to 125, width should be 125', () => {
                const sizeElement: ISizeElement = new SizeElement();
                sizeElement.minWidth = 100;
                sizeElement.maxWidth = 300;
                sizeElement.width = 150;
                sizeElement.maxWidth = 125;
                assert.strictEqual(sizeElement.width, 125);
            });
            it('when maxWidth is set to 75, maxWidth and width should be 100', () => {
                const sizeElement: ISizeElement = new SizeElement();
                sizeElement.minWidth = 100;
                sizeElement.maxWidth = 300;
                sizeElement.width = 150;
                sizeElement.maxWidth = 75;
                assert.strictEqual(sizeElement.maxWidth, 100);
                assert.strictEqual(sizeElement.width, 100);
            });
        });
    });

    describe('given minHeight is default', () => {
        it('when minHeight is set to -100, minHeight should be 0', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.minHeight = -100;
            assert.strictEqual(sizeElement.minHeight, 0);
        });
        it('when minHeight is set to NaN, minHeight should be 0', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.minHeight = NaN;
            assert.strictEqual(sizeElement.minHeight, 0);
        });
        it('when minHeight is set to 100, minHeight should be 100', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.minHeight = 100;
            assert.strictEqual(sizeElement.minHeight, 100);
        });
    });
    describe('given height is default', () => {
        it('when height is set to -100, height should not be smaller than minHeight, so 0 in this case', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.height = -100;
            assert.strictEqual(sizeElement.height, sizeElement.minHeight);
        });
        it('when height is set to NaN, height should be NaN', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.height = NaN;
            assert.isNaN(sizeElement.height);
        });
        it('when height is set to 100, height should not be larger than maxHeight, so 100 in this case, because maxHeight is Infinity', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.height = 100;
            assert.strictEqual(sizeElement.height, 100);
        });
    });
    describe('given maxHeight is default', () => {
        it('when maxHeight is set to -100, maxHeight should not be smaller than minHeight, so 0 in this case', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.maxHeight = -100;
            assert.strictEqual(sizeElement.maxHeight, sizeElement.minHeight);
        });
        it('when maxHeight is set to NaN, maxHeight should be Infinity', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.maxHeight = NaN;
            assert.strictEqual(sizeElement.maxHeight, Infinity);
        });
        it('when maxHeight is set to 100, maxHeight should not be smaller than minHeight, so 100 in this case', () => {
            const sizeElement: ISizeElement = new SizeElement();
            sizeElement.maxHeight = 100;
            assert.strictEqual(sizeElement.maxHeight, 100);
        });
    });
    describe('height constraints', () => {
        describe('given minHeight is 100 and maxHeight is 300', () => {
            it('when height is set to NaN, height should be NaN', () => {
                const sizeElement: ISizeElement = new SizeElement();
                sizeElement.minHeight = 100;
                sizeElement.maxHeight = 300;
                sizeElement.height = NaN;
                assert.isNaN(sizeElement.height);
            });
            it('when height is set to -100, height should be 100', () => {
                const sizeElement: ISizeElement = new SizeElement();
                sizeElement.minHeight = 100;
                sizeElement.maxHeight = 300;
                sizeElement.height = -100;
                assert.strictEqual(sizeElement.height, 100);
            });
            it('when height is set to 50, height should be 100', () => {
                const sizeElement: ISizeElement = new SizeElement();
                sizeElement.minHeight = 100;
                sizeElement.maxHeight = 300;
                sizeElement.height = 50;
                assert.strictEqual(sizeElement.height, 100);
            });
            it('when height is set to 350, height should be 300', () => {
                const sizeElement: ISizeElement = new SizeElement();
                sizeElement.minHeight = 100;
                sizeElement.maxHeight = 300;
                sizeElement.height = 350;
                assert.strictEqual(sizeElement.height, 300);
            });
            it('when height is set to 200, height should be 200', () => {
                const sizeElement: ISizeElement = new SizeElement();
                sizeElement.minHeight = 100;
                sizeElement.maxHeight = 300;
                sizeElement.height = 200;
                assert.strictEqual(sizeElement.height, 200);
            });
        });
    });
    describe('moving height constraints', () => {
        describe('given minHeight is 100, maxHeight is 300 and height is 150', () => {
            it('when minHeight is set to 200, height should be 200', () => {
                const sizeElement: ISizeElement = new SizeElement();
                sizeElement.minHeight = 100;
                sizeElement.maxHeight = 300;
                sizeElement.height = 150;
                sizeElement.minHeight = 200;
                assert.strictEqual(sizeElement.height, 200);
            });
            it('when minWidth is set to 350, minWidth and width should be 300', () => {
                const sizeElement: ISizeElement = new SizeElement();
                sizeElement.minHeight = 100;
                sizeElement.maxHeight = 300;
                sizeElement.height = 150;
                sizeElement.minHeight = 350;
                assert.strictEqual(sizeElement.minHeight, 300);
                assert.strictEqual(sizeElement.height, 300);
            });
            it('when maxHeight is set to 125, height should be 125', () => {
                const sizeElement: ISizeElement = new SizeElement();
                sizeElement.minHeight = 100;
                sizeElement.maxHeight = 300;
                sizeElement.height = 150;
                sizeElement.maxHeight = 125;
                assert.strictEqual(sizeElement.height, 125);
            });
            it('when maxHeight is set to 75, maxHeight and height should be 100', () => {
                const sizeElement: ISizeElement = new SizeElement();
                sizeElement.minHeight = 100;
                sizeElement.maxHeight = 300;
                sizeElement.height = 150;
                sizeElement.maxHeight = 75;
                assert.strictEqual(sizeElement.maxHeight, 100);
                assert.strictEqual(sizeElement.height, 100);
            });
        });
    });
});
