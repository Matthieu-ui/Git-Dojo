
const express = require('express');
const app = express();



var port = 5000;

// ********** ROUTES imports **********


// ********** MIDDLEWARE **********

app.set('view engine', 'ejs');
express.static('public');


// ********** 404 and 500 handlers **********


//handler for 404 - Resource Not Found
app.use(function(req, res, next) {
    res.status(404).render('404');
  });

//handler for 500 - Server Error
app.use(function(err, req, res, next) {
    res.status(500).render('500');
    
});

// ********** NODE EMOJI **********

const emoji = require('node-emoji');


// node emoji's link https://www.npmjs.com/package/node-emoji
// spinnerCLI link https://www.npmjs.com/package/cli-spinners

// ********** SPINNER **********
class serverSpinner {
    spin(){
        const serverSpinner = require('cli-spinners');
        const frames = serverSpinner.dots.frames;
        let i = 0;
        setInterval(() => {
            
            process.stdout.write(`\r${frames[i = ++i % frames.length]} Server is running on port ` + port + ` ` + new Date().toLocaleString() + `  ` + emoji.get('crystal_ball') + ` `
        );
        }, 100);
    }
}


// ********** SERVER **********

app.listen(port, () => {
    //    spinner.spin();
        console.log(new serverSpinner().spin());
    });
    


