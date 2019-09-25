var colors = ['#ECA038', '#A38456', '#EA614A', '#008836', '#20649B', '#6B96CA', '#A87A93', '#D19C95'];

var pocetstudentu = [444,694,898,926,1223,1335,1471,1653,2039,2884,2662,2579,2774,2782,2922,2842,2803,2887,3031,2866,3034,2431,2389,2389,2291,2294,2264,2462,2700,2729,2695,2862,2877,3030,3227,3362,3396,3122,2771,2505,3614,2871,2885,3266,3381,3693,4489,6331,8055,10534,12859,16579,20859,27545,32110,36177,41078,44686,47208,49061,50853,52088,55153,57579,58913,60846];

var roky = ["1953/54","1954/55","1955/56","1956/57","1957/58","1958/59","1959/60","1960/61","1961/62","1962/63","1963/64","1964/65","1965/66","1966/67","1967/68","1968/69","1969/70","1970/71","1971/72","1972/73","1973/74","1974/75","1975/76","1976/77","1977/78","1978/79","1979/80","1980/81","1981/82","1982/83","1983/84","1984/85","1985/86","1986/87","1987/88","1988/89","1989/90","1990/91","1991/92","1992/93","1993/94","1994/95","1995/96","1996/97","1997/98","1998/99","1999/00","2000/01","2001/02","2002/03","2003/04","2004/05","2005/06","2006/07","2007/08","2008/09","2009/10","2010/11","2011/12","2012/13","2013/14","2014/15","2015/16","2016/17","2017/18","2018/19"];

var pocetpobytu = [3698,5088,6078,6680,7204,8518,9647,10533,11190,13126,14114,15216,16015];

var pocetdiplomu =[23847,27022,30099,34398,37482,38690,39414,40320,40898,42027,43465,43697,44831];

var roky2 = ["2006/07","2007/08","2008/09","2009/10","2010/11","2011/12","2012/13","2013/14","2014/15","2015/16","2016/17","2017/18","2018/19"];

var top1989 = [233,206,169,164,161,155,141,116,111,104,95,67];

var legenda1989 = ["Etiopie","Polsko","Vietnam","Sýrie","Angola","Bulharsko","NDR","Jemen","Jugoslávie","Mongolsko","Afghánistán","Libanon"];

var top2000 = [395,220,209,186,107,85,72,70,69,62,59,59];

var legenda2000 = ["Řecko","UK","Ukrajina","Rusko","Polsko","Vietnam","Bulharsko","Kypr","Německo","USA","Bahrajn","Jemen"];

var top2018dip = [21292,5782,3347,1677,829,819,759,549,547,547,484,351];

var legenda2018dip = ["Slovensko","Rusko","Ukrajina","Kazachstán","Německo","Indie","Bělorusko","Vietnam","Čína","UK","Itálie","Polsko"];

var top2018pob = [2632,1345,1249,869,750,642,614,559,543,444,336,259];

var legenda2018pob = ["Spojené státy","Francie","Španělsko","Turecko","Německo","Itálie","Portugalsko","Slovensko","Polsko","Rusko","Řecko","UK"];

var legendapobyt = ["Spojené státy","Francie","Španělsko","Turecko","Německo","Itálie","Portugalsko","Slovensko","Polsko","Rusko"];

var zemepobyt2008 =
[{"y":524,"proc":23.9},
{"y":199,"proc":9.1},
{"y":117,"proc":5.3},
{"y":16,"proc":0.7},
{"y":240,"proc":10.9},
{"y":86,"proc":3.9},
{"y":47,"proc":2.1},
{"y":84,"proc":3.8},
{"y":155,"proc":7.1},
{"y":44,"proc":2.0}];

var zemepobyt2018 =
[{"y":2632,"proc":16.4},
{"y":1345,"proc":8.4},
{"y":1249,"proc":7.8},
{"y":869,"proc":5.4},
{"y":750,"proc":4.7},
{"y":642,"proc":4.0},
{"y":614,"proc":3.8},
{"y":559,"proc":3.5},
{"y":543,"proc":3.4},
{"y":444,"proc":2.8}];

var legendadiplom = ["Slovensko","Rusko","Ukrajina","Kazachstán","Německo","Indie","Bělorusko","Vietnam","Čína","Spojené království"];

var zemediplom2008 =
[{"y":19860,"proc":65.9},
{"y":1722,"proc":5.7},
{"y":1017,"proc":3.4},
{"y":477,"proc":1.6},
{"y":323,"proc":1.1},
{"y":106,"proc":0.4},
{"y":380,"proc":1.3},
{"y":630,"proc":2.1},
{"y":67,"proc":0.2},
{"y":409,"proc":1.4}];

