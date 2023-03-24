package Homework.Homework_01;
import  java.util.Scanner;
public class Exercise_4 {
    public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		System.out.println("Enter Number: ");
		int n = scanner.nextInt();
		int Sum = 0;
		for(int i = 1; i<= n; i++) {
			System.out.print(i);
			Sum = Sum + i;
			if(i==n) {
				System.out.print(" = ");
			}else {
				System.out.print(" + ");
			}
			
		}
		System.out.print(Sum);
		System.out.println("\nThe summation:"+Sum);
	}
}
