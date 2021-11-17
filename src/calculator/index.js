function evil(fn) {
    console.log(fn.replaceAll("^", "**"))
    return new Function('return ' + fn.replaceAll("^", "**"))();
}

module.exports = evil;
