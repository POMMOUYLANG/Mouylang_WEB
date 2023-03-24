package Homework.Homework_03;
import java.util.Scanner;
public class Exercise_3 {
    public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int i,j;
		int s = 0;
		System.out.println("The number 1 to n is prime");
		System.out.print("Input n: ");
		int n = sc.nextInt();
		for(j=2;j<=n;j++) {
			for(i=2; i<j;i++) {
				if(j%i==0) {
					break;
				}
			}
			if(i==j) {
				System.out.print(i+" ");
				s = s + i;
			}
		}
	}
}
