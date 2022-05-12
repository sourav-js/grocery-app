module.exports = {
    apps : [{
      name   : "groceryji",
      script : "nodemon grocery.js",
      error_file : "/var/customlogs/pm2log/groceryJi_error.log",
      out_file : "/var/customlogs/pm2log/groceryJi_out.log"
    }]
  }

