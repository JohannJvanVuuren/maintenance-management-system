export const dateFormatter = (date) => {
    const dateToConvert = new Date(date);
    const year = dateToConvert.getFullYear().toString();
    let month = (dateToConvert.getMonth() + 1).toString();
    if (month.length === 1) {
        month = `0${month}`;
    }
    let day = dateToConvert.getDate().toString();
    if (day.length === 1) {
        day = `0${day}`;
    }


    return `${year}-${month}-${day}`;

}

