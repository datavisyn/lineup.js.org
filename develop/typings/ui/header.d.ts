import Column from '../model/Column';
import { IRankingHeaderContext } from './interfaces';
import { IOnClickHandler } from './toolbar';
export interface IAddIcon {
    (title: string, onClick: IOnClickHandler): void;
}
export declare function createShortcutMenuItems(node: HTMLElement, level: number, col: Column, ctx: IRankingHeaderContext): void;
export declare function createToolbarMenuItems(node: HTMLElement, level: number, col: Column, ctx: IRankingHeaderContext): void;
export declare const MIMETYPE_PREFIX = "text/x-caleydo-lineup-column";