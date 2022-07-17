const balanceParenthesis = (text) => {
    var answer = true;
    var balanceBrackets = 0;
    var balanceSquare = 0;
    var balanceNormal = 0;
    for (let i = 0; i < text.length; i++) {
        if (text[i] === "(") {
        balanceNormal++;
        } else if (text[i] === ")") {
        balanceNormal--;
        if (balanceNormal < 0) {    // nunca puede haber un balance negativo porque si tenemos un parentesis de cierre primero, no estaremos cerrando todos los que abrimos
            balanceNormal = 0;
        }
        }
        if(text[i] === "[") {
        balanceSquare++;
        }
        if(text[i] === "]") {
        balanceSquare--;
        if (balanceSquare < 0) {
            balanceSquare = 0;
        }
        }
        if(text[i] === "{") {
        balanceBrackets++;
        }
        if(text[i] === "}") {
        balanceBrackets--;
        if (balanceBrackets < 0) {
            balanceBrackets = 0;
        }
        }

    }
        if (balanceBrackets !== 0 || balanceSquare !== 0 || balanceNormal !== 0) {
        answer = false;
        
    }
    if(!text.includes("(") && !text.includes("[") && !text.includes("{")) {
        answer = false;
    }

    return answer
}
        
module.exports = balanceParenthesis;
