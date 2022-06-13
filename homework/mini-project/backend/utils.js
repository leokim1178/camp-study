export function getToday() {
    //여기서 오늘날짜로 만들기!!
    const aaa = new Date();
    const yyyy = aaa.getFullYear();
    const mm = aaa.getMonth() + 1;
    const dd = aaa.getDate();
    const today = `${yyyy}-${mm}-${dd}`; //year+"-"+month+"-"+date
    return today;
}
