// 题目描述
// 给你一根长度为n的绳子，请把绳子剪成整数长的m段（m、n都是整数，n>1并且m>1），每段绳子的长度记为k[0],k[1],...,k[m]。请问k[0]xk[1]x...xk[m]可能的最大乘积是多少？例如，当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18。
// 输入描述:
//     输入一个数n，意义见题面。（2 <= n <= 60）


 // 主要就是拆分为2，3的话乘积会最大。

function cutRope(number)
{
    // write code here
    let result = []
    let arr = [0, 0, 1, 2, 4]
    if(number <= 4){
        return arr[number]
    }
    while(number > 0){
        if(number - 3 >= 0){
            result.push(3)
            number-=3
        }
        if(number - 2>= 0){
            result.push(2)
            number -= 2
        }
    }
    return result.reduce((x, y) => x*y)
}

