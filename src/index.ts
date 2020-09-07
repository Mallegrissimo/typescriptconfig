import { Mapper } from "./viewModel/Mapper";
import { IDataViewModel } from "./viewModel/IViewModel";

console.log('Hello World');
const new_p: HTMLElement = document.createElement("p");
new_p.appendChild(document.createTextNode("Update count:"));


let mapper = new Mapper({});
let vm: IDataViewModel = mapper.mapData([{ src: 1, tgt: 2 }, { src: 1, tgt: 3 }, { src: 2, tgt: 4 }]);
console.log(vm);