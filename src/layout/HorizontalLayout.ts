import EventDispatcher from '../event/EventDispatcher';
import IDisplayContainer from '../interfaces/core/IDisplayContainer';
import IDisplayElement from '../interfaces/core/IDisplayElement';
import IPositionElement from '../interfaces/core/IPositionElement';
import IHorizontalLayout from '../interfaces/layout/IHorizontalLayout';
import ISize from '../interfaces/vo/ISize';
import { HorizontalAlign } from '../types/HorizontalAlign';
import { VerticalAlign } from '../types/VerticalAlign';
import Size from '../vo/Size';

export default class HorizontalLayout extends EventDispatcher implements IHorizontalLayout {
    public constructor(horizontalGap = 0, horizontalAlign: HorizontalAlign = 'left', verticalAlign: VerticalAlign = 'top') {
        super();
        this.name = 'HorizontalLayout';
        this.horizontalGap = horizontalGap;
        this.horizontalAlign = horizontalAlign;
        this.verticalAlign = verticalAlign;
    }

    public updateChildrenSizes(container: IDisplayContainer, elements: Array<IDisplayElement>): void {
        let widthSum = 0;
        let percentWidthSum = 0;
        for (const element of elements) {
            if (isNaN(element.percentWidth)) {
                widthSum += element.measuredWidth;
            } else {
                percentWidthSum += element.percentWidth;
            }
        }
        const actualWidth = container.measuredWidth - container.paddingLeft - container.paddingRight;
        const actualHeight = container.measuredHeight - container.paddingTop - container.paddingBottom;
        const horizontalGapSumWidth = this.horizontalGap * (elements.length - 1);
        const actualWidthLeftForPercentWidth = actualWidth - widthSum - horizontalGapSumWidth;
        let pixelPercentRatio;
        if (percentWidthSum > 100) {
            pixelPercentRatio = actualWidthLeftForPercentWidth / percentWidthSum;
        } else {
            pixelPercentRatio = actualWidthLeftForPercentWidth / 100;
        }
        if (this.verticalAlign !== 'fill') {
            for (const element of elements) {
                if (!isNaN(element.percentWidth) && !isNaN(element.percentHeight)) {
                    element.size(pixelPercentRatio * element.percentWidth, actualHeight * element.percentHeight / 100);
                } else if (!isNaN(element.percentWidth) && isNaN(element.percentHeight)) {
                    element.width = pixelPercentRatio * element.percentWidth;
                } else if (isNaN(element.percentWidth) && !isNaN(element.percentHeight)) {
                    element.height = actualHeight * element.percentHeight / 100;
                }
            }
            return;
        }
        for (const element of elements) {
            if (!isNaN(element.percentWidth)) {
                element.size(pixelPercentRatio * element.percentWidth, actualHeight);
            } else {
                element.height = actualHeight;
            }
        }
    }

    public updateLayout(container: IDisplayContainer, elements: Array<IDisplayElement & IPositionElement>): void {
        if (this.verticalAlign === 'top') {
            this.layoutElementsTop(container, elements);
            return;
        }
        if (this.verticalAlign === 'bottom') {
            this.layoutElementsBottom(container, elements);
            return;
        }
        this.layoutElementsMiddle(container, elements);
    }

    protected getHorizontalXStartValue(container: IDisplayContainer, elements: IDisplayElement[]): number {
        let x = container.paddingLeft;
        if (this.horizontalAlign === 'center' || this.horizontalAlign === 'right') {
            const actualWidth = container.measuredWidth - container.paddingLeft - container.paddingRight;
            let elementsWidthSum = 0;
            for (const element of elements) {
                elementsWidthSum += element.measuredWidth;
            }
            const horizontalGapSumWidth = this.horizontalGap * (elements.length - 1);
            if (this.horizontalAlign === 'center') {
                x += (actualWidth - elementsWidthSum - horizontalGapSumWidth) * 0.5;
            } else {
                x += (actualWidth - elementsWidthSum - horizontalGapSumWidth);
            }
        }
        return x;
    }

    private layoutElementsTop(container: IDisplayContainer, elements: Array<IDisplayElement & IPositionElement>): void {
        let x = this.getHorizontalXStartValue(container, elements);
        for (const element of elements) {
            element.move(x, container.paddingTop);
            x += element.measuredWidth + this.horizontalGap;
        }
    }

    private layoutElementsMiddle(container: IDisplayContainer, elements: Array<IDisplayElement & IPositionElement>): void {
        let x = this.getHorizontalXStartValue(container, elements);
        let y = 0;
        for (const element of elements) {
            y = container.measuredHeight * 0.5 - element.measuredHeight * 0.5;
            element.move(x, y);
            x += element.measuredWidth + this.horizontalGap;
        }
    }

    private layoutElementsBottom(container: IDisplayContainer, elements: Array<IDisplayElement & IPositionElement>): void {
        let x = this.getHorizontalXStartValue(container, elements);
        let y = 0;
        for (const element of elements) {
            y = container.measuredHeight - container.paddingBottom - element.measuredHeight;
            element.move(x, y);
            x += element.measuredWidth + this.horizontalGap;
        }
    }

    public getInternalSize(container: IDisplayContainer, elements: Array<IDisplayElement & IPositionElement>): ISize {
        let width = 0;
        let height = 0;
        for (const element of elements) {
            if (height < element.measuredHeight) {
                height = element.measuredHeight;
            }
            width += element.measuredWidth + this.horizontalGap;
        }
        width = container.paddingLeft + width - this.horizontalGap + container.paddingRight;
        height = container.paddingTop + height + container.paddingBottom;
        return new Size(width, height);
    }

    public getInternalWidth(container: IDisplayContainer, elements: Array<IDisplayElement>): number {
        let width = 0;
        for (const element of elements) {
            width += element.measuredWidth + this.horizontalGap;
        }
        return container.paddingLeft + width - this.horizontalGap + container.paddingRight;
    }

    public getInternalHeight(container: IDisplayContainer, elements: Array<IDisplayElement>): number {
        let height = 0;
        for (const element of elements) {
            if (height < element.measuredHeight) {
                height = element.measuredHeight;
            }
        }
        return container.paddingTop + height + container.paddingBottom;
    }

    private _horizontalGap = 0;

    public set horizontalGap(value: number) {
        if (this._horizontalGap === value) {
            return;
        }
        if (isNaN(value) || value < 0) {
            if (this._horizontalGap !== 0) {
                this._horizontalGap = 0;
                this.notify();
                return;
            }
        }
        this._horizontalGap = value;
        this.notify();
    }

    public get horizontalGap(): number {
        return this._horizontalGap;
    }

    private _horizontalAlign: HorizontalAlign = 'left';

    public set horizontalAlign(value: HorizontalAlign) {
        if (this._horizontalAlign === value) {
            return;
        }
        this._horizontalAlign = value;
        this.notify();
    }

    public get horizontalAlign(): HorizontalAlign {
        return this._horizontalAlign;
    }

    private _verticalAlign: VerticalAlign = 'top';

    public set verticalAlign(value: VerticalAlign) {
        if (this._verticalAlign === value) {
            return;
        }
        this._verticalAlign = value;
        this.notify();
    }

    public get verticalAlign(): VerticalAlign {
        return this._verticalAlign;
    }

    private notify(): void {
        this.dispatch('invalidate');
    }
}
