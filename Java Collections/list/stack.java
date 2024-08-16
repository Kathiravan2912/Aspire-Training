// default capacity = 10;
// null value = yes;
// duplicate value = yes;
// order = insertion order;
// synchronized = no;
// thread Safety = no;
// Last in First out , has boolean operations

import java.util.Iterator;
import java.util.Stack;
// import java.util.Vector;

public class stack {
    public static void main (String args[]){
        Stack <String> Students = new Stack<String>();

        Students.add(null);
        Students.add("kathir");
        Students.add("arun");
        Students.add("bharath");
        Students.add("hema");
        Students.add("priya");
        Students.add("kamal");
        Students.add("henry");
        Students.add("nithiya");
        Students.remove("arun");
        int index = 1;
        @SuppressWarnings("rawtypes")
        Iterator itr = Students.iterator();
        for( int i=1; i<=Students.size(); i++){
            System.out.println("Student name"+ index + ":" + itr.next());  
            index = index+1;
    }
    }  
}
