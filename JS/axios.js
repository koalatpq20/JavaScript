function getData(){
    var url = 'https://api.github.com/users';

    axios.get(url)
        .then(function(response){
            console.log(response.data);
        });
}

getData();