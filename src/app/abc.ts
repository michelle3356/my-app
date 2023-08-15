type OOO = {
    a: number;
    b: boolean;
    c: string;
}


const a: number = 1;
let b: boolean;
let s: string;

let obj: OOO = {
    a: 1,
    b: true,
    c: '123',
}

/**
 * @param a is a number
 * @param b is other number
 * @returns return a sum stringify
 */
function sum(a: number, b: number): string {
    return (a + b).toString();
}

sum(1, 2)

/** @deprecated */
let dddd = 1;


console.log(dddd + 1);