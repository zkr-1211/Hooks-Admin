export const months = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];

export function getMonth(index) {
	return months[index] || "";
}

export function getTick(max) {
	// if (max % 10 === 0 && max !== 0) {
	//   max--
	// }
	return Math.max(1, Math.pow(10, (parseInt(max) || "").toString().length - 1));
}
