#!/usr/bin/env node

const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')

const argv = yargs(hideBin(process.argv))
    .alias('month','m')
    .alias('year', 'y')
    .alias('date', 'd')
    .demandCommand(1).parse()
//console.log(argv)

//
let result = ""

if (argv._[0] == 'current' || argv._[0] == 'add' || argv._[0] == 'sub') {
    result = getOutput(new Date(), argv._[0], argv)
} else {
    result = "unknown command"
}

console.log(result)


function getOutput(dt, mode, params) {

    //console.log(params)
    let value;
    if (params.y !== undefined) {
        value = dt.getFullYear()
        switch (mode) {
            case 'add':
                dt.setFullYear(value + params.y)
                return dt.toISOString()
            case 'sub':
                dt.setFullYear(value - params.y)
                return dt.toISOString()
            default:
                return value
        }
    }

    if (params.m !== undefined) {
        value = dt.getMonth() 
        switch (mode) {
            case 'add':
                dt.setMonth(value + params.m)
                return dt.toISOString()
            case 'sub':
                dt.setMonth(value - params.m)
                return dt.toISOString()
            default:
                return value + 1
        }
    }

    if (params.d !== undefined) {
        value = dt.getDate()
                switch (mode) {
            case 'add':
                dt.setDate(value + params.d)
                return dt.toISOString()
            case 'sub':
                dt.setDate(value - params.d)
                return dt.toISOString()
            default:
                return value
        }
    }

    return dt.toISOString()
}



/*
Текущая дата и время в формате ISO:
cmd current

Текущий год:
cmd current --year или cmd current -y

Текущий месяц:
cmd current --month или cmd current -m

Дата в календарном месяце:
cmd current --date или cmd current -d

Необходимо добавить возможность получать даты в прошлом или будущем через команды add и sub:
cmd add -d 2 - дата и время в формате ISO на два дня вперед cmd sub --month 1 - дата и время в формате ISO на 1 месяц назад
*/