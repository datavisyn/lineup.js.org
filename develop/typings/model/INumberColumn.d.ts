import { IAdvancedBoxPlotData, IBoxPlotData } from '../internal';
import Column from './Column';
import { IArrayColumn } from './IArrayColumn';
import { IColumnDesc, IDataRow } from './interfaces';
import { IMapAbleColumn, IMappingFunction } from './MappingFunction';
export {  } from '../internal';
export interface INumberColumn extends Column {
    getNumber(row: IDataRow): number;
    getRawNumber(row: IDataRow): number;
}
export declare const DEFAULT_FORMATTER: (n: number) => string;
export default INumberColumn;
export interface INumberDesc {
    map?: any;
    domain?: [number, number];
    range?: [number, number];
    numberFormat?: string;
    missingValue?: number;
}
export declare function isNumberColumn(col: Column): col is INumberColumn;
export declare function isNumberColumn(col: IColumnDesc): col is INumberDesc & IColumnDesc;
export declare function compareBoxPlot(col: IBoxPlotColumn, a: IDataRow, b: IDataRow): number;
export declare function getBoxPlotNumber(col: IBoxPlotColumn, row: IDataRow, mode: 'raw' | 'normalized'): number;
export declare enum ESortMethod {
    min = "min",
    max = "max",
    median = "median",
    q1 = "q1",
    q3 = "q3",
}
export interface IBoxPlotColumn extends INumberColumn, IMapAbleColumn {
    getBoxPlotData(row: IDataRow): IBoxPlotData | null;
    getMapping(): IMappingFunction;
    getRawBoxPlotData(row: IDataRow): IBoxPlotData | null;
    getSortMethod(): string;
    setSortMethod(sortMethod: string): void;
}
export declare function isBoxPlotColumn(col: Column): col is IBoxPlotColumn;
export declare enum EAdvancedSortMethod {
    min = "min",
    max = "max",
    median = "median",
    q1 = "q1",
    q3 = "q3",
    mean = "mean",
}
export interface IAdvancedBoxPlotColumn extends IBoxPlotColumn {
    getBoxPlotData(row: IDataRow): IAdvancedBoxPlotData | null;
    getRawBoxPlotData(row: IDataRow): IAdvancedBoxPlotData | null;
}
export interface INumbersColumn extends IAdvancedBoxPlotColumn, IArrayColumn<number> {
    getNumbers(row: IDataRow): number[];
    getRawNumbers(row: IDataRow): number[];
}
export declare function isNumbersColumn(col: Column): col is INumbersColumn;
export declare function numberCompare(a: number | null, b: number | null, aMissing?: boolean, bMissing?: boolean): number;
export interface INumberFilter {
    min: number;
    max: number;
    filterMissing: boolean;
}
export declare function noNumberFilter(): {
    min: number;
    max: number;
    filterMissing: boolean;
};
export declare function isEqualNumberFilter(a: INumberFilter, b: INumberFilter): boolean;
export declare function isNumberIncluded(filter: INumberFilter | null, value: number): boolean;