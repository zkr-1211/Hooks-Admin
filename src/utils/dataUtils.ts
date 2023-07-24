/* Echarts图表字体、间距自适应 */
export const fitChartSize = (size: number, defaultWidth: number = 3840) => {
	const clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	if (!clientWidth) return size;
	const scale = clientWidth / defaultWidth;
	return Number((size * scale).toFixed(3));
};

export const fitChartHeightSize = (size: number, defaultHeight: number = 2160) => {
	const clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	if (!clientHeight) return size;
	const scale = clientHeight / defaultHeight;
	return Number((size * scale).toFixed(3));
};

export function uuid(hasHyphen: boolean) {
	return (hasHyphen ? "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx" : "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx").replace(/[xy]/g, function (c) {
		const r = (Math.random() * 16) | 0;
		const v = c === "x" ? r : (r & 0x3) | 0x8;
		return v.toString(16);
	});
}
