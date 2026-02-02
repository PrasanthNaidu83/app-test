//Encapsulation
class BankAccount {

    private String accountHolder;
    private double balance;

    public void setAccountHolder(String name) {
        accountHolder = "prasanth";
    }

    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
        }
    }

    public String getAccountHolder() {
        return accountHolder;
    }

    public double getBalance() {
        return balance;
    }
}

public class person {
    public static void main(String[] args) {

        BankAccount account = new BankAccount();

        account.setAccountHolder("Prasanth");
        account.deposit(1200);

        System.out.println("Account Holder: " + account.getAccountHolder());
        System.out.println("Balance: " + account.getBalance());
    }
}
