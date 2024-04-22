import { series } from './data.js';
var table = document.getElementById('series');
var promedio = (series.reduce(function (acc, serie) { return acc + serie.seasons; }, 0) / series.length);
series.forEach(function (series) {
    var row = table.insertRow();
    row.innerHTML = "<td>".concat(series.id, "</td>\n                     <td>").concat(series.name, "</td>\n                    <td>").concat(series.channel, "</td>\n                     <td>").concat(series.seasons, "</td>");
});
var row = table.insertRow();
row.innerHTML = "<td colspan=\"2\">Promedio de temporadas: ".concat(promedio, "</td>");
