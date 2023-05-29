function myLS()
{
   myLS.prototype.fetchData = function()
   {
       let alldata = localStorage.getItem('Task');

       if(alldata)
       {
           alldata = JSON.parse(alldata);
           
       }else
       {
         alldata = [];
       }

       return alldata;
   }

    myLS.prototype.savedata = function(element)
    {

        let myelement = this.fetchData();
        myelement.unshift(element);

        const jsonData = JSON.stringify(myelement);

        localStorage.setItem(`Task`,jsonData);
        console.log(`${element}`);

    }


    myLS.prototype.deleteData = function(dataID)
    {
        let fetchdata = this.fetchData();
        
        let index = fetchdata.findIndex(data =>{
            return data.id === dataID
        });

        fetchdata.splice(index,1);
        localStorage.setItem('Task', JSON.stringify(fetchdata));
    }

}

export default myLS;