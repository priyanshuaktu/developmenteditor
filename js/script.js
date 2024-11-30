function finalOutput(){
    let htmlcode = document.getElementById("html-Input").value;
    let csscode = document.getElementById("css-Input").value;
    let jscode = document.getElementById("js-Input").value;



    let outputcode = document.getElementById("codeExecution");

    outputcode.contentDocument.body.innerHTML=`${htmlcode} <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>`;

    outputcode.contentDocument.getElementsByTagName("head")[0].innerHTML=`<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"><style>${csscode}</style>`;

    outputcode.contentWindow.eval(jscode);


}