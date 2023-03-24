package Homework.Homework_01;
import java.util.Scanner;
public class Exercise_1 {
    public static void main(String[] args) {
            Scanner scanner = new Scanner(System.in);
            System.out.println("Enter Name:");
            String name = scanner.nextLine();
            System.out.println("Enter Year of birth:");
            int dob = scanner.nextInt();
            int age;
            age = 2023 - dob;
            System.out.println("Hi,"+name+" You are "+age+" years old.");
    }
}
