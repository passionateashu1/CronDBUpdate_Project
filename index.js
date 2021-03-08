require("dotenv").config();
const cron = require('node-cron');
const express = require('express');
const http = require('http');
const fs = require('fs');
var parse = require('csv-parse');
const mongoose = require('mongoose');

app = express();

//connect to db
//connection url
function importCsvAndUpdateDB_shoes(mongoDB, modelClass, csv_file_url, file_save_path, file_column_delimiter) {

  const dburl = process.env.MONGODB_HOST + '/' + mongoDB
  var connShoes = mongoose.createConnection(dburl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  const shoeSchema = require('./models/' + modelClass);
  const Shoe = connShoes.model("Shoe", shoeSchema);

  const url = csv_file_url; // link to file you want to download
  const path = file_save_path; // where to save a file

  const request = http.get(url, function(response) {
      if (response.statusCode === 200) {
        var file = fs.createWriteStream(path);
        response.pipe(file);

        response.on('data', () => {
          //console.log("http get data event fired!");
        }).on('end', () => {
          console.log("file saved");
          //await sleep(2000);
          const filename = __dirname + '/' + file_save_path;

          const data = []
          fs.createReadStream(filename)
            .pipe(parse({
              delimiter: file_column_delimiter,
              columns: true,
              skip_empty_lines: true,
              relax_column_count: true
            }))
            .on('data', (r) => {
              //console.log(r);
              data.push(r);
            })
            .on('end', () => {
              console.log("Rows found in csv file: " + data.length);

              if (data.length > 0) {
                //Delete all existing recors from collection
                Shoe.deleteMany({}).then(function() {
                    console.log("Existed Data deleted in " + modelClass + " collection!"); // Success

                    //If delete operation successfull then only Insert all records fetched from csv
                    Shoe.insertMany(data)
                      .then((result) => {
                        console.log("Rows Inserted in " + modelClass + " collection: " + result.length);
                        //mongoose.disconnect();
                        //mongoose.connection.close();
                        //console.log("result ", result);
                      })
                      .catch(err => {
                        console.error("error ", err);
                      });

                  })
                  .catch(err => {
                    console.error("Delete error ", err);
                  });
              } else {
                console.log("data not found in csv file ");
              }
            });
        });
      }
      request.setTimeout(60000, function() { // if after 60s file not downlaoded, we abort a request
        request.abort();
      });
    });
}


function importCsvAndUpdateDB_volleys(mongoDB, modelClass, csv_file_url, file_save_path, file_column_delimiter) {

  const dburl = process.env.MONGODB_HOST + '/' + mongoDB
  var connVolleys = mongoose.createConnection(dburl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  const volleySchema = require('./models/' + modelClass);
  const Volley = connVolleys.model("Volley", volleySchema);

  const url = csv_file_url; // link to file you want to download
  const path = file_save_path; // where to save a file

  const request = http.get(url, function(response) {
      if (response.statusCode === 200) {
        var file = fs.createWriteStream(path);
        response.pipe(file);

        response.on('data', () => {
          //console.log("http get data event fired!");
        }).on('end', () => {
          console.log("file saved");
          //await sleep(2000);
          const filename = __dirname + '/' + file_save_path;

          const data = []
          fs.createReadStream(filename)
            .pipe(parse({
              delimiter: file_column_delimiter,
              columns: true,
              skip_empty_lines: true,
              relax_column_count: true
            }))
            .on('data', (r) => {
              //console.log(r);
              data.push(r);
            })
            .on('end', () => {
              console.log("Rows found in csv file: " + data.length);

              if (data.length > 0) {
                //Delete all existing recors from collection
                Volley.deleteMany({}).then(function() {
                    console.log("Existed Data deleted in " + modelClass + " collection!"); // Success

                    //If delete operation successfull then only Insert all records fetched from csv
                    Volley.insertMany(data)
                      .then((result) => {
                        console.log("Rows Inserted in " + modelClass + " collection: " + result.length);
                        //mongoose.disconnect();
                        //mongoose.connection.close();
                        //console.log("result ", result);
                      })
                      .catch(err => {
                        console.error("error ", err);
                      });

                  })
                  .catch(err => {
                    console.error("Delete error ", err);
                  });
              } else {
                console.log("data not found in csv file ");
              }
            });
        });
      }
      request.setTimeout(60000, function() { // if after 60s file not downlaoded, we abort a request
        request.abort();
      });
    });
}

function importCsvAndUpdateDB_runs(mongoDB, modelClass, csv_file_url, file_save_path, file_column_delimiter) {

  const dburl = process.env.MONGODB_HOST + '/' + mongoDB
  var connRuns = mongoose.createConnection(dburl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })

  const runSchema = require('./models/' + modelClass);
  const Run = connRuns.model("Run", runSchema);

  const url = csv_file_url; // link to file you want to download
  const path = file_save_path; // where to save a file

  const request = http.get(url, function(response) {
      if (response.statusCode === 200) {
        var file = fs.createWriteStream(path);
        response.pipe(file);

        response.on('data', () => {
          //console.log("http get data event fired!");
        }).on('end', () => {
          console.log("file saved");
          //await sleep(2000);
          const filename = __dirname + '/' + file_save_path;

          const data = []
          fs.createReadStream(filename)
            .pipe(parse({
              delimiter: file_column_delimiter,
              columns: true,
              skip_empty_lines: true,
              relax_column_count: true
            }))
            .on('data', (r) => {
              //console.log(r);
              data.push(r);
            })
            .on('end', () => {
              console.log("Rows found in csv file: " + data.length);

              if (data.length > 0) {
                //Delete all existing recors from collection
                Run.deleteMany({}).then(function() {
                    console.log("Existed Data deleted in " + modelClass + " collection!"); // Success

                    //If delete operation successfull then only Insert all records fetched from csv
                    Run.insertMany(data)
                      .then((result) => {
                        console.log("Rows Inserted in " + modelClass + " collection: " + result.length);
                        //mongoose.disconnect();
                        //mongoose.connection.close();
                        //console.log("result ", result);
                      })
                      .catch(err => {
                        console.error("error ", err);
                      });

                  })
                  .catch(err => {
                    console.error("Delete error ", err);
                  });
              } else {
                console.log("data not found in csv file ");
              }
            });
        });
      }
      request.setTimeout(60000, function() { // if after 60s file not downlaoded, we abort a request
        request.abort();
      });
    });
}

// Schedule tasks to be run on the server.
cron.schedule(process.env.CRON_JOB_FREQUENCY, function() {
  console.log('Running cron job to download file and refresh db at : ' + new Date().toUTCString());
  importCsvAndUpdateDB_shoes(process.env.TESTDB_MONGODB_DB, process.env.TESTDB_MONGODB_MODEL, process.env.TESTDB_CSV_FILE_URL, process.env.TESTDB_FILE_SAVE_PATH, process.env.TESTDB_COLUMN_DELIMITER);
  importCsvAndUpdateDB_volleys(process.env.VOLLEYDB_MONGODB_DB, process.env.VOLLEYDB_MONGODB_MODEL, process.env.VOLLEYDB_CSV_FILE_URL, process.env.VOLLEYDB_FILE_SAVE_PATH, process.env.VOLLEYDB_COLUMN_DELIMITER);
  importCsvAndUpdateDB_runs(process.env.RUNDB_MONGODB_DB, process.env.RUNDB_MONGODB_MODEL, process.env.RUNDB_CSV_FILE_URL, process.env.RUNDB_FILE_SAVE_PATH, process.env.RUNDB_COLUMN_DELIMITER);
});

var port = process.env.PORT || process.env.SERVER_PORT
app.listen(port, function() {
  console.log("Server started on port " + port);
});
