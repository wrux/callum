import { FC } from 'react';

interface DateProps {
  dateString: string;
}

const DateComponent: FC<DateProps> = ({ dateString }) => {
  const date = new Date(dateString);
  return <time dateTime={date.toISOString()}>{date.toDateString()}</time>;
};

export default DateComponent;
