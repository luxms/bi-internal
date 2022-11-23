import {IRawColor, IDisposable, IEntity, ISubspace, IVizelDescription, IValue, IUnit, IMetric, ILocation, IPeriod} from '../defs/bi'
import {IVizelConfig, IAxesOrder} from '../defs/types'


export function makeColor(c: IRawColor): string | null;

export module coloring {
    export interface IColor {
        toRGB(): RGBColor;

        toHSV(): HSVColor;

        add(d1: number, d2: number, d3: number): IColor;

        mul(x1: number, x2: number, x3: number): IColor;

        toString(): string;
    }
    export type IGradientColorStop = [number, string];
    interface IGradientColor {
        linearGradient: { x1: number; y1: number; x2: number; y2: number; };
        stops: IGradientColorStop[];
    }
    export type IGradientEchartsColorStop = {offset: number, color: string};
    interface IGradientEchartsColor {
        type: string,
        x: number,
        y: number,
        x2?: number,
        y2?: number,
        r?: number,
        colorStops: IGradientEchartsColorStop[];
        global: boolean
    }

    export class RGBColor implements IColor {
        public constructor(r, g, b);

        public toRGB(): RGBColor;

        public toHSV(): HSVColor

        public add(d1: number, d2: number, d3: number): IColor

        public mul(x1: number, x2: number, x3: number): IColor

        public static interpolateRGB(c1: RGBColor, c2: RGBColor, k: number): RGBColor

        public toString(): string
    }

    export class HSVColor implements IColor {
        public constructor(h: number, s: number, v: number);
        public clone(): HSVColor;

        /**
         * HSV to RGB color conversion
         *
         * H runs from 0 to 360 degrees
         * S and V run from 0 to 100
         *
         * Ported from the excellent java algorithm by Eugene Vishnevsky at:
         * http://www.cs.rit.edu/~ncs/color/t_convert.html
         */
        public toRGB(): RGBColor

        public add(d1: number, d2: number, d3: number): IColor

        public mul(x1: number, x2: number, x3: number): IColor

        public mulEx(x1: number, x2: number, x3: number): IColor

        public mulEx2(mh: number, ms: number, mv: number): IColor

        public toHSV(): HSVColor

        public toString(): string

        public static interpolateHSV(c1: HSVColor, c2: HSVColor, k: number): HSVColor
    }

    export function make(s: string): IColor

    export function makeGradient(gradientType: string, baseColor: string): IGradientColor
    export function makeEchartsGradient(gradientType: string, baseColor: string, chartType?: string): IGradientEchartsColor;
}


// Helper function: make plain config from tree-based object
export function makePlainConfig(treeConfig: any, prefix?: string): any

export module bi {

    function getAxisProjectionName(es: IEntity[])

    export function createSimpleSubspace(xs: IEntity[], ys: IEntity[], zs: IEntity[]): ISubspace

    export function createSimpleSubspaceXYZ(xs: IEntity[], ys: IEntity[], zs: IEntity[]): ISubspace

    export function createSimpleSubspaceZYX(zs: IEntity[], ys: IEntity[], xs: IEntity[]): ISubspace
}

export function subscribeServices(services: any[], callback: any, immediateNotify?: boolean): IDisposable

export function subscribeServicesAndNotify(services: any[], callback: any): IDisposable

//
// is-mergeable-object
//
export  function isMergeableObject(value);
export function isNonNullObject(value);
export function isSpecial(value);

/**
 *
 * Simple resize watcher that works with iframes
 *
 */
interface IResizeWatcherItem {
    container: HTMLElement;
    rect: ClientRect;
    callback: (container: HTMLElement) => any;
}

export function addResizeWatcher(container: HTMLElement, callback: (container: HTMLElement) => any): IDisposable;

export function markContinuousPeriodType<E extends IEntity>(es: E[], cpt: [number, number] | null): E[];

//
// Extracts n entities from entities array
// always extract last
//
export function nEntities<T extends IEntity>(es: T[], n: number): T[];

export function oneEntities<T extends IEntity>(es: T[]): T[];

export function oneEntity<T extends IEntity>(es: T[]): T;

export function allEntities<T extends IEntity>(es: T[]): T[];

