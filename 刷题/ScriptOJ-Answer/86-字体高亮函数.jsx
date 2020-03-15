// 考查代码逻辑思路。

const highlight = (literals,...values) => {
    var output = "";
    for (var index = 0; index < values.length; index++) {
        output += literals[index] + `<span class="red">${values[index]}</span>`
    }

    output += literals[index]
    return output
}


