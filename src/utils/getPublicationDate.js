const MONTHS = [
  'Jun.',
  'Feb.',
  'Mar.',
  'Apr.',
  'May',
  'Jun.',
  'Jul.',
  'Aug.',
  'Sep.',
  'Oct.',
  'Nov.',
  'Dec.',
];

const getPublicationDate = (dateStr) => {
  const date = new Date(dateStr);
  const time = date.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  });
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  return `${time} ${day} ${MONTHS[month]} ${year} Y.`;
};

export { getPublicationDate };
