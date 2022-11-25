import { FC } from 'react';

interface DateProps {
  dateString: string;
}

const DateComponent: FC<DateProps> = ({ dateString }) => {
  const date = new Date(dateString);

  return (
    <time dateTime={date.toISOString()}>
      {new Intl.DateTimeFormat('en-GB', { dateStyle: 'full' }).format(date)}
    </time>
  );
};

export default DateComponent;
