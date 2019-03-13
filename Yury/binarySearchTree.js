class Node{
    constructor(key){
        this.key=key;
        this.left=null;
        this.right=null;
    }
}

class Tree{
    constructor(array){
        this.root=null;
        this.output=null;

        for(let item of array){
            let placed=false;
            
            if(this.root!=null){
               //we already have a root make it a tracker
               let tracker=this.root;
               while(!placed){
                  if(item<=tracker.key){
                      if(tracker.left==null){
                          tracker.left=new Node(item);
                          placed=true;
                      }
                      tracker=tracker.left;
                  }
                  else{
                      if(tracker.right==null){
                          tracker.right=new Node(item);
                          placed=true;
                      }
                      tracker=tracker.right;
                  }
               }
            }
            else{
                this.root=new Node(item);
            }
        }
    }
    
    
    printTree(node){
      //Pre Order Traversal
      console.log(node.key);
      if(node.left!=null){
         this.printTree(node.left);
      }
      
      if(node.right!=null){
        this.printTree(node.right);
      }
    
    }
    
}

let arr=[10,9,7,5,4,1,2,3,100,1];
let tree=new Tree(arr);
//console.log(tree);
console.log(tree.printTree(tree.root));
//console.log(tree.output);