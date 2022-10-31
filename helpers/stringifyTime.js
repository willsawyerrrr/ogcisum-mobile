/**
 * Returns the desired stringification of the given sample creation time.
 * 
 * @param {string} time updated datetime string from the API
 * 
 * @returns {object} date and time strings
 */
export default function stringifyTime(time) {
    /** Maps month indices to names. */
    const months = {
        0: "January",
        1: "February",
        2: "March",
        3: "April",
        4: "May",
        5: "June",
        6: "July",
        7: "August",
        8: "September",
        9: "October",
        10: "November",
        11: "December"
    }

    let date = new Date(time);
    let hours = date.getHours();
    hours = hours % 12;
    hours = hours ? hours : 12;
    let timeString = `${hours}:${date.getMinutes().toString().padStart(2, "0")} ${date.getHours() >= 12 ? "pm" : "am"}`;
    let dateString = `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
    return { time: timeString, date: dateString };
}
