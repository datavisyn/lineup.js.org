import Column from './Column';
import { IArrayColumn } from './IArrayColumn';
import { IColumnDesc, IDataRow } from './interfaces';
import { IValueColumnDesc } from './ValueColumn';
export interface ICategoricalDesc {
    categories: (string | Partial<ICategory>)[];
    missingCategory: (string | Partial<ICategory>);
}
export declare type ICategoricalColumnDesc = IValueColumnDesc<string> & ICategoricalDesc;
export interface ISetColumn extends IArrayColumn<boolean> {
    readonly categories: ICategory[];
    getSet(row: IDataRow): Set<ICategory>;
}
export declare function isSetColumn(col: Column): col is ISetColumn;
export interface ICategoricalColumn extends ISetColumn {
    getCategory(row: IDataRow): ICategory | null;
}
export interface ICategory {
    readonly name: string;
    readonly label: string;
    readonly color: string;
    value: number;
}
export declare function compareCategory(a: ICategory | null, b: ICategory | null): number;
export declare function toCategories(desc: ICategoricalDesc): {
    name: string;
    label: string;
    color: string;
    value: number;
}[];
export declare function isCategoricalColumn(col: Column): col is ICategoricalColumn;
export declare function isCategoricalColumn(col: IColumnDesc): col is ICategoricalColumnDesc & IColumnDesc;
export interface ICategoricalFilter {
    filter: string[] | string | RegExp;
    filterMissing: boolean;
}
export declare function isEqualCategoricalFilter(a: ICategoricalFilter | null, b: ICategoricalFilter | null): boolean;
export declare function isCategoryIncluded(filter: ICategoricalFilter | null, category: ICategory | null): boolean;