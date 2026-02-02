// Abstract class
abstract class Person {
    abstract void role();

    void introduce() {
        System.out.println("Hello, I am a person");
    }
}

class Student extends Person {

    @Override
    void role() {
        System.out.println("My role is Student");
    }
}

class Teacher extends Person {

    @Override
    void role() {
        System.out.println("My role is Teacher");
    }
}

public class Demo
{
    public static void main(String[] args) {

        Person p1 = new Student();
        Person p2 = new Teacher();
        p1.introduce();
        p1.role();

        System.out.println("-----");

        
        p2.introduce();
        p2.role();
    }
}
