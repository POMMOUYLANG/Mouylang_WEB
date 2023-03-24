package Homework.Homework_02;
import java.util.Scanner;
public class Exercise_3 {
    public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int k;
		System.out.println("Input K: ");
		k = sc.nextInt();
		for(int i=0; i<=10*k; i++) {
			if(i!=30 && i!=20 && i!=40 && i!=50) {
				System.out.println(i+" ");
			}
		}
	}
}
