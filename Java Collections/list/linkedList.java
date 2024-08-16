// default capacity = not Applicable;
// null value = allow;
// duplicate value = allow;
// order = insertion order;
// synchronized = not;
// thread Safety = no;
// best in continous operation, uses doubly linked list
// shifting required when manipulating data

// import java.util.Iterator;
import java.util.LinkedList;

public class linkedList {
    public static void main(String[] args) {
        LinkedList <String> Employees= new LinkedList< String>();


        Employees.add("Kathiravan");
        Employees.add("Bharath");
        Employees.add("Naveen");
        Employees.add("Preetha");
        Employees.add("Krishna");
        Employees.add("Abdul");
        Employees.add("Kevin");
        Employees.add("Kalki");
        String Employee = Employees.get(3);
        System.out.println(Employee);
        // Employees.remove(Employees[2]);


        // @SuppressWarnings("rawtypes")
        // Iterator itr=Employees.iterator();
        // var index = 1;
        // var total = Employees.size();
        // for(int i=1; i<=total; i++){
        //     System.out.println("Employee Name:" + index + " "+ itr.next());
        //     index=index+1;
        // }
    }
}
