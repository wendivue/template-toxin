import Chart from 'chart.js/auto';

class PieChart {
  constructor(anchor) {
    this.anchor = anchor;

    this.init();
  }

  init() {
    this.getElement();
    this.getAttribute();
    this.createChart();
  }

  getElement() {
    this.canvas = this.anchor.querySelector('.js-pie-chart__canvas').getContext('2d');
    this.items = this.anchor.querySelectorAll('.js-pie-chart__item');
  }

  getAttribute() {
    this.votes = [];
    this.colors = [];

    this.items.forEach((item) => {
      const color = [];

      this.votes.push(item.getAttribute('data-votes'));
      color.push(item.getAttribute('data-color-first'));
      color.push(item.getAttribute('data-color-second'));
      this.colors = [...this.colors, color];
    });
  }

  createChart() {
    const gradientList = [];

    this.colors.forEach((item) => {
      gradientList.push(this.createGradient(item));
    });

    const data = {
      datasets: [
        {
          data: this.votes,
          backgroundColor: gradientList,
          cutout: '90%',
        },
      ],
    };

    const options = {
      plugins: {
        legend: {
          display: false,
        },
      },
    };

    const config = {
      type: 'doughnut',
      data,
      options,
    };

    const chart = new Chart(this.canvas, config);

    return chart;
  }

  createGradient(colors) {
    const [firstColor, secondColor] = colors;
    const chartRadius = 64;
    const firstPoint = [chartRadius, 0];
    const secondPoint = [chartRadius, chartRadius * 2];

    const gradient = this.canvas.createLinearGradient(...firstPoint, ...secondPoint);
    gradient.addColorStop(0, firstColor);
    gradient.addColorStop(1, secondColor);
    return gradient;
  }
}

export default PieChart;
