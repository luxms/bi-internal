export * from './utils/utils'
export * from './utils/list';
export * from './utils/c-utils'

import {mouseWatcher} from './utils/MouseWathcer';
import {DrilldownMenu} from './utils/dd-menu';

declare module 'wellknown' {
    function parse(wktString: string): any;
}
export function lpeRun(lpeCode: any, ctx: any): any

export declare function formatNumberWithString(value: number, format: string)

export {mouseWatcher, DrilldownMenu}
