var XLSX = require('xlsx');
var workbook = XLSX.readFile('UserInfoupdated.xlsx');
var sheet_name_list = workbook.SheetNames;
var xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);
var db = require('./server/dbconfig/ContributeTable');
var db_name = 'covalent.UserInfo';
var len = 0;

var insertfun = () => {
  var query = `INSERT INTO ${db_name} values('${xlData[len].id}','${
    xlData[len].fullname
  }','${xlData[len].email}')`;
  try {
    db.teradata
      .write(query)
      .then(Response => {
        console.log(xlData[len]);
        if (len < xlData.length) {
          len++;
          insertfun();
        }
      })
      .catch(err => console.log(err));
  } catch (err) {
    console.log(err);
  }
};

insertfun(xlData[0]);
