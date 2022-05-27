const sumPairs = function(array, number) {
    let answ = []
    for (const i of array) {
        for (const j of array) {
            const ji = [j,i]
            const ij = [i,j]
            // const test = answ.includes(ji);
            const newLocal = i + j === number;
            if (newLocal) {
                answ.push(ij)
            }
        }
    }
    let answer = answ.filter([a,b] => )
    console.log(answ)
    if (answ.length == 0){
        return 'unable to find pairs'
    }
    
    return answ

};

// export function sumPairs()
console.log(sumPairs([1,2,3,4,5], 3))