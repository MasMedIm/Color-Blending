let blend = function (...args) {
    let colorsToBlend = args
    var arrOfDecimalColors = []
    for (color in colorsToBlend) {
        if (colorsToBlend[color].length != 7)
            throw "The color string length don't correspond to an hex string color"
        if (colorsToBlend[color].slice(0, 1) !== "#")
            throw "Where is the hashtag for : " + colorsToBlend[color] + " ?"
        var arrOfCurrentDecimalColor = []
        for (var hexElem = 1; hexElem < colorsToBlend[color].length; hexElem += 2) {
            var constructedHex = colorsToBlend[color][hexElem] + colorsToBlend[color][hexElem + 1]
            var hexToDecimal = parseInt(constructedHex, 16)
            if (isNaN(hexToDecimal)) {
                throw "Wait! That's not base 16 you ****!"
            }
            arrOfCurrentDecimalColor.push(hexToDecimal)
        }
        arrOfDecimalColors.push(arrOfCurrentDecimalColor)
    }

    var redSum = 0
    var greenSum = 0
    var blueSum = 0
    var toGetTheAvg = args.length
    for (var decColor in arrOfDecimalColors) {
        for (var rgb in arrOfDecimalColors[decColor]) {
            if (rgb == 0)
                redSum += arrOfDecimalColors[decColor][rgb]
            else if (rgb == 1)
                greenSum += arrOfDecimalColors[decColor][rgb]
            else
                blueSum += arrOfDecimalColors[decColor][rgb]
        }
    }

    var blendedColor = "#" + (parseInt(redSum / toGetTheAvg)).toString(16) +
        (parseInt(greenSum / toGetTheAvg)).toString(16) +
        (parseInt(blueSum / toGetTheAvg)).toString(16)

    return blendedColor
}

module.exports = blend