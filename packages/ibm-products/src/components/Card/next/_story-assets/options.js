export default {
  height: '150px',
  grid: {
    x: {
      enabled: false,
    },
    y: {
      enabled: false,
    },
  },
  axes: {
    bottom: {
      visible: false,
      title: '2019 Annual Sales Figures',
      mapsTo: 'date',
      scaleType: 'time',
    },
    left: {
      visible: false,
      mapsTo: 'value',
      scaleType: 'linear',
    },
  },
  color: {
    gradient: {
      enabled: true,
    },
  },
  points: {
    enabled: false,
  },
  legend: {
    enabled: false,
  },
  toolbar: {
    enabled: false,
  },
};