export function makeEntities(...args: IEntity[]): IEntity[];


export function fixViewClass(viewClass: string, chartStyle: string): string;


export function parseVizelTypeString(str: string): IVizelDescription;


export function getSpreadoutVizelType(vizelTypeString: string): string;


export function getGroupVizelTypes(vizelGroup: string): string[]


// deprecated
export const MessageHub
export function lang(key: string, defaultValue?: string): string
export function formatDate(date, periodType)
export function formatNum(value: IValue, precision?: number): string
export function getMetricFormat(config, m)

// round and add unit/suffix to val19
export function makeValue(v: IValue, unit?: IUnit, digits?: number, config?: IVizelConfig, m?: IMetric)

export function ruKbdToEng(s: string): string

export function search(value: string, pattern: string): boolean

/**
 * Заменяет вхождения в строке начинающиеся на знак процента на их значения
 * @param str - исходная строка с заменой
 * @param patterns - шаблоны для замены и значения
 * @param [defaultFormats] - форматы для чисел
 */
export function stringSubstitute(str: string, patterns: { [id: string]: ((p: string, fmt?: string) => string | number | void) | string | number}, defaultFormats?: { [id: string]: string }): string

export function idify(s: string): string

export function idifyMany(ss: string[]): string[]



export function isSmallPhone(): boolean

export function IS_M(e: IEntity): e is IMetric;

export function IS_L(e: IEntity): e is ILocation;

export function IS_P(e: IEntity): e is IPeriod;

export function IS_MS(es: IEntity[]): es is IMetric[];

export function IS_LS(es: IEntity[]): es is ILocation[]

export function IS_PS(es: IEntity[]): es is IPeriod[]

export function FIND_M(z: IEntity, y: IEntity, x: IEntity): IMetric | null;

export function FIND_L(z: IEntity, y: IEntity, x: IEntity): ILocation | null;

export function FIND_P(z: IEntity, y: IEntity, x: IEntity): IPeriod;

export function FIND_MS(zs: IEntity[], ys: IEntity[], xs: IEntity[]): IMetric[] | null;

export function FIND_LS(zs: IEntity[], ys: IEntity[], xs: IEntity[]): ILocation[] | null;

export function FIND_PS(zs: IEntity[], ys: IEntity[], xs: IEntity[]): IPeriod[] | null;

export function binarySearch<T>(arr: T[], cmpWith: (a: T) => number): T;

export function makeAxesOrderFromArray(axes: string[]): IAxesOrder;

export function makeAxesOrderFromUrl(ao: string, loc?: boolean): IAxesOrder;

export function axesOrderStringify(ao: IAxesOrder): string;

export function axesOrderSwap(axesOrder: IAxesOrder, a1: string | number, a2: string | number): IAxesOrder;

export interface IAggregate {
    data: any[];
    put: (record: { [id: string]: string | number }) => IAggregate;
    get: (measure: string | number) => string | number | undefined;
}

// ф-ия агрегации для создания кеша осей x-y-z- aggregate
export function _aggregate(): IAggregate;

// вынимаю все данные из entity
export function getDataInAxis(axis: IEntity): { columns: string[], filters: { [id: string]: IValue[] } };
export function getMeasureId(xAxis: IEntity, yAxis: IEntity, zAxis?: IEntity): string | number ;

// вспомогательная ф-ия для лукапа
export function joinDataLookup(rows: Array<string | number>, columns: { name: string }[]): any;

/**
 * Исправляет конфигурацию меши в случае, если она задана по стандартам версии 1, как sum_column
 * @deprecated
 * @param formula
 */
export function fixMeasureFormula(formula: string): string;

/**
 * Пытается вытащить id из записи меши в конфиге разных видов - sum(column), func(column):id и т.д.
 * @param formula
 */
export function extractMeasureId(formula: string): string;
export function extractMeasureTitle(formula: string, columns: any[], style?: any): string;
export function makeResourceUrl(cfgUrl: string, schemaName: string): string;


/**
 * При необходимости возвращает строчку в кавычках
 * необходимость случается, когда есть неанглийские символы, либо разный регистр букв
 * @param s - название схемы/таблицы/столбца
 */
export function quotifySql(s: string): string;
