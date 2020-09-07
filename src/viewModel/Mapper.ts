import { IEdgeViewModel, INodeViewModel } from "./IViewModel";

export class Mapper {

    constructor(options: any) { console.log('Mapper init...'); }

    mapData(rows: any[]) {
        let nodes: INodeViewModel[] = [], edges: IEdgeViewModel[] = [];
        rows.forEach((n, idx) => {
            let src: INodeViewModel = { uuid: n['src'] }, tgt: INodeViewModel = { uuid: n['tgt'] };
            nodes.push(src);
            nodes.push(tgt);
            edges.push({ v: src, w: tgt });
        })
        return { nodes: nodes, edges: edges };
    }
}