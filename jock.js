function lol1(){
    if(document.getElementById('lol_text2').innerText=''){

        return;
    }
    document.getElementById('lol_text1').innerText="you are stuuupiiiid"
    button_nwo();
    
    }
    function lol2(){
        if(document.getElementById('lol_text1').innerText=''){

            return;
        }
    document.getElementById('lol_text2').innerText=" realy  stuuupiiiid"
    button_nwo();
    
    }
    function button_nwo(){
        if (document.getElementById('neewboott')) {
            return;  
        }
    var newbottun =document.createElement('button');
    newbottun.id="neewboott";
    newbottun.innerHTML="<h3>try again </h3>";
    document.getElementById('nutton').appendChild(newbottun);
    newbottun.onclick=lol3;

    }
    function lol3(){
        location.reload();
    }

    
    