var zemediplom2018 =
[{"y":21292,"proc":47.5},
{"y":5782,"proc":12.9},
{"y":3347,"proc":7.5},
{"y":1677,"proc":3.7},
{"y":829,"proc":1.8},
{"y":819,"proc":1.8},
{"y":759,"proc":1.7},
{"y":549,"proc":1.2},
{"y":547,"proc":1.2},
{"y":547,"proc":1.2}];

$(function () {

    Highcharts.setOptions({
            lang: {
                months: ['leden', 'únor', 'březen', 'duben', 'květen', 'červen', 'červenec', 'srpen', 'září', 'říjen', 'listopad', 'prosinec'],
                weekdays: ['neděle', 'pondělí', 'úterý', 'středa', 'čtvrtek', 'pátek', 'sobota'],
                shortMonths: ['leden', 'únor', 'březen', 'duben', 'květen', 'červen', 'červenec', 'srpen', 'září', 'říjen', 'listopad', 'prosinec'],
                thousandsSep: '',
                decimalPoint:',',
                rangeSelectorZoom: 'Zobrazit'
            }
        });

Highcharts.chart('casovarada', {

    chart: {
        type: 'area',
        zoomType: 'x',
        panning: true,
        panKey: 'shift'
    },

    title: {
        text: 'Zahraniční studenti v Československu/Česku'
    },

    subtitle: {
        text: 'v letech 1953 až 1992 pouze české země'
    },

    annotations: [{
        labelOptions: {
            backgroundColor: 'rgba(255,255,255,0.5)',
            verticalAlign: 'top',
            y: 15
        },
        labels: [{
            point: {
                xAxis: 0,
                yAxis: 0,
                x: 10,
                y: 40000
            },
            text: '<b>1953 až 1989</b><br>Přijížděli hlavně studenti ze spřátelených<br>komunistických zemí: typicky z NDR,<br>Vietnamu nebo Sýrie.'
        }, {
            point: {
                xAxis: 0,
                yAxis: 0,
                x: 30,
                y: 55000
            },
            text: '<b>1989 až 1999</b><br>V „hluchém“ desetiletí kopírují studijní<br>trendy migraci, převažují země se silnou<br>diasporou: Řekové, Ukrajinci a Rusové.'
        }, {
            point: {
                xAxis: 0,
                yAxis: 0,
                x: 50,
                y: 70000
            },
            text: '<b>Od 2000</b><br>Rychle se rozvíjejí krátkodobé studijní<br>pobyty ze zemí jako Francie a Španělsko.<br>Dominují jim ale Američané.'
        }]
    }, {
        labelOptions: {
            shape: 'connector',
            align: 'left',
            justify: false,
            crop: true,
            style: {
                fontSize: '0.8em',
                textOutline: '1px white'
            }
        },
        labels: [{
            point: {
                xAxis: 0,
                yAxis: 0,
                x: 0,
                y: 1000
            },
            x: 20,
            y: 30,
            text: '1953:<br>První záznam o zahraničních<br>studentech: přijelo 444 hostů'
        }, {
            point: {
                xAxis: 0,
                yAxis: 0,
                x: 36,
                y: 3400
            },
            x: -170,
            y: 50,
            text: '1989:<br>Sametová revoluce ukončuje<br>podporu politických stipendií'
        }, {
            point: {
                xAxis: 0,
                yAxis: 0,
                x: 45,
                y: 3700
            },
            x: -130,
            y: 80,
            text: '1998:<br>ČR se přidává k programu Erasmus,<br>začíná boom studijních pobytů'
        }, {
            point: {
                xAxis: 0,
                yAxis: 0,
                x: 46,
                y: 4500
            },
            x: -110,
            y: 140,
            text: '1999:<br>Vytvoření kreditového systému umožňuje<br>celosvětové rozšíření studijních pobytů'
        }, {
            point: {
                xAxis: 0,
                yAxis: 0,
                x: 53,
                y: 27600
            },
            x: 110,
            y: 80,
            text: '2007:<br>Začíná program Erasmus'
        }, {
            point: {
                xAxis: 0,
                yAxis: 0,
                x: 61,
                y: 52100
            },
            x: -40,
            y: 80,
            text: '2014:<br>Začíná Erasmus+'
        }]
    }],

    xAxis: {
        categories: roky
    },

    yAxis: {
        min: 0,
        startOnTick: true,
        endOnTick: false,
        max: 70000,
        title: {
            text: 'počet studentů'
        }
    },

    tooltip: {
        pointFormat: '<b>{point.y} studentů</b>',
        shared: true
    },

    legend: {
        enabled: false
    },

    exporting: {
        enabled: false
    },

    credits: {
        href : 'https://www.dzs.cz/',
        text : 'Zdroj: Dům zahraniční spolupráce'
    },

    series: [{
        data: pocetstudentu,
        lineColor: 'black',
        color: '#294885',
        fillOpacity: 0.5,
        name: '',
        marker: {
            enabled: false
        },
        threshold: null
    }]

});

Highcharts.chart('detail', {

    chart: {
        type: 'column',
    },

    title: {
        text: 'Zahraniční studenti v ČR'
    },

    subtitle: {
        text: ''
    },

    xAxis: {
        categories: roky2
    },

    yAxis: {
        title: {
            text: 'počet studentů'
        },
        reversedStacks: false
    },

    tooltip: {
        pointFormat: '{series.name}: <b>{point.y} studentů</b>'
    },

    exporting: {
        enabled: false
    },

    credits: {
        href : 'https://www.dzs.cz/',
        text : 'Zdroj: Dům zahraniční spolupráce'
    },

    series: [{
        name: 'Studijní pobyty',
        data: pocetpobytu,
        color: colors[4]
    },{
        name: 'Diplomová studia',
        data: pocetdiplomu,
        color: colors[2]
    }]

});

Highcharts.chart('top89', {

    chart: {
        type: 'bar'
    },

    title: {
        text: '1989'
    },

    xAxis: {
        categories: legenda1989
    },

    yAxis: {
        title: ''
    },

    tooltip: {
        pointFormat: '<b>{point.y} studentů</b>'
    },

    exporting: {
        enabled: false
    },

    credits: {
        enabled: false
    },

    legend: {
        enabled: false
    },

    series: [{
        name: '1989',
        data: top1989,
        color: colors[1]
    }]
});

Highcharts.chart('top00', {

    chart: {
        type: 'bar'
    },

    title: {
        text: '2000'
    },

    xAxis: {
        categories: legenda2000
    },

    yAxis: {
        title: ''
    },

    tooltip: {
        pointFormat: '<b>{point.y} studentů</b>'
    },

    exporting: {
        enabled: false
    },

    credits: {
        enabled: false
    },

    legend: {
        enabled: false
    },

    series: [{
        name: '2000',
        data: top2000,
        color: colors[2]
    }]
});

Highcharts.chart('top18pob', {

    chart: {
        type: 'bar'
    },

    title: {
        text: '2018 studijní pobyty'
    },

    xAxis: {
        categories: legenda2018pob
    },

    yAxis: {
        title: ''
    },

    tooltip: {
        pointFormat: '<b>{point.y} studentů</b>'
    },

    exporting: {
        enabled: false
    },

    credits: {
        enabled: false
    },

    legend: {
        enabled: false
    },

    series: [{
        name: '2018',
        data: top2018pob,
        color: colors[0]
    }]
});

Highcharts.chart('top18dip', {

    chart: {
        type: 'bar'
    },

    title: {
        text: '2018 diplomová studia'
    },

    xAxis: {
        categories: legenda2018dip
    },

    yAxis: {
        title: ''
    },

    tooltip: {
        pointFormat: '<b>{point.y} studentů</b>'
    },

    exporting: {
        enabled: false
    },

    credits: {
        enabled: false
    },

    legend: {
        enabled: false
    },

    series: [{
        name: '2018',
        data: top2018dip,
        color: colors[5]
    }]
});

Highcharts.chart('zemepobyt', {

    chart: {
        type: 'bar',
    },

    title: {
        text: 'Studijní pobyty: odkud studenti přijíždějí?'
    },

    subtitle: {
        text: 'top 10 zemí podle dat 2018'
    },

    xAxis: {
        categories: legendapobyt,
        reversedStacks: false,
    },

    yAxis: {
        title: {
            text: 'počet studentů'
        }
    },

    tooltip: {
        pointFormat: '{series.name}: <b>{point.y}</b> studentů (<b>{point.options.proc} %</b> ze všech příchozích)'
    },

    exporting: {
        enabled: false
    },

    credits: {
        href : 'https://www.dzs.cz/',
        text : 'Zdroj: Dům zahraniční spolupráce'
    },

    series: [{
        name: '2008',
        data: zemepobyt2008,
        color: colors[3]
    },{
        name: '2018',
        data: zemepobyt2018,
        color: colors[6]
    }]

})

Highcharts.chart('zemediplom', {

    chart: {
        type: 'bar',
    },

    title: {
        text: 'Diplomová studia: odkud studenti přijíždějí?'
    },

    subtitle: {
        text: 'top 10 zemí podle dat 2018'
    },

    xAxis: {
        categories: legendadiplom,
        reversedStacks: false,
    },

    yAxis: {
        title: {
            text: 'počet studentů'
        }
    },

    tooltip: {
        pointFormat: '{series.name}: <b>{point.y}</b> studentů (<b>{point.options.proc} %</b> ze všech příchozích)'
    },

    exporting: {
        enabled: false
    },

    credits: {
        href : 'https://www.dzs.cz/',
        text : 'Zdroj: Dům zahraniční spolupráce'
    },

    series: [{
        name: '2008',
        data: zemediplom2008,
        color: colors[1]
    },{
        name: '2018',
        data: zemediplom2018,
        color: colors[5]
    }]

})

});
