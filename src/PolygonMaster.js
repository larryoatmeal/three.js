import {Arena} from "../../polygon/polygon.js";

export class PolygonMaster{

	init(wasm){

		this.wasm = wasm;
		this.ready = true;

		this.arena = Arena.new();
	}

	talk(){

	}

	// createGameObject(){
	//
	//
	// 	return GameObject.new();
	// }
	//



}

export let PolygonMasterGlobal = new PolygonMaster();
