import ADialog from './ADialog';
import Column from '../../model';
export default class DialogManager {
    private readonly escKeyListener;
    private readonly openDialogs;
    readonly node: HTMLElement;
    constructor(doc?: Document);
    setHighlight(mask: {
        left: number;
        top: number;
        width: number;
        height: number;
    }): void;
    setHighlightColumn(column: Column): void;
    clearHighlight(): void;
    private removeLast();
    removeAll(): void;
    remove(dialog: ADialog): boolean;
    removeAboveLevel(level: number): void;
    removeLike(dialog: ADialog): boolean;
    private setUp();
    private takeDown();
    push(dialog: ADialog): void;
}