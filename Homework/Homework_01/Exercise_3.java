package Homework.Homework_01;
import java.util.Scanner;
public class Exercise_3 {
    public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		double a,b,c;
		System.out.println("Enter a: ");
		a = scanner.nextFloat();
		System.out.println("Enter b: ");
		b = scanner.nextFloat();
		System.out.println("Enter c: ");
		c = scanner.nextFloat();
		double delta;
		delta = (b*b) - 4*a*c;
		double x1,x2,x3,x4,x5;
		double s = Math.sqrt(delta);
		x1 = (-b)/(2*a);
	    x2 = (-b - s)/(2*a);
	    x3 = (-b + s)/(2*a);
	    if(delta == 0) {
	    	System.out.println("=>The root are double root: X1 = X2 "+x1);
	    }else if(delta >= 0) {
	    	System.out.println("=>The root are two root: X1 = "+x2+" & X2 = "+x3);
	    }else {
	    	System.out.println("It is root complex.");
	    }
	}
}
