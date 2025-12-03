//https://www.codewars.com/kata/597a660f59873cc353000061/train/javascript
function getColors(colArr) {
    let result = []
    for (let i = 0; i < colArr.length; i++) {
        let rgb = {}
        for (let j = 0; j < colArr[i].length; j++) {
            let tmp = {}, max
            let color = colArr[i][j]
            tmp.Red = parseInt(color.slice(0,2),16)
            tmp.Green = parseInt(color.slice(2,4),16)
            tmp.Blue = parseInt(color.slice(4,6),16)
            max = Object.keys(tmp).reduce((p, c) => tmp[p] > tmp[c] ? p : c)
            rgb[max] = rgb[max] + 1 || 1
        }
        let maxMin = Object.keys(rgb).reduce((p, c) => rgb[p] > rgb[c] ? p : c) + '+' + Object.keys(rgb).reduce((p, c) => rgb[p] < rgb[c] ? p : c)
        result.push(maxMin)
    }
    return result.join()
}