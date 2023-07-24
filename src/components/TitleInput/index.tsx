import { Input } from "antd";
import "./index.less";
import { useState, FC } from "react";
interface TitleInputProps {
	placeholder?: string;
	isPrepend?: boolean;
	onInputText: (e: string) => void;
	children?: any;
	[key: string]: any;
}
const TitleInput: FC<TitleInputProps> = ({
	placeholder = "",
	isPrepend = false,
	onInputText = () => {},
	children,
	...restProps
}) => {
	const [isFocus, setFocus] = useState(false);
	const [currentInputText, setCurrentInputText] = useState("");
	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setCurrentInputText(e.target.value);
		onInputText(e.target.value);
	};
	return (
		<div className="input-wrapper">
			<Input
				placeholder=" "
				value={currentInputText}
				onFocus={() => setFocus(true)}
				onBlur={() => setFocus(false)}
				onChange={onChange}
				{...restProps}
				prefix={isPrepend && children}
			/>
			{!isPrepend ? (
				<span
					className={["input-label", isFocus ? "active" : "", currentInputText && !isFocus ? "active_stop_top" : ""].join(" ")}
				>
					{placeholder}
				</span>
			) : (
				<span
					className={["input-label1", isFocus ? "active1" : "", currentInputText && !isFocus ? "active_stop_top1" : ""].join(" ")}
				>
					{placeholder}
				</span>
			)}
		</div>
	);
};
export default TitleInput;
