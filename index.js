
var port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'

const express = require('express')
const app = express()
//const port = 3000

var XLSX = require('xlsx')
var workbook = XLSX.readFile('A.xls');
var sheet_name_list = workbook.SheetNames;
var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
console.log(xlData);

app.get('/', (req, res) => res.send(xlData));

app.listen( port, server_ip_address, () => console.log(`Example app listening on port ${port}!`))

