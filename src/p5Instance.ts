import { mySketch } from "./sketch";
import p5 from "p5";

export const p5Instance = new p5(mySketch, document.getElementById("sketch")!);