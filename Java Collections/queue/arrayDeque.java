// default capacity = 8;
// null value = no;


// {   not true
// duplicate value = yes;
// order = insertion order;
// synchronized = no;
// thread Safety = no;

// }


// operations at both end, implement class of queue

import java.util.ArrayDeque;

public class arrayDeque {
    public static void main (String args[]){
        ArrayDeque <String> Students = new ArrayDeque<String>();

        // Students.add(null);
        Students.add("kathir");
        Students.add("arun");
        Students.add("kathir");
        Students.add("arun");
        Students.add("bharath");
        Students.add("hema");
        Students.add("priya");
        Students.add("kamal");
        Students.add("henry");
        Students.add("nithiya");
        Students.remove("arun");
        // int index = 1;
        // @SuppressWarnings("rawtypes")
        // Iterator itr = Students.iterator();
        // for( int i=1; i<=Students.size(); i++){
            System.out.println("Student name"+ ":" + Students);  
            // index = index+1;
    // }
    }  
    
}
