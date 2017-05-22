const FORMATS = {
  week: {
    header: ({ start, end }) => {
      if (start.month() === end.month()) {
        return `${start.format('MMMM D')} - ${end.format('D, YYYY')}`;
      } else if (start.year() === end.year()) {
        return `${start.format('MMMM D')} - ${end.format('MMMM D, YYYY')}`;
      }
      return `${start.format('MMMM D, YYYY')} - ${end.format('MMMM D, YYYY')}`;
    },
  },
};

export default function merge(config) {
  return {
    week: {
      ...FORMATS.week,
      ...config.week,
    },
  };
}
