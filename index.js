var coins = {
    ada: 0,
    doge: 0,
    eth: 0,
    btc: 0,
    xrp: 0
};

$(document).ready(function() {
    $("#main--img").click(function() {
        $("#main--div").css("display", "none");
        $($(".process")[0]).css("display", "block");
    })

    $(".process__answer--first").click(function() {
        var index = $(".process__answer--first").index(this);
        switch (index) {
            case 0:
                coins.ada += 2
                coins.doge += 1
                break;
            case 1:
                coins.ada += 2
                coins.eth += 1
                break;
            case 2:
                coins.xrp += 2
                coins.doge += 1
                break;
            case 3:
                coins.xrp += 2
                break;
            case 4:
                coins.btc += 2
                coins.eth += 1
                break;
            case 5:
                coins.ada += 1
                break;
            case 6:
                coins.doge += 2
                coins.xrp += 1
                break;
            case 7:
                coins.eth += 2
                coins.ada += 1
                break;
            case 8:
                coins.xrp += 2
                break;
            case 9:
                coins.btc += 2
                break;

        }

        $($(".process")[index]).css("display", "none");
        if (index < 9) $($(".process")[index + 1]).css("display", "block");
        if (index == 9) {
            let sortobj = [];
            for (let coin in coins) {
                sortobj.push({ name: coin, score: coins[coin] });
            }
            sortobj.sort(function(a, b) {
                return b.score - a.score
            })

            var MaxScore = sortobj[0].score;
            var resultObjArr = sortobj.filter(item => item.score == MaxScore);

            var reaultArr = resultObjArr.map(item => item.name);

            if (reaultArr.indexOf("btc") > -1) { //btc
                location.href = './result/864833.html'
            } else if (reaultArr.indexOf("eth") > -1) { //eth
                location.href = './result/854542.html'
            } else if (reaultArr.indexOf("xrp") > -1) { //xrp
                location.href = './result/877486.html'
            } else if (reaultArr.indexOf("ada") > -1) { //ada
                location.href = './result/546354.html'
            } else { //doge
                location.href = './result/857634.html'
            }
        }
    })

    $(".process__answer--second").click(function() {
        var index = $(".process__answer--second").index(this);

        switch (index) {
            case 0:
                coins.eth += 2
                coins.btc += 1
                break;
            case 1:
                coins.doge += 1
                break;
            case 2:
                coins.btc += 2
                break;
            case 3:
                coins.eth += 2
                coins.ada += 1
                break;
            case 4:
                coins.ada += 2
                coins.xrp += 1
                break;
            case 5:
                coins.doge += 2
                break;
            case 6:
                coins.btc += 2
                coins.eth += 1
                break;
            case 7:
                coins.xrp += 2
                coins.doge += 1
                break;
            case 8:
                coins.btc += 2
                break;
            case 9:
                coins.eth += 2
                break;

        }

        $($(".process")[index]).css("display", "none");
        if (index < 9) $($(".process")[index + 1]).css("display", "block");
        if (index == 9) {
            let sortobj = [];
            for (let coin in coins) {
                sortobj.push({ name: coin, score: coins[coin] });
            }
            sortobj.sort(function(a, b) {
                return b.score - a.score
            })

            var MaxScore = sortobj[0].score;
            var resultObjArr = sortobj.filter(item => item.score == MaxScore);

            var reaultArr = resultObjArr.map(item => item.name);

            if (reaultArr.indexOf("btc") > -1) { //btc
                location.href = './result/864833.html'
            } else if (reaultArr.indexOf("eth") > -1) { //eth
                location.href = './result/854542.html'
            } else if (reaultArr.indexOf("xrp") > -1) { //xrp
                location.href = './result/877486.html'
            } else if (reaultArr.indexOf("ada") > -1) { //ada
                location.href = './result/546354.html'
            } else { //doge
                location.href = './result/857634.html'
            }
        }
    })
})