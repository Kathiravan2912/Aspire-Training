public class demo{
    public static void main(String[] args) {
        try {

            int[] numbers = {1, 2, 3};
            System.out.println("The first number is: " + numbers[0]);
            

            System.out.println("The fourth number is: " + numbers[3]);
        } catch (ArrayIndexOutOfBoundsException e) {

            System.out.println("Array index is out of bounds!");
        } finally {

            System.out.println("The try-catch block is finished.");
        }
        

        try {
            checkAge(22);
        } catch (Exception e) {
            System.out.println("Caught an exception: " + e.getMessage());
        }
    }

    public static void checkAge(int age) throws Exception {
        if (age < 18) {
            throw new Exception("Age must be at least 18 to vote");
        } else {
            System.out.println("Enough age to vote");
        }
    }
}





// Exception propagation
//     if no catches work --> gives to try