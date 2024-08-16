// default capacity = 10;
// null value = allow;
// duplicate value = allow;
// order = insertion order;
// synchronized = no;
// thread Safety = no;
// no shifting required when manipulating data

import java.util.*;

public class arrayStudents {
    public static void main(String args[]) {

        ArrayList<String> Students = new ArrayList<String>();
        Students.add("kathir");
        Students.add("kathir");
        Students.add("arun");
        Students.add("bharath");
        Students.add("hema");
        Students.add("priya");
        Students.add("kamal");
        Students.add("henry");
        Students.add("nithiya");
        Students.remove("arun");
        // Students.remove("kamal");
        Students.size();
        // Students.removeAll(Students);
        @SuppressWarnings("rawtypes")
        Iterator itr = Students.iterator();
        var index = 1;
        // while(itr.hasNext()){

        for (int i = 1; i <= Students.size(); i++) {
            System.out.println("Student name" + index + ":" + itr.next());
            index = index + 1;
        }
        // System.out.println("Students: "+ Students);
        // System.out.println("hello!");
    }

}