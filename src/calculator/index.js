function evil(fn) {
  const value = fn + "";
  return new Function("return " + value.replace("^", "**"))();
}

module.exports = evil;
