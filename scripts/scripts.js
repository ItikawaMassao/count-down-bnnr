document.onload = contador();

function contador() {
    var dataInicio = new Date();
    var dataBase = new Date(2018, 5, 16, 10);

    var horarioCorrente = dataInicio.getTime();
    var horarioBase = dataBase.getTime();

    var diferenca = horarioBase - horarioCorrente;

    var segundos = Math.floor(diferenca / 1000);
    var minutos = Math.floor(segundos / 60);
    var horas = Math.floor(minutos / 60);
    var dias = Math.floor(horas / 24);

    horas %= 24;
    minutos %= 60;
    segundos %= 60;

    horas = (horas < 10) ? '0' + horas : horas;
    minutos = (minutos < 10) ? '0' + minutos : minutos;
    segundos = (segundos < 10) ? '0' + segundos : segundos;

    document.getElementById('counterDays').innerText = dias;
    document.getElementById('counterHours').innerText = horas;
    document.getElementById('counterMinutes').innerText = minutos;
    document.getElementById('counterSeconds').innerText = segundos;
    
    setTimeout(contador, 1000);
}