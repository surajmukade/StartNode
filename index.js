const express = require('express')
const app = express()
const port = 3000

var XLSX = require('xlsx')
var workbook = XLSX.readFile('A.xls');
var sheet_name_list = workbook.SheetNames;
var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
console.log(xlData);

app.get('/', (req, res) => res.send(xlData));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

