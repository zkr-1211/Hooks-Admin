import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import { useEffect, useRef } from "react";
export function useInterval(fn: () => void, delay: number, options: any = {}) {
	const { immediate = false } = options;
	const savedCallback = useRef<() => void>();

	useEffect(() => {
		savedCallback.current = fn;
	}, [fn]);

	useEffect(() => {
		if (typeof delay !== "number" || delay <= 0) return;
		if (immediate) {
			savedCallback.current?.();
		}
		const timer = setInterval(() => {
			savedCallback.current?.();
		}, delay);

		return () => {
			clearInterval(timer);
		};
	}, [delay, immediate]);
}

// 每日指定时间定时器
export function useDailyTimeout(fn: () => void, delay: number, options: any = {}): any {
	const { immediate = false, repeat = true } = options;
	const timerRef = useRef<any>();

	const _useDailyTimeout = () => {
		const nowTimestamp = Math.floor(Date.now() / 1000);
		const todayFormat = dayjs().format(`YYYY-MM-DD ${timerRef.current}`);
		const todayTimestamp = dayjs(todayFormat).unix();

		let timeoutDelay = todayTimestamp - nowTimestamp;
		if (timeoutDelay <= 0) {
			const tomorrowTimestamp = dayjs(todayFormat).add(1, "day").unix();
			timeoutDelay = tomorrowTimestamp - nowTimestamp;
		}

		timerRef.current = setTimeout(() => {
			fn();
			if (repeat) {
				_useDailyTimeout();
			}
		}, timeoutDelay * 1000);
	};

	useEffect(() => {
		immediate && fn();
		_useDailyTimeout();

		return () => {
			if (timerRef.current) {
				clearTimeout(timerRef.current);
			}
		};
	}, []);

	return timerRef.current;
}
