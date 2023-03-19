interface Props {
  children: React.ReactNode;
  classes?: string;
}

const Button = (props: Props) => {
  const { children, classes = '' } = props;

  return <button className={`${classes}`}>{children}</button>;
};

export default Button;
