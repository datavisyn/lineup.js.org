import Popper from 'popper.js';
import DialogManager from './DialogManager';
export interface IDialogOptions {
    title: string;
    fullDialog: boolean;
    placement?: Popper.Placement;
    eventsEnabled?: boolean;
    modifiers?: Popper.Modifiers;
    toggleDialog: boolean;
}
export interface IDialogContext {
    attachment: HTMLElement;
    level: number;
    manager: DialogManager;
    idPrefix: string;
}
declare abstract class ADialog {
    protected readonly dialog: Readonly<IDialogContext>;
    private readonly options;
    readonly node: HTMLFormElement;
    private popper;
    constructor(dialog: Readonly<IDialogContext>, options?: Partial<IDialogOptions>);
    readonly attachment: HTMLElement;
    readonly level: number;
    protected abstract build(node: HTMLElement): boolean | void;
    equals(that: ADialog): boolean;
    open(): void;
    protected find<T extends HTMLElement>(selector: string): T;
    protected findInput(selector: string): HTMLInputElement;
    protected forEach<M extends Element, T>(selector: string, callback: (d: M, i: number) => T): T[];
    protected reset(): void;
    protected submit(): boolean;
    destroy(): void;
}
export default ADialog;