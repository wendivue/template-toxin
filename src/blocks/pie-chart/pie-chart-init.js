import PieChart from './pie-chart';

const pieCharts = document.querySelectorAll('.js-pie-chart');

pieCharts.forEach((element) => new PieChart(element));
