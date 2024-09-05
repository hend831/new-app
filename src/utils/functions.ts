/**
 * Truncates a string to a specified maximum length and appends ellipsis (`...`) if the string exceeds that length.
 *
 * @param {string} txt - The string to be truncated.
 * @param {number} [max=45] - The maximum length of the truncated string, including the ellipsis. Defaults to 50.
 * @returns {string} - The truncated string with ellipsis if needed, or the original string if it is shorter than the max length.
 */
export function txtSlicer(txt: string, max: number = 45): string {
    if (txt.length >= max) return `${txt.slice(0, max)}...`;
    return txt;
  }
  