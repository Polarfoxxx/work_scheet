

function rolleSpeedFunction_services(diametro: number, cutSpeed: number): number {
    const calculateOne = cutSpeed * 60;
    const calculateTwo = (diametro / 1000) * 3.14;
    const calculateSpeed = calculateOne / calculateTwo;
    const roundedSpeed = Math.round(calculateSpeed);
    return roundedSpeed;
}

export default rolleSpeedFunction_services;