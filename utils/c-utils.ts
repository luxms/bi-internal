export interface IPkFontMetrics {
    fontStyle?: string;
    fontVariant?: string;
    fontWeight?: string;
    fontStretch?: string;
    fontSize?: number | string;
    lineHeight?: number | string;
    fontFamily?: string;
}

export declare function setFont(ctx: CanvasRenderingContext2D, fontMetrics?: IPkFontMetrics);

export declare function getTextWidth(text: string, fontMetrics?: IPkFontMetrics): number

interface TextMetricsExtend extends TextMetrics {
    height: number;
}

export declare function getTextSize(text: string, fontMetrics?: IPkFontMetrics): TextMetricsExtend


export declare function getSvgTextSize(text: string, fontMetrics?: IPkFontMetrics, viewBox?: {x: number, y: number, width: number, height: number}): DOMRect
export declare function usePrevious(value);
export declare function getAxisGap (axisTitle: string, axisLongestLabel: string, whatMeasure?: string, styleAxisTitle?: IPkFontMetrics, styleAxisLabel?: IPkFontMetrics)