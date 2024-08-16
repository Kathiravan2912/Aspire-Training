// maintain order
// store in hash table
// capacity = 16
// only one null value key, but multiple duplicate value


import java.util.LinkedHashMap;
public class linkedhash {
    public static void main (String args[]){
         
        LinkedHashMap<Integer, String> students= new LinkedHashMap<>();

        students.put(1,"kathir");
        students.put(10,null);
        students.put(11,null);
        students.put(null,"Maran");
        students.put(null,"Mani");
        students.put(null,"Amaran");   //return last value when there is more null key
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
