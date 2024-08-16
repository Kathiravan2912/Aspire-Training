// capacity = NA;
// null value:  not allow
// extends queue interface
// operations from both side

import java.util.TreeSet;

public class Treeset{
    public static void main (String args[]){
        TreeSet <String> Students = new TreeSet<>();

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

