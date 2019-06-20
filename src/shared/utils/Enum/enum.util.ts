/*!
MIT License
Copyright (c) 2018 Martin Hochel
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

/**
 * Extracts union type from tuple
 * @example
 * type Tuple = [number, string, boolean];
 * // $ExpectType number | string | boolean
 * type Test = UnionFromTuple<Tuple>;
 */
export type UnionFromTuple<T> = T extends (infer U)[] ? U : never;

/**
 * Enum function to create type safe immutable object map with runtime presence
 *
 * @param args - Enum keys
 *
 * @example
 * // $ExpectType Readonly<{ No: "No"; Yes: "Yes"; }>
 * const AnswerResponse = Enum('No', 'Yes');
 *
 * // $ExpectType Readonly<{ RED: "RED"; GREEN: "GREEN"; BLUE: "BLUE"; }>
 * const Colors = Enum('RED', 'GREEN', 'BLUE');
 */
export const Enum = <T extends string[]>(...args: T) => {
    return Object.freeze(args.reduce((acc, next) => {
        return {
            ...acc,
            [next]: next,
        };
    }, Object.create(null)) as { [P in UnionFromTuple<typeof args>]: P });
};

/**
 * Use for getting literal type out of const myEnum = Enum(...) if you need it and export via token merge.
 * @example
 * // $ExpectType Readonly<{ No: "No"; Yes: "Yes"; }>
 * export const AnswerResponse = Enum('No', 'Yes');
 * // $ExpectType 'No' | 'Yes'
 * export type AnswerResponse = Enum(typeof AnswerResponse);
 *
 * // consumer.ts
 * import {AnswerResponse} from './enums';
 * export const respond = (recipient: string, message: AnswerResponse) => { };
 *
 * // usage.ts
 * import {respond} from './consumer';
 * import {AnswerResponse} from './enums';
 *
 * respond('Johnny 5','Yes');
 * respond('Johnny 5', AnswerResponse.No);
 */
export type Enum<T extends object> = T[keyof T];
