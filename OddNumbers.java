public class OddNumbers {
    public static void main(String[] args) 
    {
        System.out.println("Odd numbers up to 22:");
        for (int i = 1; i <= 22; i++) 
            {
            if (i % 2 != 0) 
                {
                System.out.println(i);
            }
        }
    }
}