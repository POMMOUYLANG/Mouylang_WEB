package Homework.Homework_01;
import java.util.Scanner;
public class Exercise_5 {
    public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		System.out.println("Enter Number: ");
		int n = scanner.nextInt();
		int fact = 1;
		for(int i=1; i<=n; i++) {
			fact = fact * i;
		}
		System.out.println("The factoiral: "+n+ "! = " +fact);
	}
}
