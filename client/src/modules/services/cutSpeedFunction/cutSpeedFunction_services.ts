

function cutSpeedFunction_services(diametro: number, cutSpeed: number): number {
    if (diametro <= 0 || cutSpeed <= 0) {
        return 0;
    }

    const calculateOne = cutSpeed * 60;
    const calculateTwo = (diametro / 1000) * Math.PI;
    const calculateSpeed = calculateOne / calculateTwo;
    const roundedSpeed = Math.round(calculateSpeed);
    return roundedSpeed;
}

export default cutSpeedFunction_services;