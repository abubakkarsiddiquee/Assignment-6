const loadAi= async()=>{
    const url='https://openapi.programming-hero.com/api/ai/tools';
    const res =await fetch(url);
    const data=await res.json();
    //console.log("display data");
    displayAI(data.data);
   
}


const displayAI =(Ais)=>{
 //Ais=Ais.slice(0,5);
const Aicontainer=document.getElementById('Ai-container');
   Ais.tools.forEach(Ai => {
     const Aidiv=document.createElement('div');
     Aidiv.classList.add('col');
     Aidiv.innerHTML=`
     <div class="card h-100 container ">
            <img src="${Ai.image}" class="card-img-top mt-3" alt="...">
            <h4 class="fw-semibold mt-3"> Features</h4>
            <div class="card-body">
              <h5>${Ai.features}</h5>
             
            </div>
            <hr>
              
            <h4 class="fw-semibold mx-2">${Ai.name} </h4>
            <footer class="d-flex justify-content-between" >
                <section class="">
              <div class="d-flex"><div class="mx-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
              <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
              <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
            </svg></div>
             <div class="mt-1"><h6>${Ai.published_in}</h6></div></div>
                   </section>
                   <section>
                   <button type="submit" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                   <img style=" width:50px;"src="icons/r8.png" alt="" border="0" />
                 </button>
                 <div class="modal fade " id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                 <div class="modal-dialog w-50">
                   <div class="modal-content">
                     <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                     <div class="modal-body d-flex justify-content-between" >
                           <section class="container">
                             <div class="row row-cols-1 row-cols-md-2 g-4">
                               
                                 <div class="card  ">
                                   <h6 class="fw-semibold ">${Ai.description}</h6>
                                   <div class="card-body ">
                                      <main class="d-flex g-4"> <div style="height:70px;
                                         width:70px; background-color: #ABBAEA;border-radius: 15px;">
                                            <h6>$10/ month basic<h6>
                                         </div>
    
                                         <div style="height:70px;
                                         width:70px; background-color: #ABBAEA;border-radius: 15px;">
                                         <h6>$50/ month pro<h6>
                                         </div>
                                         <div style="height:70px;
                                         width:70px; background-color: #ABBAEA;border-radius: 15px;">
                                         <h6>contact us Enterprise</h6>
                                         </div></main>

                                         <section class="">
                                             <div>
                                             <h4> Features</h4>
                                               <h6 class="fw-semibold">${Ai.features}</h6>
                                             </div>
                                                 <h4>Integration</h4>
                                                 <li>FB messanger</li>
                                                 <li>Slack</li>
                                                 <li> telegram</li>

                                             <div>

                                             </div>
                                         </section>
                                        
                                     
                                     <p class="card-text"></p>
                                   </div>
                                 </div>
                               
                               
                                 <div class="card">
                                 
                                   <img src="${Ai.image}" class="card-img-top" alt="...">
                                  
                                
                                   <div class="card-body">
                                     <h5 class="card-title fw-bold">Hi,How are  you Doing Today</h5>
                                     <p class="card-text">I'm doing well, thank you for asking. How can I assist you today?</p>
                                   </div>
                                 </div>
                               
                               </div>
                             </div>
                          
                           </section>
               
                       
                     </div>
                     
                   </div>
                 </div>
               </div>
                   </section>

             </footer>
             
           
       
             
             
          </div>
     
     
     `;
     Aicontainer.appendChild(Aidiv);
   });

   loading(false);
}
const loading=isLoading=>{
  const loadersection=document.getElementById('loading_field');
  if(isLoading){
      loadersection.classList.remove('d-none');
  }
  else{
    loadersection.classList.add('d-none');
  }

}

 document.getElementById('showall').addEventListener('click',function(){
  loading(true);

 loadAi();

})



 