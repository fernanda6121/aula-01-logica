document.getElementByind("contacform").addEventListener('submit ,function(even)'){
     Event.preventDefault();

     const formData = new FormData(Event. target);
     const data = {};
     FormData.ForEach((value, key) => {data[key] = value;

});    

     console.log(data); // Adicionar esta linha para verificar os dados no  console//

     fetch( "https://script.google.com/macros/s/AKfycbxsQftR91D-_ktLWY58cvtbGtkqwL10WPNaBvL-ck1wUb1X6TgazSnnQzjKZav1VFYNGg/exec", {
        method: 'post',
        body: new URLSearchParams(data)
      } )
       .then(Response => Response.json())
       .then(ResponseData => {
           if(ResponseData.result === 'succes'){
             alert('dados enviados com sucesso');
       } else if(ResponseData.result === 'error' && ResponseData.menssage === 'Email already exists')
         alert('Erro: O email ja existe');
      else{
          alert('Erro ao enviar os dados.');
      }
     })
     .catch(Error => console.error('Error: ', error))
}