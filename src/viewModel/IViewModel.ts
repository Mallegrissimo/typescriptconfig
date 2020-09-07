export class INodeViewModel {
    //meta data 
    public uuid: string;
}

export class IEdgeViewModel {
    public v: INodeViewModel;
    public w: INodeViewModel;

    //selection properties
    public highlight?: boolean;
}

export class IDataViewModel {
    public nodes: INodeViewModel[];
    public edges: IEdgeViewModel[];
}
