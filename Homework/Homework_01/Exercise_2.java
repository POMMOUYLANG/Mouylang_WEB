package Homework.Homework_01;
import java.util.Scanner;
public class Exercise_2 {
    public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		System.out.println("Enter n: ");
		int n = scanner.nextInt();
		double y,z,sq;
		sq = Math.sqrt(n*n - 4*n);
		y = sq;
		z = (-n + sq)/(2*n);
		System.out.println("Y = "+y);
		System.out.println("Z = "+z);
	}
}
