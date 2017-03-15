
import { Component, OnInit, OnChanges, ViewChild, ElementRef, Input, ViewEncapsulation } from '@angular/core';
import { GdpDataService } from '../../services/gdp-data.service';
var d3 = require("d3");
var d3tip = require('d3-tip')(d3);

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BarChartComponent implements OnInit {


  constructor(private dataService: GdpDataService) { }

  ngOnInit() {
    this.dataService.getJSON().subscribe(
      data => {
        this.buildChart(data.data);
      }
    );

  }


  buildChart(dataset) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const padding = 40;
    const height = 500;
    const width = 900;
    const x = d3.scaleLinear().domain([1947, 2016]).range([padding, width - padding]);
    const y = d3.scaleLinear().domain([0, 18000]).range([height - padding, padding]);
    const tip = d3tip
      .attr('class', 'd3-tip')
      .offset([-10, 0])
      .html(function (d) {
        const date = new Date(d[0]);
        const year = date.getFullYear();
        const month = months[date.getMonth()];
        return d3.format("$,.1f")(d[1]) + "&nbsp;Billion<br>" + year + ' - ' + month + ""
      })

    const svg = d3.select("#chart")
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .call(tip);

    svg.selectAll("rect")
      .data(dataset)
      .enter()
      .append("rect")
      .attr("class", "bar")
      .attr("x", (d, i) => x(d[0].slice(0, 4)) + (i % 4) * width / dataset.length)
      .attr("y", (d, i) => y(d[1]))
      .attr("width", Math.ceil(width / dataset.length))
      .attr("height", (d, i) => height - padding - y(d[1]))
      .on('mouseover', tip.show)
      .on('mouseout', tip.hide);

    svg.append("text")
      .attr("class", "label")
      .attr("x", width / 2)
      .attr("y", height)
      .text("Years");

    svg.append("text")
      .attr("class", "heading")
      .attr("x", (width / 2) -150)
      .attr("y", 40)
      .text("Gross Domestic Product");

    svg.append("text")
      .attr("class", "label")
      .attr("text-anchor", "end")
      .attr("y", padding + 5)
      .attr("x", -80)
      .attr("dy", "1em")
      .attr("transform", "rotate(-90)")
      .text("Gross Domestic Product (billions of USD)");

    svg.append("g").attr("transform", "translate(0," + (height-padding) + ")").call(d3.axisBottom(x));
    svg.append("g").attr("transform", "translate(" + padding + ",0)").call(d3.axisLeft(y));
  }
}
