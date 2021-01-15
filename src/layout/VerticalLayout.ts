import EventDispatcher from '../event/EventDispatcher';
import IDisplayContainer from '../interfaces/core/IDisplayContainer';
import IDisplayElement from '../interfaces/core/IDisplayElement';
import IPositionElement from '../interfaces/core/IPositionElement';
import IVerticalLayout from '../interfaces/layout/IVerticalLayout';
import ISize from '../interfaces/vo/ISize';
import { HorizontalAlign } from '../types/HorizontalAlign';
import { VerticalAlign } from '../types/VerticalAlign';
import Size from '../vo/Size';

export default class VerticalLayout extends EventDispatcher implements IVerticalLayout {
    public constructor(verticalGap = 0, horizontalAlign: HorizontalAlign = 'left', verticalAlign: VerticalAlign = 'top') {
        super();
        this.name = 'VerticalLayout';
        this.verticalGap = verticalGap;
        this.horizontalAlign = horizontalAlign;
        this.verticalAlign = verticalAlign;
    }

    public updateChildrenSizes(container: IDisplayContainer, elements: Array<IDisplayElement>): void {
        let heightSum = 0;
        let percentHeightSum = 0;
        for (const element of elements) {
            if (!isNaN(element.percentHeight)) {
                percentHeightSum += element.percentHeight;
            } else {
                heightSum += element.measuredHeight;
            }
        }
        const actualWidth = container.measuredWidth - container.paddingLeft - container.paddingRight;
        const actualHeight = container.measuredHeight - container.paddingTop - container.paddingBottom;
        const verticalGapSumHeight = this.verticalGap * (elements.length - 1);
        const actualHeightLeftForPercentHeight = actualHeight - heightSum - verticalGapSumHeight;
        let pixelPercentRatio;
        if (percentHeightSum > 100) {
            pixelPercentRatio = actualHeightLeftForPercentHeight / percentHeightSum;
        } else {
            pixelPercentRatio = actualHeightLeftForPercentHeight / 100;
        }
        if (this.horizontalAlign !== 'fill') {
            for (const element of elements) {
                if (!isNaN(element.percentWidth) && !isNaN(element.percentHeight)) {
                    element.size(actualWidth * element.percentWidth / 100, pixelPercentRatio * element.percentHeight);
                } else if (!isNaN(element.percentWidth) && isNaN(element.percentHeight)) {
                    element.width = actualWidth * element.percentWidth / 100;
                } else if (isNaN(element.percentWidth) && !isNaN(element.percentHeight)) {
                    element.height = pixelPercentRatio * element.percentHeight;
                }
            }
            return;
        }
        for (const element of elements) {
            if (!isNaN(element.percentHeight)) {
                element.size(actualWidth, pixelPercentRatio * element.percentHeight);
            } else {
                element.width = actualWidth;
            }
        }
    }

    public updateLayout(container: IDisplayContainer, elements: Array<IDisplayElement & IPositionElement>): void {
        if (this.horizontalAlign === 'left') {
            this.layoutElementsLeft(container, elements);
            return;
        }
        if (this.horizontalAlign === 'right') {
            this.layoutElementsRight(container, elements);
            return;
        }
        this.layoutElementsCenter(container, elements);
    }

    private getVerticalYStartValue(container: IDisplayContainer, elements: IDisplayElement[]): number {
        let y = container.paddingTop;
        if (this.verticalAlign === 'middle' || this.verticalAlign === 'bottom') {
            const actualHeight = container.measuredHeight - container.paddingTop - container.paddingBottom;
            let elementsHeightSum = 0;
            for (const element of elements) {
                elementsHeightSum += element.measuredHeight;
            }
            const verticalGapSumHeight = this.verticalGap * (elements.length - 1);
            if (this.verticalAlign === 'middle') {
                y += (actualHeight - elementsHeightSum - verticalGapSumHeight) * 0.5;
            } else {
                y += (actualHeight - elementsHeightSum - verticalGapSumHeight);
            }
        }
        return y;
    }

    private layoutElementsLeft(container: IDisplayContainer, elements: Array<IDisplayElement & IPositionElement>): void {
        let y = this.getVerticalYStartValue(container, elements);
        for (const element of elements) {
            element.move(container.paddingLeft, y);
            y += element.measuredHeight + this.verticalGap;
        }
    }

    private layoutElementsCenter(container: IDisplayContainer, elements: Array<IDisplayElement & IPositionElement>): void {
        let x = 0;
        let y = this.getVerticalYStartValue(container, elements);
        for (const element of elements) {
            x = container.measuredWidth * 0.5 - element.measuredWidth * 0.5;
            element.move(x, y);
            y += element.measuredHeight + this.verticalGap;
        }
    }

    private layoutElementsRight(container: IDisplayContainer, elements: Array<IDisplayElement & IPositionElement>): void {
        let x = 0;
        let y = this.getVerticalYStartValue(container, elements);
        for (const element of elements) {
            x = container.measuredWidth - container.paddingRight - element.measuredWidth;
            element.move(x, y);
            y += element.measuredHeight + this.verticalGap;
        }
    }

    public getInternalSize(container: IDisplayContainer, elements: Array<IDisplayElement & IPositionElement>): ISize {
        let width = 0;
        let height = 0;
        for (const element of elements) {
            if (width < element.measuredWidth) {
                width = element.measuredHeight;
            }
            height += element.measuredHeight + this.verticalGap;
        }
        width = container.paddingLeft + width + container.paddingRight;
        height = container.paddingTop + height - this.verticalGap + container.paddingBottom;
        return new Size(width, height);
    }

    public getInternalWidth(container: IDisplayContainer, elements: Array<IDisplayElement>): number {
        let width = 0;
        for (const element of elements) {
            if (width < element.measuredWidth) {
                width = element.measuredHeight;
            }
        }
        return container.paddingLeft + width + container.paddingRight;
    }

    public getInternalHeight(container: IDisplayContainer, elements: Array<IDisplayElement>): number {
        let height = 0;
        for (const element of elements) {
            height += element.measuredHeight + this.verticalGap;
        }
        return container.paddingTop + height - this.verticalGap + container.paddingBottom;
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

    private _verticalGap = 0;

    public set verticalGap(value: number) {
        if (this._verticalGap === value) {
            return;
        }
        if (isNaN(value) || value < 0) {
            if (this._verticalGap !== 0) {
                this._verticalGap = 0;
                this.notify();
                return;
            }
        }
        this._verticalGap = value;
        this.notify();
    }

    public get verticalGap(): number {
        return this._verticalGap;
    }

    private notify(): void {
        this.dispatch('invalidate');
    }
}
