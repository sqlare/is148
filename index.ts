/**
 * is148
 * @param value - The value to check.
 * @returns true if the value is 148, false otherwise.
 * @example
 * ```ts
 * import is148 from 'is148'; // or import { is148 } from 'is148';
 * 
 * console.log(is148(148)); // true
 * console.log(is148(147)); // false
 * console.log(is148('148')); // true
 * console.log(is148('147')); // false
 */
export function is148(value: any): value is 148 {
     return value == 148;
 }
 
 export default is148;
 