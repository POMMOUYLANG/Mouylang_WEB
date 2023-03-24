package Homework.Homework_02;
import java.util.Scanner;
public class Exercise_2 {
    public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int n,m;
		System.out.println("Input n: ");
		n = sc.nextInt();
		System.out.println("Input m: ");
		m = sc.nextInt();
		for(int i=n; i<=m; i++) {
			if(i%2==0)
				System.out.println(i+" ");
		}
	}
}
