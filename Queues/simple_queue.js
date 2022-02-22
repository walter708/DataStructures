class Simple_Queue{
  constructor(capacity) {
    this.front = this.rear = 0;
    this.capacity = capacity;
    this.rm = 0;
    this.queue = new Array(this.capacity)
    
  }
  // Remove element from queue
  enqueue(value){
    if(this.rear == this.capacity)
      {
        console.log("Queue is full");
        return;
      }
     else
      {
        this.queue[this.rear] = value;
        this.rear++;
      }
      return;
  }
  //Add element to the queue
  dequeue(){
    if(this.rear == this.front)
    {
      console.log("This queue is empty")
      return;
    }
    else{
      this.rm = this.queue[this.front];
      for(let i = 0 ; i < this.rear - 1 ; i++ )
      {
        this.queue[i] = this.queue[i + 1];
      }
      this.rear--;
    }
    return this.rm
  }
  // Display elements of the queue
  display(){
    if(this.rear == this.front)
    {
      console.log("This queue is empty");
      return ;
    }else
      {
        for (let i = 0; i < this.rear ; i++)
          {
            console.log(this.queue[i])
          }
      }
      return;
  }
  printFront(){
    if(this.rear == this.front)
    {
      console.log("This queue is empty")
    }else{
      console.log(this.queue[this.front])
    }
    return; 
  }
 
  
}

let queueOne  = new Simple_Queue(8)
queueOne.enqueue(20);
queueOne.enqueue(30);
queueOne.enqueue(40);
queueOne.enqueue(50);
queueOne.enqueue(2)

queueOne.display()
let va = queueOne.dequeue()
console.log(va)
queueOne.printFront()

//export default Simple_Queue