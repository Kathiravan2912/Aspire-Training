// no order
// store in hash table
// capacity = 16
// only one null value key, but multiple duplicate value

import java.util.HashMap;
public class Hash{
    public static void main (String args[]){
        
        HashMap<Integer, String> students= new HashMap<>();

        students.put(1,"kathir");
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