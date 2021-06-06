function calcular(tipo, valor){
    

   if (tipo === 'acao') {
    
        if (valor === 'c') {
            document.getElementById('mostrador').value = ''
        }

        if (valor === '(' || valor === ')' || valor === '+' || valor === '-' || valor === '*' || valor === '/') {
            document.getElementById('mostrador').value += valor
            
        }

        if (valor === '=') {
            var resultado = eval(document.getElementById('mostrador').value)
            document.getElementById('mostrador').value = resultado

        }


   }else if (tipo === 'numero') {
       document.getElementById('mostrador').value += valor
   }


}
