function evil(fn) {
    
    return new Function('return ' + fn.replaceAll("^", "**"))();
}

module.exports = evil;
