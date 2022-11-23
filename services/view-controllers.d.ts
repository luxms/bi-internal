import {BaseService} from '../core/BaseService'
import { IDatasetModel, IDsState, IDsStateService } from '../defs/types';

export interface ISearchVM {
    loading: boolean;
    error: string;
    search: string;
}

export class SearchVC extends BaseService<ISearchVM> {
    protected constructor();
    public static getInstance ():SearchVC;
    public setSearch(search: string):void;
}

export interface IDsShellVM {
    viewClassId: 'DsShell';
    loading?: boolean;
    error?: string;
    id: string;
    schema_name: string;
    schemaName: string;
    eastPanel: any;
    westPanel: any;
    northPanel: any;
    eastPanelEnabled: boolean;
    westPanelEnabled: boolean;
    northPanelEnabled: boolean;
    datasetTitle: string;
    datasetDescriptionHTML: string;
    datasetUrl: string;
    route: string;                        // TODO: remove
    // children
    toggleEastPanel?: () => void;
    toggleWestPanel?: () => void;
    toggleNorthPanel?: () => void;
    dataset: IDatasetModel;
    state: IDsStateService;
    key: string;
}


interface IDepsModels {
    dsState: IDsState;
}
export interface IAdmShellVM {
    loading?: boolean;
    error?: string;
    viewClassId: 'AdmShell';
}

export interface IShellVM {
    loading: boolean;
    error: string;
    authenticated: boolean;
    authError: string | null;
    isAuthenticationBlocked: boolean;
    popup?: IPopupVM;
    segment: IDsShellVM | IRootVM | IAdmShellVM;
}

export class ShellVC extends BaseService<IShellVM> {
    public constructor();
    protected _onDepsUpdated(newDepsModels: IDepsModels, prevDepsModels: IDepsModels): boolean;
}

export class DsShellVC extends BaseService<IDsShellVM> {
    public id: string;
    public constructor(dsId: string);

    protected _onDepsReadyAndUpdated(depsModels: IDepsModels, prevDepsModels: IDepsModels);
}

export interface IThemeVM {
    error: string;
    loading: boolean;
    themes: any;
    currentTheme: any;
    currentThemeId: string;
}

export class ThemeVC extends BaseService<IThemeVM> {
    protected constructor();
    public static getInstance():ThemeVC;
    public setTheme(currentThemeId: string): void;
    public static applyThemeToElement(themeId: string, theme: any, element: HTMLElement): void;
}