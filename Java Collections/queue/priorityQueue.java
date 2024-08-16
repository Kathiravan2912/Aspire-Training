// default capacity = 11;
// null value = no;
/// based on priority
// no direct access to element
// operations at both end, implement queue inteface

import java.util.ArrayDeque;

public class priorityQueue {
    public static void main (String args[]){
        ArrayDeque <String> Students = new ArrayDeque<String>();

        // Students.add(null);
        Students.add("kathir");
        Students.add("arun");
        Students.add("bharath");
        Students.add("hema");
        Students.add("priya");
        Students.add("kamal");
        Students.add("henry");
        Students.add("nithiya");
        Students.remove("arun");

        for(String student: Students ){
            System.out.println("Student name"+ ":" + student);  
    }
    }  
    
}
