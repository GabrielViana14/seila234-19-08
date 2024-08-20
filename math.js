function add(um, dois){
    let tres = um + dois;
    return tres;
}

function substract(A,B){
    let product = 0
    if( A > B){
        product = A - B
    }else {
        product = B - A
    }
    return product;
}

module.exports = {add}