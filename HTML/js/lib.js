$(document).ready(function (){

//carico le tabs
loadLoadProfilePage();
loadAttentionTask();
    
});
              
                
function loadCreateProfilePage(){
    
    //elimino il contenuto delle tabs per ricrearle aggiornate della sezione per poi riempirla col nuovo contenuto
    $("#left-tabs").html("");
    
    //elimino della sezione per poi riempirla col nuovo contenuto
    $("#left-content").html("");
    
    //ricarico tabs
    $("#left-tabs").html('<!-- elenco delle tabs --><ul class="nav nav-tabs"><li role="presentation"><a href="#" onclick="loadLoadProfilePage()">Carica profilo</a></li><li role="presentation" class="active"><a href="#">Crea un nuovo profilo</a></li></ul>');
    
    $("#left-content").html('<!-- riga per il bottone --><div class="row"><div class="col-xs-12 col-sm-12"><hr><button type="button" class="btn btn-primary" onclick="createProfile()">Crea un nuovo profilo</button></div></div>');
    
}


function loadLoadProfilePage(){
    
    //elimino il contenuto delle tabs per ricrearle aggiornate della sezione per poi riempirla col nuovo contenuto
    $("#left-tabs").html("");
    
    //elimino della sezione per poi riempirla col nuovo contenuto
    $("#left-content").html("");
    
    //ricarico tabs
    $("#left-tabs").html('<!-- elenco delle tabs --><ul class="nav nav-tabs"><li role="presentation" class="active"><a href="#">Carica profilo</a></li><li role="presentation"><a href="#" onclick="loadCreateProfilePage()">Crea un nuovo profilo</a></li></ul>');
    
    
    $("#left-content").html('<!-- riga per il profilo mostrato --><div class="row"><div class="col-xs-12 col-sm-12" id="profile-content"></div></div><!-- riga per il bottone --><div class="row"><div class="col-xs-12 col-sm-12"><hr><button type="button" class="btn btn-primary" onclick="loadProfile()">Carica il profilo</button></div></div>');
}

//<!-- riga per il form da mettere prima della riga per il bottone-->
//    <div class="row">
//        <div class="col-xs-12 col-sm-12">
            
//        </div>
//    </div>


function loadAttentionTask(){
    
    //elimino il contenuto delle tabs per ricrearle aggiornate della sezione per poi riempirla col nuovo contenuto
    $("#right-tabs").html("");
    
    //elimino della sezione per poi riempirla col nuovo contenuto
    $("#right-content").html("");
    
    //ricarico tabs
    $("#right-tabs").html('<!-- elenco delle tabs --><ul class="nav nav-tabs"><li role="presentation" class="active"><a href="#">Attenzione</a></li><li role="presentation"><a href="#" onclick="loadRelaxationTask()">Rilassamento</a></li></ul>');
    
    $("#right-content").html('<!-- riga per il bottone --><div class="row"><div class="col-xs-12 col-sm-12"><hr><button type="button" class="btn btn-primary" onclick="startAttentionTask()">Inizia il task</button></div></div>');
}

function loadRelaxationTask(){
    
    //elimino il contenuto delle tabs per ricrearle aggiornate della sezione per poi riempirla col nuovo contenuto
    $("#right-tabs").html("");
    
    //elimino della sezione per poi riempirla col nuovo contenuto
    $("#right-content").html("");
    
    //ricarico tabs
    $("#right-tabs").html('<!-- elenco delle tabs --><ul class="nav nav-tabs"><li role="presentation"><a href="#" onclick="loadAttentionTask()">Attenzione</a></li><li role="presentation"  class="active"><a href="#">Rilassamento</a></li></ul>');
    
    $("#right-content").html('<!-- riga per il bottone --><div class="row"><div class="col-xs-12 col-sm-12"><hr><button type="button" class="btn btn-primary" onclick="startRelaxationTask()">Inizia il task</button></div></div>');
}


function loadProfile(){

    //pulisco dal vecchio profilo
    $("#profile-content").html("");
    
    //aggiungere parte che recupera il profilo dal db
    
}


function createProfile(){

    //pulisco dal vecchio profilo
    $("#profile-content").html("");
    
    //aggiungere parte che crea il profilo nel db
    
}


function startAttentionTask(){
}


function startRelaxationTask(){
}

                            
                            
                                 
                                
                            
                            
                            
                

                      
                        
                            