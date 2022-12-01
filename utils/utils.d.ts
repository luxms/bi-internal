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

/**
 * @param {T[]} es - массив сущностей
 * @param {number} n - кол-во извлекаемых э-ов
 * @description Извлекает из массива сущностей n-элементов, всегда с конца массива
 */
export function nEntities<T extends IEntity>(es: T[], n: number): T[];

/**
 * @param {T[]} es - массив сущностей
 * @return {T[]}
 * @description Извлекает из массива сущностей последний элемент массива
 */
export function oneEntities<T extends IEntity>(es: T[]): T[];

/**
 * @param {T[]} es - массив сущностей
 * @return {T | null}
 * @description Извлекает из массива сущностей последний элемент массива
 */
export function oneEntity<T extends IEntity>(es: T[]): T;

/**
 * @param {string} viewClass - тип группы визеля
 * @param {string} chartStyle - тип визуализации
 * @return {string} - отдает тип визуализации в формате (типГруппы.типВизеля)
 * @description Принимает тип группы визезя, и тип визуализаци
 */
export function fixViewClass(viewClass: string, chartStyle: string): string;

/**
 * @param {string} str - строка вида 'I1I.vizel>vizel' или 'vizel/vizel'
 * @description Парсит строку типа визеля на объект. Находит группу, тип визеля, внутренний визель ...
 */
export function parseVizelTypeString(str: string): IVizelDescription;

export function getSpreadoutVizelType(vizelTypeString: string): string;

/**
 * @param {string} vizelGroup - строка типа группы визеля 1II,1I1,111...
 * @description Возвращает массив типов визеля входящий в группу визелей
 */
export function getGroupVizelTypes(vizelGroup: string): string[]

/**
 * @param {string} key - ключ для файла локализации
 * @param {string} defaultValue - возвращает defaultValue, если файла локализации не найдено, или нет такого ключа.
 * @description Функция перевода, ключи лежат в файле локализации
 */
export function lang(key: string, defaultValue?: string): string
export function formatDate(date, periodType)
export function formatNum(value: IValue, precision?: number): string
export function getMetricFormat(config, m)

// round and add unit/suffix to val19
export function makeValue(v: IValue, unit?: IUnit, digits?: number, config?: IVizelConfig, m?: IMetric);

/**
 * @param {string} value - строка обработки
 * @param {string} pattern - вхождение символов
 * @description умеет искать вхождения с ошибкой ввода переключения языка ( search("найди меня",'yfq')=>true)
 */
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

/**
 * @param e - IEntity
 * @description проверяет пришёл ли ей объект, и имеет ли этот объект ключ axisId === 'metrics'
 */
export function IS_M(e: IEntity): e is IMetric;

/**
 * @param e - IEntity
 * @description проверяет пришёл ли ей объект, и имеет ли этот объект ключ axisId === 'locations'
 */
export function IS_L(e: IEntity): e is ILocation;

/**
 * @param e - IEntity
 * @description проверяет пришёл ли ей объект, и имеет ли этот объект ключ axisId === 'periods'
 */
export function IS_P(e: IEntity): e is IPeriod;

/**
 * @param es - IEntity[]
 * @description проверяет пришёл ли ей массив, и у первого эл-т массива проверяет ключ axisId === 'metrics'
 */
export function IS_MS(es: IEntity[]): es is IMetric[];

/**
 * @param es - IEntity[]
 * @description проверяет пришёл ли ей массив, и у первого эл-т массива проверяет ключ axisId === 'locations'
 */
export function IS_LS(es: IEntity[]): es is ILocation[]

/**
 * @param es - IEntity[]
 * @description проверяет пришёл ли ей массив, и у первого эл-т массива проверяет ключ axisId === 'periods'
 */
export function IS_PS(es: IEntity[]): es is IPeriod[]

/**
 * @param z - IEntity
 * @param y - IEntity
 * @param x - IEntity
 * @description ищет среди 3х объектов, объект с ключом axisId === 'metrics', идет по порядку z-y-x
 */
export function FIND_M(z: IEntity, y: IEntity, x: IEntity): IMetric | null;

/**
 * @param z - IEntity
 * @param y - IEntity
 * @param x - IEntity
 * @description ищет среди 3х объектов, объект с ключом axisId === 'locations', идет по порядку z-y-x
 */
export function FIND_L(z: IEntity, y: IEntity, x: IEntity): ILocation | null;

/**
 * @param z - IEntity
 * @param y - IEntity
 * @param x - IEntity
 * @description ищет среди 3х объектов, объект с ключом axisId === 'periods', идет по порядку z-y-x
 */
export function FIND_P(z: IEntity, y: IEntity, x: IEntity): IPeriod;

/**
 * @param zs - IEntity[]
 * @param ys - IEntity[]
 * @param xs - IEntity[]
 * @return {IMetric[] | null}
 * @description ищет среди 3х массивов объектов, массив объектов с ключом axisId === 'metrics'
 */
export function FIND_MS(zs: IEntity[], ys: IEntity[], xs: IEntity[]): IMetric[] | null;

/**
 * @param zs - IEntity[]
 * @param ys - IEntity[]
 * @param xs - IEntity[]
 * @return {ILocation[] | null}
 * @description ищет среди 3х массивов объектов, массив объектов с ключом axisId === 'locations'
 */
export function FIND_LS(zs: IEntity[], ys: IEntity[], xs: IEntity[]): ILocation[] | null;

/**
 * @param zs - IEntity[]
 * @param ys - IEntity[]
 * @param xs - IEntity[]
 * @return {IPeriod[] | null}
 * @description ищет среди 3х массивов объектов, массив объектов с ключом axisId === 'periods'
 */
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

/**
 * @param {IEntity} axis - сущность оси
 * @description Вынимает все данные с сущности оси, игнорируя measures
 */
export function getDataInAxis(axis: IEntity): { columns: string[], filters: { [id: string]: IValue[] } };

/**
 * @param {IEntity} xAxis - сущность оси
 * @param {IEntity} yAxis - сущность оси
 * @param {IEntity} zAxis - сущность оси
 * @description ищет на осях в массиве axisIds measures - и возвращает его id
 */
export function getMeasureId(xAxis: IEntity, yAxis: IEntity, zAxis?: IEntity): string | number ;

/**
 * @description вспомогательная ф-ия для лукапа, для разбития данных по осям
 */
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

/**
 * @param {string} formula - формула мешы
 * @param {Array}  columns - массив объектов, c ключом 'name' встречающийся в формуле
 * @param {object} style - стили из конфига datasource
 * @description Функция ищет title, встречающийся в формуле, ищет в массиве columns + ищет в style
 */
export function extractMeasureTitle(formula: string, columns: { id: IValue, title: string, name?: string }[], style?: any): string;

/**
 *
 * @param {string} cfgUrl - url из конфига визеля
 * @param {string} schemaName - имя датасет
 * @description Формирует ссылку на ресурсы исходя из конфига визеля
 */
export function makeResourceUrl(cfgUrl: string, schemaName: string): string;


/**
 * При необходимости возвращает строчку в кавычках
 * необходимость случается, когда есть неанглийские символы, либо разный регистр букв
 * @param s - название схемы/таблицы/столбца
 */
export function quotifySql(s: string): string;
