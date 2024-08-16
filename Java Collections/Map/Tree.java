// sorted order
// store in red black tree
// capacity = na
// no null value

import java.util.TreeMap;

public class Tree {

    public static void main(String[] args) {
        
        TreeMap<Integer, String> students= new TreeMap<>();

        students.put(1,"kathir");
        // students.put(null, null);       null pointer excaption
        students.put(2,"arun");
        students.put(3,"bharath");
        students.put(4,"hema");
        students.put(5,"priya");
        students.put(6,"kamal");
        students.put(7,"henry");
        students.put(8,"nithiya");
    for(Integer key : students.keySet()){
        System.out.println(students.get(key));
    }
} 
}
