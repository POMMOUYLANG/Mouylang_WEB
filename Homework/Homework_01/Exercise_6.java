package Homework.Homework_01;
import java.util.Scanner;
public class Exercise_6 {
    public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		while(3>0) {
			System.out.print("Enter n: ");
			int n = scanner.nextInt();
			int count = 0;
			for(int i=1; i<=n; i++) {
				if(n % i == 0) {
					count++;
				}
			}
			if(count == 2) {
				System.out.println("Prime");
			}else {
				System.out.println("Not Prime");
			}
		}
	}
}
