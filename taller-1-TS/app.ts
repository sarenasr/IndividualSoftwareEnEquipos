import { series } from './data.js';

const table:HTMLTableElement = document.getElementById('series') as HTMLTableElement;

let promedio = (series.reduce((acc, serie) => acc + serie.seasons, 0) / series.length);

series.forEach(series => {
    const row:HTMLTableRowElement = table.insertRow();
    row.innerHTML = `<td>${series.id}</td>
                     <td>${series.name}</td>
                    <td>${series.channel}</td>
                     <td>${series.seasons}</td>`;
});

const row:HTMLTableRowElement = table.insertRow();
row.innerHTML = `<td colspan="2">Promedio de temporadas: ${promedio}</td>`;    