import EventDispatcher from '../event/EventDispatcher';
import IDisplayContainer from '../interfaces/core/IDisplayContainer';
import IDisplayElement from '../interfaces/core/IDisplayElement';
import IPositionElement from '../interfaces/core/IPositionElement';
import ILayout from '../interfaces/layout/ILayout';
import ISize from '../interfaces/vo/ISize';
import Size from '../vo/Size';
export default class AbsoluteLayout extends EventDispatcher implements ILayout {
    public constructor() {
        super();
        this.name = 'AbsoluteLayout'
    }

    public updateChildrenSizes(container: IDisplayContainer, elements: Array<IDisplayElement>): void {
        const insideWidth = container.measuredWidth - container.paddingLeft - container.paddingRight;
        const insideHeight = container.measuredHeight - container.paddingTop - container.paddingBottom;
        console.log(container.name, 'updateChildrenSizes()');
        for (const element of elements) {
            if (!isNaN(element.percentWidth) && !isNaN(element.percentHeight)) {
                element.size(insideWidth * element.percentWidth / 100, insideHeight * element.percentHeight / 100);
            } else if (!isNaN(element.percentWidth) && isNaN(element.percentHeight)) {
                element.width = insideWidth * element.percentWidth / 100;
            } else if (isNaN(element.percentWidth) && !isNaN(element.percentHeight)) {
                element.height = insideHeight * element.percentHeight / 100;
            }
        }
    }

    public updateLayout(container: IDisplayContainer, elements: Array<IDisplayElement & IPositionElement>): void {
        console.log(container.name, 'updateLayout()');
        for (const element of elements) {
            element.x = container.paddingLeft;
            element.y = container.paddingTop;
        }
    }

    public getInternalSize(container: IDisplayContainer, elements: Array<IDisplayElement & IPositionElement>): ISize {
        let width = 0;
        let height = 0;
        for (const element of elements) {
            if (width < element.measuredWidth) {
                width = element.measuredWidth;
            }
            if (height < element.measuredHeight) {
                height = element.measuredHeight;
            }
        }
        width = container.paddingLeft + width + container.paddingRight;
        height = container.paddingTop + height + container.paddingBottom;
        return new Size(width, height);
    }

    public getInternalWidth(container: IDisplayContainer, elements: Array<IDisplayElement>): number {
        let width = 0;
        for (const element of elements) {
            if (width < element.measuredWidth) {
                width = element.measuredWidth;
            }
        }
        return container.paddingLeft + width + container.paddingRight;
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
}
