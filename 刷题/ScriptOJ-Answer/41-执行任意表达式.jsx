// execute(`'My name is ' + name`, { name: 'Jerry' }) // => My name is Jerry


// Function
const execute = (exp, data) => new Function(...Object.keys(data),`return ${exp}`)(...Object.values(data))

// with
const execute = (exp, data) => eval(`with(data){${exp}}`)
