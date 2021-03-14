// Calculos
function calcularPlano(){
    var plano_antigo = parseFloat(document.plano.plano_antigo.value);
    var plano_novo = parseFloat(document.plano.plano_novo.value);
    var datas = new Date();
    var dia = datas.getDate();
    var mes = datas.getMonth() + 1;
    var ano = datas.getFullYear();
    var dias_mes = DaysInMonth(mes, ano);
    var dias_restante = dias_mes - dia;

    var total = ((plano_antigo / dias_mes) * dia) + ((plano_novo / dias_mes) * dias_restante);
    document.plano.total.value = "Valor aproximado R$" + Math.round(total);
}

function limparTotal(){
    document.plano.total.value = '';
    document.plano.plano_antigo.value = '';
    document.plano.plano_novo.value = '';
}

function DaysInMonth(month, year){
    return new Date(year, month, 0).getDate();
}