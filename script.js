function login(){
    let password = document.getElementById('password').value;
    var upper = password.match(/[A-Z]/);/*RegExp */
    var lower = password.match(/[a-z]/);/*RegExp */
    var num = password.match(/[1-9]/);/*RegExp */
    var symbol = password.match(/^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]+$/g);/*RegExp special character */

    /*.length counts the number of characters in string and compare it*/      
    /* TRUE*/
    if (password.length >= 12){
        a = true;
    }    

    else{/* FALSE*/

        alert ('harap maaf, kata laluan anda kurang daripada 12 huruf');
    }

    /*match with variable 'upper'*/    
    /* TRUE*/
    if (upper){
        b = true;
    }    

    else{/* FALSE*/

        alert ('harap maaf, kata laluan anda tidak mengandungi huruf besar');
    }

    /*match with variable 'lower'*/    
    if (lower){/* TRUE*/
        c = true;
    }    
    else{/* FALSE*/
        alert ('harap maaf, kata laluan anda tidak mengandungi huruf kecil');
    }

    /*match with variable 'num'*/    
    if (num){/* TRUE*/
        d = true;
    }    
    else{/* FALSE*/
        alert ('harap maaf, kata laluan anda tidak mengandungi huruf nombor');
    }

    /*match with variable 'symbol'*/
    if (symbol){/* TRUE*/
        e = true;
    }    
    else{/* FALSE*/
        alert ('harap maaf, kata laluan anda tidak mengandungi simbol');
    }


    /* final check*/
    if(a == true && b == true && c == true && d == true && e ==true){
        alert('Tahniah')
    }
    else if(a != true && b != true && c != true && d != true && e !=true){
        /*pass block*/
    }
    else{
        /*pass block*/
    }
}