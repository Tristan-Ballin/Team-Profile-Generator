const generateCSS = () => {
    var css = `
    body {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 16px;
    }
    
    header {
        padding: 15px;
        font-size: 48px;
    }
    
    main {
        padding-top: 100px;
    }
    
    .card-header{
        font-size: x-large;
    }
    
    .card{
        box-shadow: 8px 8px 5px lightgray;
        margin-top: 10px;
        margin-bottom: 10px;
    }
    `;

    return css;
}

module.exports = generateCSS;