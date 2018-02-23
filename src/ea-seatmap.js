import * as d3 from 'd3'

export default function seatmap({
  element = '#ea-seatmap',
  data = [],
  margin = {
    top: 18,
    right: 125,
    bottom: 18,
    left: 125
  },
  innerMargin = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  showAxis = {
    top: true,
    right: true,
    bottom: true,
    left: true
  },
  timelineHeight = 30,
  spacing = 2,
  paddingOuter = 0,
  paddingInner = 0
} = {}) {
  const elem = d3.select(element)
  let xAxisTopGroup
  let xAxisBottomGroup
  let yAxisLeftGroup
  let yAxisRightGroup

  if (elem.empty()) {
    throw new Error('DOM element not found')
  }

  const svg = elem.append('svg')
    .attr('viewBox', '0 0 400 100')

  const update = data => {

    const rows = svg.selectAll('g.row')
      .data(data)

    const row = rows.enter()
      .append('g')
      .attr('transform', (d, i) => {
        return 'translate(' + [i * 30, 0] + ')'
      })
      .attr('class', 'row')

    const cell = row.selectAll('g.rowcell').data(d => d.cells)

    cell.enter()
      .append('g')
      .attr('class', 'rowcell')
      .attr('transform', (d, i) => {
        return 'translate(' + [0, i * 30] + ')'
      })
      .append('rect')
      .attr('class', d => d.status)
      .attr('height', 25)
      .attr('width', 25)

    cell
      .attr('class', d => d.status)
  }



  update(data)

  return Object.freeze({
    update
  })
}
