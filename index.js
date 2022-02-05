function todoformSubmit(e)
{
    //console.log("event is",e)
    
     let taskis=document.getElementById('taskadded').value
    
    //check localstorage is empty?
    let localdata=localStorage.getItem('data');
    
    if(localdata==null)
    {
     datalist=[]
        //console.log("array is created",datalist)
    }
    else
    {
        datalist= JSON.parse(localdata);
        
    }
    if(taskis.trim()!=0)
    {
datalist.push(taskis);
localStorage.setItem('data',JSON.stringify(datalist));  
display()
    }
}
function display()
{let datalist
    let localdata=localStorage.getItem('data');
    
    if(localdata==null)
    {
      datalist=[]
        //console.log("array is created",datalist)
    }
    else
    {
        datalist= JSON.parse(localdata);
        
    }


let tab=document.getElementById('mytable')

    let html="";
    html+=`<tr><td>Sr No</td> <td>Task</td><td>Edit</td><td>Delete</td></tr>`
    datalist.forEach((e,i)=>{

        html+=`
        
        <tr>
        <td>${i+1}</td>
        <td>${e}</td>
       <td> <button type="button" id="lidtbtn1" class="btn btn-warning" onclick="editfun(${i})">Edit</button></td>
        <td><button type="button" id="listbtn2" class="btn btn-danger" onclick="deletefun(${i})">Delete</button></td>
        </tr>`

    })
tab.innerHTML=html;
document.getElementById('taskadded').value=''
}


display();
function deleteAll()
{
    localStorage.removeItem('data');
    let tab=document.getElementById('mytable')
    tab.innerHTML="";
}


function editfun(i)
{ let saveIndex=document.getElementById('saveIndex')
           let mydata=  localStorage.getItem('data')
           let mydata1=JSON.parse(mydata);
          let btnadd= document.getElementById("addbtn");
         let btnedit=  document.getElementById("editbtn")
           mydata1.forEach((elm,index)=>{
               if(i==index)
               {
                   document.getElementById('taskadded').value=mydata1[i];
                   saveIndex.value=index
                   btnadd.style.display="none";
                   btnedit.style.display="block";
               }
                })}
 //document.getElementById('addbtn').addEventListener('click',todoformSubmit(e))          
    
 let editbtnis=document.getElementById('editbtn')
 editbtnis.addEventListener('click',()=>{
    let saveIndex=document.getElementById('saveIndex').value;
    let mydata=  localStorage.getItem('data')
    let mydata1=JSON.parse(mydata);
    mydata1[saveIndex]=document.getElementById('taskadded').value;
    
    localStorage.setItem('data',JSON.stringify(mydata1))
    display();
   document.getElementById('taskadded').value='';

    let btnadd= document.getElementById("addbtn");
    btnadd.style.display="block"
         let btnedit=  document.getElementById("editbtn")   
         btnedit.style.display="none";
 })
 function deletefun(i)
 {let mydata=  localStorage.getItem('data')
 let mydata1=JSON.parse(mydata);
 mydata1.splice(i,1);
 localStorage.setItem('data',JSON.stringify(mydata1))
 display()

 }
 let searchbox=document.getElementById('searchbox')
 searchbox.addEventListener('input',function(){
   let rows=document.querySelectorAll('tr');

    Array.from(rows).forEach((elem)=>{
        let textis= elem.getElementsByTagName('td')[1].innerHTML;
        let searchboxval=document.getElementById('searchbox').value
        textis=textis.toUpperCase();
        searchboxval=searchboxval.toUpperCase();
       if( textis.indexOf(searchboxval)!= -1)
        {elem.classList.add('rowdesign')
            elem.style.display="block"
        }
        else
        {elem.style.display="none";

        }

    })

 })
