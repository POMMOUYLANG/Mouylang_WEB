package Homework.Homework_02;
import java.util.Random;
public class Exercise_1 {
    public static void main(String[] args) {
		int sum=0;
		Random r= new Random();
		for(int i=0; i<=50; i++) {
			int num = r.nextInt(50);
			System.out.println("Random Number"+i+":"+num);
			sum += num;
			
		}
		System.out.println("Sum of Generated 50 Random Number: "+sum);
		
	}
}
