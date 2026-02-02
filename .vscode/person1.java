//Inheritance
 class person1{
    void displayPerson() {
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
    }

    String name;
    int age;
}

class Student extends person1   {

    void displayStudent() {
        System.out.println("Roll No: " + rollNo);
    }

    int rollNo;
}

public class Person {
    public static void main(String[] args) {

        Student s = new Student();

        s.name = "Prasanth";
        s.age = 23;
        s.rollNo = 101;

        s.displayPerson();
        s.displayStudent();
    }
}
