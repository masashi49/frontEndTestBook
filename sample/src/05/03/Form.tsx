type Props = {
  title: string;
  handleOnSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
};
export const Form = ({ title, handleOnSubmit }: Props) => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        handleOnSubmit?.(event);
      }}
    >
      <h2>タイトル</h2>
      <p>{title}</p>
      <div>
        <button>決定</button>
      </div>
    </form>
  );
};
