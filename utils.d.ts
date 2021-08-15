import {IEntity, ISubspace, IUnit, IValue} from "./defs/bi";


export interface IIdOwner {
    id: string | number;
}

export function oneEntity<T extends IEntity>(es: T[]): T

/**
 * Get Entity by id
 * @param {T[]} es entities array
 * @param {string | number} id entity id to search
 * @returns {T} entity or null
 */

export function $eid<T extends IIdOwner>(es: T[], id: string | number): T | null;

declare module bi {
    export function createSimpleSubspace(xs: IEntity[], ys: IEntity[], zs: IEntity[]): ISubspace;

    export function createSimpleSubspaceXYZ(xs: IEntity[], ys: IEntity[], zs: IEntity[]): ISubspace;

    export function createSimpleSubspaceZYX(xs: IEntity[], ys: IEntity[], zs: IEntity[]): ISubspace;
}

export function formatNum(value: IValue, precision?: number): string;

export function makeValue(v: IValue, unit?: IUnit, digits?: number): string;

export function isRed(metricValue: number, colorValue: number, normValue: number, normInvert: boolean): boolean;