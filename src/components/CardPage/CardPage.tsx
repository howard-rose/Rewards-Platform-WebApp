import React, { ReactNode } from "react";
import styles from "./card.module.css";
import { BsFillEyeFill, BsEyeSlashFill } from "react-icons/bs";

interface DivProps extends React.HTMLAttributes<HTMLDivElement> {
	children: ReactNode;
}
function wrapDiv(className: string): React.FC<DivProps> {
	const div: React.FC<DivProps> = ({ children, ...props }) => (
	  <div {...props} className={className + (props.className ? " " + props.className : '')}>
		{children}
	  </div>
	);
	return div;
}
  
const CardPage = wrapDiv(`${styles.main_container} ${styles.background}`);
const Card = wrapDiv(styles.card);
const Title = wrapDiv(styles.title);

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement>{
	placeholder: string;
	id: string;
}
const Input: React.FC<InputProps> = (props) => (
  <input 
	{...props}
  	type={props.type || "text"} 
	className={styles.input}/>
);
const Password: React.FC<InputProps> = (props) => {
	const [showPassword, setShowPassword] = React.useState(false);
	return (
	  <div className={styles.relative}>
		<input 
		  {...props}
		  type={showPassword ? "text" : "password"}
		  className={`${styles.input} ${styles.password}`}
		  />
		{showPassword ? (
		  <BsEyeSlashFill
			className={styles.password_icon} 
			onClick={() => setShowPassword(!showPassword)}
			/>
		) : (
		  <BsFillEyeFill
			className={styles.password_icon}
			onClick={() => setShowPassword(!showPassword)}
			/>
		)}
	  </div>
	);
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
}
const BigButton: React.FC<ButtonProps> = ({ children, ...props }) => (
  <button {...props} className={styles.big_button}>
	{children}
  </button>
);
const SmallButton: React.FC<ButtonProps> = ({ children, ...props }) => (
  <button {...props} className={styles.small_button}>
	{children}
  </button>
);

const Separator: React.FC<{ text: string }> = ({ text }) => {
	return (
	  <div className={styles.separator}>
		<hr className={styles.separator_line}/>
		<span className={styles.separator_text}> {text} </span>
		<hr className={styles.separator_line}/>
	  </div>
	);

}
const CardRow = wrapDiv(styles.card_row);


export { 
	CardPage,
	Card,
	Title,
	Input,
	Password,
	BigButton,
	Separator,
	CardRow,
	SmallButton
};