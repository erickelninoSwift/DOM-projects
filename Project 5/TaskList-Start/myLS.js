function myLS()
{
   myLS.prototype.fetchData = function()
   {
       let alldata = localStorage.getItem('tasks');

       if(alldata)
       {
           alldata = JSON.parse(alldata);
           console.log(`All data fetched : ${alldata}`);
       }
   }

    myLS.prototype.savedata = function(element)
    {

        const id = element.id;
        const title = element.title;
        const isCompleted = element.isCompleted;

        const jsonData = JSON.stringify(element);

        localStorage.setItem(`Task`,jsonData);

        console.log("Document saved succesfully");
        console.log(`${element}`);

    }

}

export default myLS;