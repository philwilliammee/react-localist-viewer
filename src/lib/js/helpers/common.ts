import { AppProps, Department } from "../../types/types";
import { Props } from "../components/organisms/LocalistView";

/**
 * Removes an element from an array.
 * @param {Array} a The haystack
 * @param {String} e The needle to remove
 * @return {Array} a new array
 */
export const removeElement = (a: string[] | undefined, e: string) => {
  if (!a) {
    return;
  }
  return a.filter((v) => v !== e);
};

/**
 * Adds a unique element to an array.
 * @param {Array} a
 * @param {string} e
 */
export const addUniqueElement = (a: string[] | undefined, e: string) => {
  if (!a) {
    return [e];
  }
  if (!a.includes(e)) {
    a.push(e);
  }
  return a;
};

/**
 * Adds a unique object to an array.
 * @param {Array} a
 * @param {object} o
 */
export const addUniqueObj = (a: Department[], o: Department) => {
  if (!("id" in o)) {
    console.warn("element id required");
    return;
  }
  if (!a.find((object) => object.id === o.id)) {
    a.push(o);
  }
};

/**
 * Test to see if element should be displayed
 * @param {mixed} v string or integer.
 * @return {boolean}
 */
export const isHidden = (v: string | number | undefined) => {
  return v === "true" || v === 1;
};

export const isNotHidden = (v: string | number | undefined) => {
  return !isHidden(v);
};

export const isNested = (obj: any, ...args: string[]) => {
  return args.reduce((obj, level) => obj && obj[level], obj);
};

export const truncateString = (str: string, num: number) => {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  }

  return str;
};

export function getQueryId(props: AppProps | Props) {
  return [props.depts, props.api, props.format];
}

export function createMarkup(markup: string) {
  return { __html: markup };
}

// export const addElement = (a, e) => {
//     return a.push(e);
// }

// export const replaceElement = (a, e, n) => {
//     if (a.includes(e)) {
//         a[a.indexOf(e)] = n;
//     } else{
//         a.push(n);
//     }
// }

// /**
//  * Returns a array of unique values.
//  * @param {Array} a
//  * @return {Array} Set of unique values
//  */
// export const unique = (a) => {
//     return [...new Set(a)]
// }
