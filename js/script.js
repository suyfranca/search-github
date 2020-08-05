(function(){
  'use strict';
   
    let $userName = document.querySelector('[data-js="user-name"]');
    let $button = document.querySelector('[data-js="btn"]');
    let $article = document.querySelector('[data-js="infos"]');
    let fragmentAvatar = document.createDocumentFragment();

    let xhr = new XMLHttpRequest();
    let result;
    
    $button.addEventListener( 'click', searchUser, false );
    
    function searchUser(e){
      e.preventDefault();
      startAjax($userName.value);
    }  
    
    function startAjax(user){
      let url = `https://api.github.com/users/${user}`;
      xhr.open('GET', url);
      xhr.send();
    }    
    
    xhr.addEventListener( 'readystatechange', function(){
      if ( xhr.readyState === 1 || xhr.readyState === 2 || xhr.readyState === 3 )
        console.log( 'Carregando...' + xhr.readyState );

      if ( xhr.readyState === 4 && xhr.status === 200 ){
        result = JSON.parse(xhr.responseText);
        console.log(result);
        showUser(result);
      }
    }, false);

    function showUser(user){
      if ($article.children.length >= 1)
        $article.removeChild($article.firstElementChild);
      showAvatar(user.avatar_url);
      showInfo(user);
      showRep(user.repos_url);
    }

    function showAvatar(avatar){
      let div = document.createElement('div');
      let img = document.createElement('img');

      div.setAttribute('class', 'avatarContent');
      img.setAttribute('class', 'avatar');
      img.setAttribute('data-js', 'avatar');
      img.setAttribute('src', `${avatar}`);

      div.appendChild(img);
      fragmentAvatar.appendChild(div);
      $article.appendChild(fragmentAvatar);
    }

    function showInfo(user){
      //code
    }
      
    function showRep(repos){
      //code
    }

})();
