package Homework.Homework_03;
import java.util.Scanner;
public class Exercise_2 {
    public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		double A,C,R;
		double pi = 3.14;
		System.out.println("**Find the Area and Circunference of circles**");
		System.out.print("Input R: ");
		R = sc.nextDouble();
		A = pi*R*R;
		C = 2*pi*R;
		System.out.println("=> Area : "+A);
		System.out.println("=> Circumference : "+C);
	}
}
