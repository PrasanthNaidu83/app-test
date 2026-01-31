public class fibonacci {
    public static void main(String[] args) {

        int n1 = 10;     
        int n2 = 4;
        int n3 = 6;

        System.out.println("Fibonacci series:");

        for (int i = 1; i <= n1; i++) {
            System.out.print(n1 + " ");

            int next = n1 + n2;
            n1 = n2;
            n2 = next;
        }
    }
}

