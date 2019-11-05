//@todo needs clean up Consider using undersore js.

// addClass

// removeClass

// contains

// toggle

/**
 * Removes an element from an array.
 * @param {Array} a The haystack
 * @param {String} e The needle to remove
 * @return {Array} a new array
 */
export const removeElement = (a, e) => {
    return a.filter( v => v !== e );
}

export const addElement = (a, e) => {
    return a.push(e);
}

/**
 * Adds a unique element to an array.
 * @param {Array} a
 * @param {string} e
 */
export const addUniqueElement = (a, e) => {
    if (!a.includes(e)) {
        a.push(e);
    }
}

export const replaceElement = (a, e, n) => {
    if (a.includes(e)) {
        a[a.indexOf(e)] = n;
    } else{
        a.push(n);
    }
}

/**
 * Returns a array of unique values.
 * @param {Array} a
 * @return {Array} Set of unique values
 */
export const unique = (a) => {
    return [...new Set(a)]
}


