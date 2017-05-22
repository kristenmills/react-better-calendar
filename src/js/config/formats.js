const FORMATS = {
  week: {
    header: 'MM/DD/YYYY',
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
