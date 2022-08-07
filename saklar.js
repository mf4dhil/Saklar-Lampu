
function saklar(){
    // toggle keseluruhan
    let toggleS = document.getElementById("default-toggleS")
    // Lampu Keseluruhan
    let lamputS = document.getElementById("lampuS")

    // toggle ruang keluarga
    let toggleSk = document.getElementById("default-toggleSk")
    let toggleK1 = document.getElementById("default-toggleK1")
    let toggleK2 = document.getElementById("default-toggleK2")
    let toggleK3 = document.getElementById("default-toggleK3")
    // Lampu ruang keluarga
    let lamputK1 = document.getElementById("lampuK1")
    let lamputK2 = document.getElementById("lampuK2")
    let lamputK3 = document.getElementById("lampuK3")

    // toggle ruang makan
    let toggleM1 = document.getElementById("default-toggleM1")
    // Lampu ruang makan 
    let lamputM1 = document.getElementById("lampuM1")
    
    // toggle ruang Tidur
    let toggleSTi = document.getElementById('default-toggleSti')
    let toggleTi1 = document.getElementById("default-toggleTi1")
    let toggleTi2 = document.getElementById("default-toggleTi2")
    // lampu ruang Tidur
    let lampuTi1 = document.getElementById("lampuTi1")
    let lampuTi2 = document.getElementById("lampuTi2")

    // toggle ruang Tamu
    let toggleSt = document.getElementById("default-toggleSt")
    let toggleT1 = document.getElementById("default-toggleT1")
    let toggleT2 = document.getElementById("default-toggleT2")
    let toggleT3 = document.getElementById("default-toggleT3")
    let toggleT4 = document.getElementById("default-toggleT4")

    // lampu ruang tamu
    let lampuT1 = document.getElementById("lampuT1")
    let lampuT2 = document.getElementById("lampuT2")
    let lampuT3 = document.getElementById("lampuT3")
    let lampuT4 = document.getElementById("lampuT4")


    // logic Semua lampu
    if(toggleS.checked){
        lamputS.src = 'assets/image/on.gif'
    }else{
        lamputS.src = 'assets/image/off.gif'
        // lamputM1.src = 'assets/image/off.gif'
    }
    
    if(toggleSk.checked && toggleS.checked){
        // logic lampu ruang Keluarga
        if (toggleK1.checked) {
            lamputK1.src = 'assets/image/on.gif'
        }else{
            lamputK1.src = 'assets/image/off.gif'
        }
        if (toggleK2.checked) {
            lamputK2.src = 'assets/image/on.gif'
        }else{
            lamputK2.src = 'assets/image/off.gif'
        }
        if (toggleK3.checked) {
            lamputK3.src = 'assets/image/on.gif'
        }else{
            lamputK3.src = 'assets/image/off.gif'
        }
    }else{
        lamputK1.src = 'assets/image/off.gif'
        lamputK2.src = 'assets/image/off.gif'
        lamputK3.src = 'assets/image/off.gif'
    }
    

    // Logic lampu ruang makan
    if(toggleM1.checked && toggleS.checked){
        lamputM1.src = 'assets/image/on.gif'
    }else{
        lamputM1.src = 'assets/image/off.gif'
    }

    if(toggleSTi.checked && toggleS.checked){
        // Login lampu ruang tidur
        if(toggleTi1.checked){
            lampuTi1.src = 'assets/image/on.gif'
        }else{
            lampuTi1.src = 'assets/image/off.gif'
        }
        if(toggleTi2.checked){
            lampuTi2.src = 'assets/image/on.gif'
        }else{
            lampuTi2.src = 'assets/image/off.gif'
        }
    }else{
        lampuTi1.src = 'assets/image/off.gif'
        lampuTi2.src = 'assets/image/off.gif'
    }
    

    // Logic lampu ruang Tamu
    if (toggleSt.checked && toggleS.checked) {
        if(toggleT1.checked){
            lampuT1.src = 'assets/image/on.gif'
        }else{
            lampuT1.src ='assets/image/off.gif'
        }
        if(toggleT2.checked){
            lampuT2.src = 'assets/image/on.gif'
        }else{
            lampuT2.src ='assets/image/off.gif'
        }
        if(toggleT3.checked){
            lampuT3.src = 'assets/image/on.gif'
        }else{
            lampuT3.src ='assets/image/off.gif'
        }
        if(toggleT4.checked){
            lampuT4.src = 'assets/image/on.gif'
        }else{
            lampuT4.src ='assets/image/off.gif'
        }
    } else {
        lampuT1.src = 'assets/image/off.gif'
        lampuT2.src = 'assets/image/off.gif'
        lampuT3.src = 'assets/image/off.gif'
        lampuT4.src = 'assets/image/off.gif'
    }
}
