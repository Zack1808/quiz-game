// Function that decodes the special characters for normal display on the page
export const decoder = (str) => {
  let txt = document.createElement("textarea");
  txt.innerHTML = str;
  return txt.value;
};
