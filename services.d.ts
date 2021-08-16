import {
    IAxesOrder, IDashboard, IDashlet,
    IDatasetModel, IEntity, IGeo,
    IKoobDimension,
    IKoobMeasure,
    ILocation,
    IMapFill,
    IMetric,
    IPeriod, IPeriodInfo,
    IPreset
} from "./defs/bi";
import {BaseService} from "./defs/BaseService";
import {IUrl} from "./core";
import {IDisposable} from "./defs/Observable";
import {tables} from "./defs/tables";
import {KnockoutObservable} from "./defs/knockout";

export interface IDatasetServiceModel {
    loading: boolean;
    error: string;
    dataset: IDatasetModel;
}

export interface IAuthentication {
    authenticated: boolean;
    userId?: number;
    access_level?: string;
    username?: string;
    name?: string;
    loading: boolean;
    error: string;
    userConfig?: {
        [key: string]: string;
    };
    isNeed2FACode?: boolean;
    isBlocked?: boolean;
    errorKey?: string;
    errorMessage?: string;
}

export interface IDataSource {
    koob: string;
    measures: string[];
    dimensions: string[];
    filters: { [key: string]: string[] }
}

export interface IKoobModel {
    loading?: boolean;
    error?: string;
    dimensions: IKoobDimension[];
    measures: IKoobMeasure[];
}

export interface IDsState {
    loading?: boolean;
    error?: string;
    //
    autoscale: boolean;
    chartType: string;
    dash: IDashlet;
    dboard: IDashboard;
    geo: IGeo;
    locations: ILocation[];
    formulaLocations: ILocation[];
    axesOrder: IAxesOrder;
    mapfill: IMapFill;
    metrics: IMetric[];
    periodInfo: IPeriodInfo;
    periods: IPeriod[];
    preset: IPreset;
    route: string;
    mapMetricsPanelVisible: boolean;
    datasetTitle: string;
    datasetDescriptionHTML: string;
    dataset: IDatasetModel;
}

interface IAuthCheckData2 {
    sessionId: string;
    user: IRawUser;
    authType?: string;
}

interface IAuthCheckData3 {
    access_level: string;
    id: string;
    name: string;
    authType?: string;
    config: IRawUserConfig;
}

export interface IRawUser {
    id: number;
    name: string;
    email: string;
    username: string;
    config?: IRawUserConfig;
}

export declare type IRawUserConfig = {
    [key: string]: string;
};

export interface IDatasetsListModel {
    loading: boolean;
    error: string;
    datasets: IDatasetsListItem[];
    roots: IDatasetsListItem[];
}

export interface IDatasetsListTile {
    dataset: IDatasetsListItem;
    percentage: {
        x: number;
        y: number;
        w: number;
        h: number;
    };
}

export interface IDatasetsListItem extends IEntity {
    id: string;
    guid: string;
    schema_name: string;
    title: string;
    description: string;
    layout: string;
    image: string;
    lastPeriodTitle: string;
    href: string;
    color: string;
    tiles: IDatasetsListTile[];
    bookmarks: any[];             // tables.IBookmark[]
    searchVisible: boolean;       // TODO: remove
    children: IDatasetsListItem[];
    resourcesRoot: string;
    parents: IDatasetsListItem[];
    uiCfg: any;

    deleteBookmark(bookmark: tables.IBookmark);
}


/**
 * all services
 */

export declare class DatasetService extends BaseService<IDatasetServiceModel> {
    private readonly _datasetId: string | number;

    public constructor(datasetId: string | number)

    public static create(id: string | number): DatasetService;

    public static createInstance(id: string | number): DatasetService;
}

export declare class DataService extends BaseService<any> {
    public constructor(dataSource: IDataSource, appContext: any)
}

export declare class CurrentDsStateService extends BaseService<IDsState> {
    public static getModel(): IDsState;

    public static subscribeUpdatesAndNotify(listener: (model: IDsState) => void): IDisposable;

    public static unsubscribe(listener: (...args: any[]) => any): boolean;

    public static getInstance(): CurrentDsStateService;

}

export declare class DsStateService extends BaseService<IDsState> {
    public static createInstance(id: string | number): DsStateService

    public getMaxParametersNumber(): number;

    public getMaxLocationsNumber(): number;

    public _getPreset(dataset: IDatasetModel, url: IUrl): IPreset;

    public _getMetrics(dataset: IDatasetModel, url: IUrl): IMetric[];

    public getDataset(): IDatasetModel

    public setFormulaLocations(locations: ILocation[], skipCheck?: boolean): void;

    public setMetrics(metrics: IMetric[], skipCheck?: boolean): void;

    public setAxesOrder(axesOrder: IAxesOrder): void

    public setPeriods(start: IPeriod, end: IPeriod, pt: number)

    public setGeo(newGeo: IGeo): void;

    public setPreset(preset: IPreset): void

    public setDboard(db): void

    public setDash(dash): void

    public setChartType(chartType: string): void

    public setMapfill(mapfill: IMapFill): void

    public setAutoscale(value): void

    public setMapMetricsPanelVisible(mapMetricsPanelVisible: boolean): void

    public removeFormulaLocation(location: ILocation): void

    public _removeFormulaLocation(location: ILocation): void

    public removeMetric(metric: IMetric): void;

    public toggleFormulaLocation(location: ILocation): void;

    public toggleParameter(metric: IMetric): void;

    public isActive(): boolean

    public goToPlots(extra?: any): void


}

export declare class KoobService extends BaseService<IKoobModel> {
    public readonly id: number | string;
    public readonly _detailedEntities: { [entityId: string]: string[] | null };
    public static _koobServices: { [id: string]: KoobService };

    public static createInstance(id: string | number): KoobService;

    public loadEntityDetails(entityId: string): Promise<void>;
}

export declare class AuthenticationService extends BaseService<IAuthentication> {
    private constructor();

    private _init;

    protected _setModel(m: IAuthentication): void;

    isAuthenticated(): boolean;

    private _check;

    check(): Promise<IAuthCheckData2 | IAuthCheckData3>;

    private _notifyLoggedOut;

    signIn(username: string, password: string): Promise<IAuthentication>;

    signOut(): Promise<any>;

    resendCode(): Promise<any>;

    signInWithCode(code: string): Promise<any>;

    static readonly NOT_AUTHENTICATED: string;
    static FORCE_LOGIN_KEY: string;
    static getInstance: () => AuthenticationService;

    static getModel(): IAuthentication;

    static subscribeUpdatesAndNotify(listener: (model: IAuthentication) => void): IDisposable;

    static subscribeUpdates(listener: (model: IAuthentication) => void): IDisposable;

    static unsubscribe(listener: (...args: any[]) => any): boolean;

    static signOut(): Promise<any>;

    static signInWithCode(code: string): Promise<any>;

    static signIn(username: string, password: string): Promise<IAuthentication>;

    static resendCode(): Promise<any>;
}

export declare class DatasetsListService extends BaseService<IDatasetsListModel> {
    public static getModel(): IDatasetsListModel

    public static subscribeUpdatesAndNotify(listener: (model: IDatasetsListModel) => void): IDisposable

    public static unsubscribe(listener: (...args: any[]) => any): boolean
}

export const  RZD_SEARCH_LOCATION: KnockoutObservable<ILocation>




