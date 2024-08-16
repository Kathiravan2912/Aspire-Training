// capacity = 16;
// null value:  allow
// extends set interface
// hash table to store
// unique elements
// no duplicate
// no thread safety
//no synchronization

import java.util.HashSet;

public class Hashset{
    public static void main (String args[]){
        HashSet <String> Students = new HashSet<>();

        Students.add("kathir");
        Students.add(null);
        Students.add("kathir"); //duplictae
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
