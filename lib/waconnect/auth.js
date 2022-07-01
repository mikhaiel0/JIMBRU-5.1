
const fs = require('fs')
const atob = require('atob')
const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI({
      'api_dev_key' : 'pF8OOcvFv9p4DTUbeaMRNWb6yZGnfSVt',
      'api_user_name' : 'riyif1670',
      'api_user_password' : 'wzBkr_FGiRi4z4Z'
    });
 module.exports = {

/**
 * Write Session To file 
 * @param {string} session_id The Unique Id That you got
 * @param {string} authFile  The Session File name 
 * Default Session name is "authfile"
 * 
 * Make sure to Define global.authfile Before function
 * 
 * Initialize at the top Body 
 * 
 * Make Sure To Give  a timeout of minimum 3 seconds for the Waconnection Function
 * 
 * 
 **/

async  MakeSession(auth,authFile) {

pastebin.getPaste(atob(auth)).then(function (data) {
        if (!fs.existsSync(authFile)){
            console.log('Writing Session');
          fs.writeFileSync(authFile,data)
           console.log('Successfully Written Session');}
      })
      .fail(function (err) {
        console.log('Invalid Session ID');
      })  

 }
 }
