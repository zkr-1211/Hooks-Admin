import axios from "axios";
import md5 from "md5";
import moment from "dayjs";
const getMd5Str = data => {
	let str = "";
	const arr = [];
	Object.keys(data).forEach(key => {
		arr.push(`${key}:${data[key]}`);
	});
	str = arr.join("&");
	return md5(str);
};

// create an axios instance
const service = axios.create({
	baseURL: import.meta.env.VITE_BASE_URL // url = base url + request url
	// withCredentials: true, // send cookies when cross-domain requests
	// timeout: 15000 // request timeout
});

// request interceptor
service.interceptors.request.use(
	config => {
		// do something before request is sent
		const data = Object.assign(
			{},
			{
				// 公共参数
				// time: moment().format('YYYY-MM-DD HH:mm:ss')
			},
			config.data
		);
		config.data = Object.assign(data, {
			// 签名
			// md5: getMd5Str(data)
		});
		return config;
	},
	error => {
		// do something with request error
		console.log(error); // for debug
		return Promise.reject(error);
	}
);

// response interceptor
service.interceptors.response.use(
	response => {
		const res = response.data;
		if (res.code != 200) {
			return Promise.reject(new Error(res.msg || "Error"));
		} else {
			return res;
		}
	},
	error => {
		console.log("err" + error); // for debug
		const response = error.response;
		if (!response) {
			return Promise.reject(error);
		}
		const res = response.data;
		return Promise.reject(res);
	}
);

export default service;
