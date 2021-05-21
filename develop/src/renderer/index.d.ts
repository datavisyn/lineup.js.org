import { AAggregatedGroupRenderer } from './AAggregatedGroupRenderer';
import { ANumbersCellRenderer } from './ANumbersCellRenderer';
import ActionRenderer from './ActionRenderer';
import AggregateGroupRenderer from './AggregateGroupRenderer';
import AnnotationRenderer from './AnnotationRenderer';
import BarCellRenderer from './BarCellRenderer';
import BooleanCellRenderer from './BooleanCellRenderer';
import BoxplotCellRenderer from './BoxplotCellRenderer';
import BrightnessCellRenderer, { toHeatMapColor } from './BrightnessCellRenderer';
import CategoricalCellRenderer from './CategoricalCellRenderer';
import CategoricalHeatmapCellRenderer from './CategoricalHeatmapCellRenderer';
import CategoricalStackedDistributionlCellRenderer from './CategoricalStackedDistributionlCellRenderer';
import CircleCellRenderer from './CircleCellRenderer';
import DateCellRenderer from './DateCellRenderer';
import DateHistogramCellRenderer from './DateHistogramCellRenderer';
import { DefaultCellRenderer } from './DefaultCellRenderer';
import DotCellRenderer from './DotCellRenderer';
import GroupCellRenderer from './GroupCellRenderer';
import HeatmapCellRenderer from './HeatmapCellRenderer';
import HistogramCellRenderer from './HistogramCellRenderer';
import ImageCellRenderer from './ImageCellRenderer';
import InterleavingCellRenderer from './InterleavingCellRenderer';
import LinkCellRenderer from './LinkCellRenderer';
import LinkMapCellRenderer from './LinkMapCellRenderer';
import LoadingCellRenderer from './LoadingCellRenderer';
import MapBarCellRenderer from './MapBarCellRenderer';
import MultiLevelCellRenderer from './MultiLevelCellRenderer';
import RankCellRenderer from './RankCellRenderer';
import SelectionRenderer from './SelectionRenderer';
import SetCellRenderer from './SetCellRenderer';
import SparklineCellRenderer from './SparklineCellRenderer';
import StringCellRenderer from './StringCellRenderer';
import TableCellRenderer from './TableCellRenderer';
import UpSetCellRenderer from './UpSetCellRenderer';
import VerticalBarCellRenderer from './VerticalBarCellRenderer';
import { wideEnough, wideEnoughCat, adaptTextColorToBgColor, adaptDynamicColorToBgColor } from './utils';
export { colorOf } from './impose';
export * from './interfaces';
export { renderMissingCanvas, renderMissingDOM } from './missing';
export declare const rendererClasses: {
    AAggregatedGroupRenderer: typeof AAggregatedGroupRenderer;
    ANumbersCellRenderer: typeof ANumbersCellRenderer;
    ActionRenderer: typeof ActionRenderer;
    AggregateGroupRenderer: typeof AggregateGroupRenderer;
    AnnotationRenderer: typeof AnnotationRenderer;
    BarCellRenderer: typeof BarCellRenderer;
    BooleanCellRenderer: typeof BooleanCellRenderer;
    BoxplotCellRenderer: typeof BoxplotCellRenderer;
    BrightnessCellRenderer: typeof BrightnessCellRenderer;
    CategoricalCellRenderer: typeof CategoricalCellRenderer;
    CategoricalHeatmapCellRenderer: typeof CategoricalHeatmapCellRenderer;
    CategoricalStackedDistributionlCellRenderer: typeof CategoricalStackedDistributionlCellRenderer;
    CircleCellRenderer: typeof CircleCellRenderer;
    DateCellRenderer: typeof DateCellRenderer;
    DateHistogramCellRenderer: typeof DateHistogramCellRenderer;
    DefaultCellRenderer: typeof DefaultCellRenderer;
    DotCellRenderer: typeof DotCellRenderer;
    GroupCellRenderer: typeof GroupCellRenderer;
    HeatmapCellRenderer: typeof HeatmapCellRenderer;
    HistogramCellRenderer: typeof HistogramCellRenderer;
    ImageCellRenderer: typeof ImageCellRenderer;
    InterleavingCellRenderer: typeof InterleavingCellRenderer;
    LinkCellRenderer: typeof LinkCellRenderer;
    LinkMapCellRenderer: typeof LinkMapCellRenderer;
    LoadingCellRenderer: typeof LoadingCellRenderer;
    MapBarCellRenderer: typeof MapBarCellRenderer;
    MultiLevelCellRenderer: typeof MultiLevelCellRenderer;
    RankCellRenderer: typeof RankCellRenderer;
    SelectionRenderer: typeof SelectionRenderer;
    SetCellRenderer: typeof SetCellRenderer;
    SparklineCellRenderer: typeof SparklineCellRenderer;
    StringCellRenderer: typeof StringCellRenderer;
    TableCellRenderer: typeof TableCellRenderer;
    UpSetCellRenderer: typeof UpSetCellRenderer;
    VerticalBarCellRenderer: typeof VerticalBarCellRenderer;
};
export declare const rendererUtils: {
    toHeatMapColor: typeof toHeatMapColor;
    noRenderer: {
        template: string;
        update: () => void;
    };
    wideEnough: typeof wideEnough;
    wideEnoughCat: typeof wideEnoughCat;
    adaptTextColorToBgColor: typeof adaptTextColorToBgColor;
    adaptDynamicColorToBgColor: typeof adaptDynamicColorToBgColor;
};
//# sourceMappingURL=index.d.ts.map