/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let newarr: number[] = [];
    if (numbers.length >= 2) {
        newarr.push(numbers[0]);
        newarr.push(numbers[numbers.length - 1]);

        return newarr;
    } else if (numbers.length === 1) {
        newarr.push(numbers[0]);
        newarr.push(numbers[0]);

        return newarr;
    } else {
        return newarr;
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((number: number): number => number * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    return numbers.map((text: string): number => {
        const parsed = Number.parseInt(text, 10);
        if (Number.isNaN(parsed)) {
            return 0;
        } else {
            return parsed;
        }
    });
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    return amounts.map((amount: string): number => {
        let cleaned = amount;
        if (amount.startsWith("$")) {
            cleaned = amount.slice(1);
        }

        const parsed = Number.parseInt(cleaned, 10);
        if (Number.isNaN(parsed)) {
            return 0;
        } else {
            return parsed;
        }
    });
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const noQuestions = messages.filter((message: string): boolean => {
        return !message.endsWith("?");
    });

    const fixed = noQuestions.map((message: string): string => {
        if (message.endsWith("!")) {
            return message.toUpperCase();
        } else {
            return message;
        }
    });

    return fixed;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const shortWords = words.filter((word: string): boolean => {
        return word.length < 4;
    });
    return shortWords.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    return colors.every((color: string): boolean => {
        return color === "red" || color === "blue" || color === "green";
    });
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const sum = addends.reduce((total: number, num: number): number => {
        return total + num;
    }, 0);

    if (addends.length === 0) {
        return "0=0";
    }

    const leftSide = sum.toString();
    const rightSide = addends.join("+");
    return leftSide + "=" + rightSide;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const firstNegativeIndex = values.findIndex((value: number): boolean => {
        return value < 0;
    });

    if (firstNegativeIndex === -1) {
        const totalSum = values.reduce((total: number, num: number): number => {
            return total + num;
        }, 0);
        return [...values, totalSum];
    }

    const beforeNegative = values.slice(0, firstNegativeIndex);

    const sumBeforeNegative = beforeNegative.reduce(
        (total: number, num: number): number => {
            return total + num;
        },
        0,
    );

    const result = [...values];
    result.splice(firstNegativeIndex + 1, 0, sumBeforeNegative);
    return result;
}
