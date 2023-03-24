package Homework.Homework_02;

public class Exercise_4 {
    public static void main(String[] args) {
		C2F(5);
		F2C(5);
	}
	static void C2F(double c) {
		double formula=(c * (9.0/5.0)) + 32.0;
		System.out.println(c + " Celcius = "+formula+" Farenheit");
	}
	static void F2C(int f) {
		double formula=(f-32.0)*5.0/9.0;
		System.out.println(f+" Farenheit = "+formula+" Celcius");
	}
}
