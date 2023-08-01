function calVolumn(len, area) {
    return len * area;
}

function calWeight(len, area, density) {
    return len * area * density *1000;
}

function calLen(weight, density, area) {
    return weight * 1000 / density / area;
}

function calMoney(unitPrice, weight) {
    return weight / 1000 *unitPrice;
}