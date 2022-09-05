// Function that decodes the special characters for normal display on the page
export const decoder = (str) => {
    return str.replace(/(&#(\d+);)/g, (match, capture, charCode) => String.fromCharCode(charCode)).replace(/&quot;/g, '"');
}