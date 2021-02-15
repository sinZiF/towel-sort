
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix !== undefined && matrix.length !== []) {
        let arr = [];
        for (let i = 0; i < matrix.length; i++) {
            if (i % 2 === 0) {

                matrix[i].forEach(cur => arr.push(cur))
            } else if (i % 2 === 1) {

                let reversed = matrix[i].reverse();
                reversed.forEach(cur => arr.push(cur))
            }
        }
      return arr
      }
      return [];
}
