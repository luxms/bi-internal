import {BaseService} from "./defs/BaseService";

/**
 * IAppConfig
 */

interface IAppConfig {
    loading: boolean;
    error: string;
    requestUrls: any;
    projectTitle: string;
    locale: string;
    language: 'en' | 'ru';
    region: string;
    features: string[];
    plugins: string[];
    dataset: any;
    map: any;
}

export declare class AppConfig extends BaseService<IAppConfig> {
    constructor();

    setAppConfig(rawAppConfig: any): void;

    hasFeature(featureName: string): boolean;

    fixRequestUrl(url: string): string;

    static getInstance: () => AppConfig;

    static getModel(): IAppConfig;

    static fixRequestUrl(url: string): string;

    static hasFeature(featureName: string): boolean;

    static getProjectTitle(): string;

    static getLocale(): string;

    static getLanguage(): 'en' | 'ru';

    static getPlugins(): string[];
}

/**
 * UrlState
 */


export class UrlState {
}

/**
 * urlState
 */

export var urlState: any;

