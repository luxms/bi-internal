import { BaseService } from "./core/BaseService";
import React = require("./defs/react");
import {IVizelConfig, IDatasetModel} from './defs/types';
import {data_engine} from './defs/data-manip'
interface IBIIconProps {
    icon?: string;
    text?: string;
    className?: string;
    href?: string;                // if set, then <a>
    style?: any;
    onPress?: any;
    hint?: string;
    shape?: string;               // circle
    onDragOver?: any;
    onDragLeave?: any;
    onDrop?: any;
    target?: string;
}
export declare class BIIcon extends React.PureComponent<IBIIconProps>{
    public constructor(props:IBIIconProps)
}
interface IExpandableSearchProps {
    onSearchTermChanged: (searchTerm: string) => any;
    onToggleExpanded?: (expanded: boolean) => any;
}

export declare class ExpandableSearch extends React.Component<IExpandableSearchProps>{
    public constructor(props:IExpandableSearchProps)
}
interface IVizelElementProps {
    model?: any;
    dp?: data_engine.IDataProvider;
    cfg: IVizelConfig;
    style?: any;
}
export class VizelElement extends React.Component<IVizelElementProps>{
    public constructor(props:IVizelElementProps)
}

export function WpLoadingIcon(): React.FC;

export interface IDlgShareWithUserProps {
    onClosePress: () => void;
    share: (user: any) => Promise<any>;
    title: string;
    noUsersError: string;
    users: any[];
    selectedUsers?: any[];
    loading: boolean;
    error: string;
}

export class DlgShareWithUser extends React.Component<IDlgShareWithUserProps>{
    public constructor(props:IDlgShareWithUserProps)
}

export enum AlertType {
    NEWS = 'news',
    INFO = 'info',
    INFO_IMPORTANT = 'info_important',
    SUCCESS = 'success',
    DANGER = 'danger',
    WARNING = 'warning',
}

export interface IAlert {
    type: AlertType;
    title?: string;
    description: string;
    stackId?: string;
    onPressClose?: () => void;
    created?: number;
}


export interface IAlertsVM {
    loading: boolean;
    error: string | null;
    alertItems: IAlert[];
}

export class AlertsVC extends BaseService<IAlertsVM> {
    private constructor();

    public static getInstance(): AlertsVC;

    public pushNewsAlert(description: string, title?: string, timeout?: number): void

    public pushInfoAlert(description: string, title?: string, timeout?: number): void

    public pushSuccessAlert(description: string, title?: string, timeout?: number): void

    public pushDangerAlert(description: string, title?: string, timeout?: number): void

    public pushWarningAlert(description: string, title?: string, timeout?: number): void

    public static pushAlert(rawAlert: IAlert): void

    public static pushNewsAlert(description: string, title?: string, timeout?: number): void

    public static pushInfoAlert(description: string, title?: string, timeout?: number): void

    public static pushSuccessAlert(description: string, title?: string, timeout?: number): void

    public static pushDangerAlert(description: string, title?: string, timeout?: number): void

    public static pushWarningAlert(description: string, title?: string, timeout?: number): void
}

export class MenuItem {
    public constructor(dataset: IDatasetModel, title: string, action: any)
}

export interface IPopupPosition {
    left?: number;
    top?: number;
    right?: number;
}

export interface IPopupMenuItem {
    title: string;
    onPress: () => void;
}


export interface IPopupVM extends IPopupPosition {
    loading?: boolean;
    error?: string;
    visible: boolean;
    // content
    dialogVM: any;
    description: string;
    menuItems: IPopupMenuItem[];
    // events
    onClose: () => void;
}

export class PopupVC extends BaseService<IPopupVM> {

    private constructor();

    public static getInstance(): PopupVC;

    public showDialog(dlgVC: any, position: IPopupPosition, onClose?: any): void ;

    public hideDialog(dlgVC: any): void ;

    public showDescription(description: string, position: IPopupPosition): void;

    public toggleDescription(description: string, position: IPopupPosition): void;

    public showContextMenu(menuItems: IPopupMenuItem[], position: IPopupPosition): void ;
    //
    // static helpers
    //
    public static hideDialog(dlgVC: any): void ;

    public static showDialog(dlgVC: any, position: IPopupPosition, onClose?: any): void ;

    public static showContextMenu(menuItems: IPopupMenuItem[], position: IPopupPosition): void ;

    public static showDescription(description: string, position: IPopupPosition): void;
}



export class ModalContainer extends React.Component<any> {
    public constructor(props:any)
}

declare const modalContainer: ModalContainer;

export interface IOpenModalVM {
    loading: boolean;
    error: string;
    reactEl: React.ReactElement;
    args: any;
    options: any;
}

export interface IOpenModalVMOpt {
    cancelWrapper?: boolean;   // default = true,  закрытие модального окна по клику на wrapper
    hiddenWrapper?: boolean;   // default = false,  наличие wrapper'a
    style?: { [id: string]: string | number };
    className?: string;
    // ... todo дальнейшее расширение
}

export class OpenModalVC extends BaseService<IOpenModalVM> {
    public static getInstance(): OpenModalVC
    
    private constructor()

    public setVizel (reactEl: React.ReactElement, options?: IOpenModalVMOpt): void

    // чтобы в catch перехватить 'ошибку'
    public onModalCancel(args: any): void

    public onModalResult(args: any): void

}

interface IOpenModalContainerProp {
    children: React.ReactElement | null;
    options: IOpenModalVMOpt;
}

export class OpenModalContainer extends React.Component<IOpenModalContainerProp, any> {
    public constructor(props: IOpenModalContainerProp)
}

interface IVirtualListProps {
    className?: string;
    items: {length: number};                                                                          // array-like
    renderItem: (item: any, idx: number) => any;
    defaultsize?: number;
}

export class VirtualList extends React.Component<IVirtualListProps> {
    public constructor(props: IVirtualListProps)
}
