package Homework.Homework_01;
import java.util.Scanner;
public class Exercise_7 {
    public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		System.out.print("Enter n: ");
		int n = scanner.nextInt();
		int sum = 0,num;
		for(int i=1; i<=n; i++) {
			num = scanner.nextInt();
			sum = sum + num;
		}
		System.out.println("The sum : "+sum);
	} 
}
