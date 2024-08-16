// capacity = 16;
// null value:  not allow
// extends queue interface
// operations from both side

import java.util.ArrayDeque;
import java.util.Deque;

public class deque {
    public static void main (String args[]){
        Deque <String> Students = new ArrayDeque<String>();

        Students.add("kathir");
        Students.add("arun");
        Students.add("bharath");
        Students.add("hema");
        Students.add("priya");
        Students.add("kamal");
        Students.add("henry");
        Students.add("nithiya");
        Students.remove("arun");

        for(String Student : Students){
            System.out.println("Student name" + ":" + Student);  
    }
    }  
}
