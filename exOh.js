/**
 * @return {boolean}
 */
function ExOh(str) {
  return 0 === str.split("").reduce((acc, curr) => {
    return curr === "x" ? acc+1 : acc-1;
  }, 0);
}
