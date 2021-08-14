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
  }

  getAttribute() {
    this.votesGreat = this.anchor.getAttribute('data-votes-great');
    this.votesGood = this.anchor.getAttribute('data-votes-good');
    this.votesNorm = this.anchor.getAttribute('data-votes-norm');
    this.votesDisappoint = this.anchor.getAttribute('data-votes-disappoint');
    this.colorsGreat = this.anchor.getAttribute('data-colors-great');
    this.colorsGood = this.anchor.getAttribute('data-colors-good');
    this.colorsNorm = this.anchor.getAttribute('data-colors-norm');
    this.colorsDisappoint = this.anchor.getAttribute('data-colors-disappoint');
  }

  createChart() {
    const colorsGreatList = this.validateColor(this.colorsGreat);
    const colorsGoodList = this.validateColor(this.colorsGood);
    const colorsNormList = this.validateColor(this.colorsNorm);
    const colorsDisappointList = this.validateColor(this.colorsDisappoint);

    const data = {
      datasets: [
        {
          data: [this.votesGreat, this.votesGood, this.votesNorm, this.votesDisappoint],
          backgroundColor: [
            this.createGradient(colorsGreatList),
            this.createGradient(colorsGoodList),
            this.createGradient(colorsNormList),
            this.createGradient(colorsDisappointList),
          ],
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

  validateColor(theme) {
    let colorList;
    if (theme === 'great') colorList = ['#BC9CFF', '#8BA4F9'];
    if (theme === 'good') colorList = ['#6FCF97', '#66D2EA'];
    if (theme === 'norm') colorList = ['#FFE39C', '#FFBA9C'];
    if (theme === 'disappoint') colorList = ['#919191', '#3d4975'];

    return colorList;
  }
}

export default PieChart;
