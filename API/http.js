class myHTTP{

    get(url){
        return new Promise((resolve, reject)=>{
          fetch(url)
          .then(res => res.json())
          .then(data=>resolve(data))
          .catch(error => reject(error))
        });
        
    }

    post(url, data){
        return new Promise((resolve, reject)=>{
            fetch(url, {
                method: "POST",
                headers:{
                    "Content-type" : "application/json"
                },
                body: JSON.stringify(data);
            })
            .then(res=>res.json)
            .then(data=>resolve(data))
            .catch(error=>reject(error))
            
        })
    }
}