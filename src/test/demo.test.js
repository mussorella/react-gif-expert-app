test('esta prueba no debe fallar', () =>{
    if(0===1){
       throw new Error('error')
    }
})