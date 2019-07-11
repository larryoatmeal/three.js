import {Object3D} from "./core/Object3D";
import {WebGLRenderer} from "./renderers/WebGLRenderer";
import {MeshBasicMaterial} from "./materials/MeshBasicMaterial";
import {RawShaderMaterial} from "./materials/RawShaderMaterial";
import {MeshStandardMaterial} from "./materials/MeshStandardMaterial";
import {OrthographicCamera} from "./cameras/OrthographicCamera";
import {PerspectiveCamera} from "./cameras/PerspectiveCamera";
import {AnimationMixer} from "./animation/AnimationMixer";
import {AnimationClip} from "./animation/AnimationClip";
import {KeyframeTrack} from "./animation/KeyframeTrack";



let m = new MeshBasicMaterial();
let y = new RawShaderMaterial();
let n2 = new MeshStandardMaterial();
let c = new OrthographicCamera();
let p2 = new PerspectiveCamera();

let anima = new AnimationMixer();
let clip = new AnimationClip();
let keyframe = new KeyframeTrack();
let n = new Object3D();
console.log(n);

let renderer = new WebGLRenderer();


