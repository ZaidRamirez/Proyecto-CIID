export function formatDate (oldDate) {
    //Función para convertir la fecha a texto

    const weekDaysNames = [
        'Domingo',
        'Lunes',
        'Martes',
        'Miércoles',
        'Jueves',
        'Viernes',
        'Sábado'
    ];

    const monthNames = [
        'enero',
        'febrero',
        'marzo',
        'abril',
        'mayo',
        'junio',
        'julio',
        'agosto',
        'septiembre',
        'octubre',
        'noviembre',
        'diciembre'
    ];

    const date = new Date(oldDate);
    const weekDay = weekDaysNames[date.getUTCDay()];
    const day = date.getUTCDate();
    const month = monthNames[date.getUTCMonth()];
    const year = date.getUTCFullYear();

    return (`${weekDay}, ${day} de ${month} del ${year}`);
}