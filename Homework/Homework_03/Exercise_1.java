package Homework.Homework_03;
import java.util.Scanner;
public class Exercise_1 {
    public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Find the area of a triangle");
		double a,b,c,s;
		double A,x,y,z;
		System.out.print("Input a: ");
		a = sc.nextDouble();
		System.out.print("Input b: ");
		b = sc.nextDouble();
		System.out.print("Input c: ");
		c = sc.nextDouble();
		s = (a+b+c)/2;
		x = (s-a);
		y = (s-b);
		z = (s-c);
		A = Math.sqrt(s*x*y*z);
		System.out.print("=> A : "+A );
	}
}
