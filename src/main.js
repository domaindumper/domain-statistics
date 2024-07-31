


let axios = require ( 'axios');



_page = function( ep , offset ){

    
    if ( typeof offset != 'undefined')
    {
        ep=ep+'&OFFSET=' + offset;
    }

    if ( offset == 'END') {
        console.log('END!');
        return;
    }


    axios.get(ep).then(function (r) {

        var nextOffset=r.data.NextOffset;

        console.log(r.data.Results.map(l=>l.D + (typeof l.LOS !='undefined' && l.LOS.length>0&&l.LOS[0]!=l.D?'\t'+l.LOS.join('\t'):'')).join('\n'));

        _page ( ep, nextOffset)
     }).catch(function (e) {
        console.log('STOPPED BECAUSE OF ERROR');
        console.log(e);
      });


}



var command = process.argv[2]; // i.e. KEY=[your key]]&TECH=Shopify

var ep = 'https://api.builtwith.com/lists7/api.json';
console.log ( `Inital Call: ${ep}?${command}` );
console.log('DOMAIN\tLOCATIONS ON SITE');
_page(ep+'?'+command);






