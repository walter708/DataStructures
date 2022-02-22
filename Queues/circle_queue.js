// class Circle_Queue{
//   constructor(capacity) {
//     this.front = this.rear = -1;
//     this.capacity = capacity;
//     this.rm = 0;
//     this.queue = new Array(this.capacity)
    
//   }
  
//   enqueue(value){
//     //Check If the queue is full
//     if((this.rear == this.capacity - 1 && this.front == 0 )|| this.rear == this.front - 1 )
//     {
//       console.log("Queue is full") ;
//       return;
//     }
//     else
//     {
//       if(this.rear == -1 && this.front == -1)
//         {
//           this.rear = this.rear + 1 ;
//           this.front = this.front + 1;
//           this.queue[this.rear] = value;
//         }
//         else
//         {
//           if(this.rear == this.capacity - 1 && this.front != 0 )
//           {
//              this.rear = -1;
//           }
//           this.rear = this.rear + 1;
//           this.queue[this.rear] = value;
//         }
//        return;
//     }
    
    
//   }
//   dequeue()
//     {
//       if(this.front == -1 && this.rear == -1)
//       {
//         console.log("Queue is empty")
//         return;
//       }
//       else
//       {
//         if(this.front ==  this.rear)
//         {
//           this.rm =this.queue[this.front];
//           this.front = this.rear = -1;
//           console.log("Reset Just occured ")
          
//         }
//         else
//         {
//           if(this.front == this.capacity-1)
//           {
//             this.rm =this.queue[this.front];
//             this.queue[this.front] = null;
//             this.front = 0;
//           }
//           else{
//             this.rm =this.queue[this.front];
//             this.queue[this.front] = null;
//             this.front++
//           }

//         }
//       }
//       return this.rm;
//     }
  
//   displayRear()
//   {
//     if(this.front == -1 && this.rear == -1)
//     {
//       console.log("Queue is empty")
//       return;
//     }else
//     {
//       console.log(this.queue[this.rear -1 ])
//     }
//   }
//   displayFront()  {
//     if(this.front == -1 && this.rear == -1)
//     {
//       console.log("Queue is empty")
//       return;
//     }else
//     {
//       console.log(this.queue[this.front])
//     }
//   }
  
  
//   display()  {
//     if(this.front == -1 && this.rear == -1)
//     {
//       console.log("Queue is empty")
//       return;
//     }else
//     {
       
//       for (let i = 0; i <= this.rear ; i++)
//       {
//         console.log(this.queue[i])
//       }
//     }
//   }
  
// }



/* Always note that the modulus operation is like a swing back around an array*/


class Circle_Queue{
  constructor(capacity) {
    this.front = this.rear = -1;
    this.capacity = capacity
    this.queue = new Array(this.capacity )
  }
  
  enqueue(data){
    
    if( (this.rear + 1) % this.capacity == this.front  )
    {
      console.log("Queue is full");
      return;
    }
    else if(this.front == -1)
    {
      this.front = this.rear = 0;
      this.queue[this.rear] = data;
      return;
    }
    else
    {
      this.rear = (this.rear + 1) % this.capacity;
      this.queue[this.rear] = data;
      return;
    }
  }
  
  dequeue(){
    let temp = 0 ; 
    if(this.rear == -1 && this.front == -1)
    {
      console.log("Queue is empty");
      return;
    }else if(this.front == this.rear)
    {
      
      temp = this.queue[this.front]
      this.front = this.rear = -1;
      console.log("reset just occured")
      return temp;
    }else
    {
      temp = this.queue[this.front]
      this.front = (this.front + 1) % this.capacity;
    }
    return;
  }
  display(){
    if(this.rear == -1 && this.front == -1)
    {
      console.log("Queue is empty");
      return;
    }else if(this.rear >= this.front)
    {
      for(let i = this.front; i <= this.rear ; i++)
        {
          console.log(this.queue[i])
        }
    }else
    {
      for(let i = this.front; i < this.capacity ; i++)
      {
        console.log(this.queue[i])
      }
      for(let i = 0 ; i < this.rear ; i++)
      {
        console.log(this.queue[i])
      }
    }
    if((this.rear + 1) % this.capacity == this.front)
    {
      console.log("Queue is full")
    }
    
  }
}


let queueOne  = new Circle_Queue(8)
queueOne.enqueue(20);
queueOne.enqueue(30);
queueOne.enqueue(40);
queueOne.dequeue();
queueOne.dequeue();
queueOne.dequeue();
queueOne.enqueue(50);
queueOne.enqueue(60);
queueOne.dequeue();
queueOne.enqueue(70);
queueOne.enqueue(80);

queueOne.enqueue(90);

// queueOne.dequeue();
// queueOne.dequeue();
queueOne.display()
// queueOne.displayRear();
// queueOne.displayFront();
