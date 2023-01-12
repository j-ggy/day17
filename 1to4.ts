// 1) 
const stringArray = ["at first", "I was afraid", "I was petrified"]

function stringy(array: string[]) {
    for(let i=0; i < array.length; i++) {console.log(array[i]);}
}
stringy(stringArray);

// 2) 
const numArray = [45, 23, 8]

function numby(array: number[]) {
    let sum = 0;
    for (let i=0; i < array.length; i++) {sum += array[i];}
    return sum;
}
console.log(numby(numArray));

// 3) 
const words = "Gorgonzola"

function promFunc (text: string): Promise<string> {
    return new Promise((resolve) => resolve("hello " + text))
}
console.log(promFunc(words));

// 4) 
const mixArray = [50, "forty", true]

function checkMix (array: Array<number|string|boolean>) {
    for (let item of array) {
        if (typeof item === 'number') {
            console.log(item + " is a number")
        } else if (typeof item === 'string') {
            console.log(item + " is a string")
        } else if (typeof item === 'boolean') {
            console.log(item + " is a boolean")
        }
    }
}
checkMix(mixArray);