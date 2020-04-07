
/**
 * Round number to a certain number of decimal digits.
 * @param num the number to round
 * @param digits optional number of digits
 */
export function round(num: number, digits?: number) {
    if (!digits) {
        digits = 2
    }
    return num.toFixed(digits)
}