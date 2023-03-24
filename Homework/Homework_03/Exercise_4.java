package Homework.Homework_03;
import java.util.Scanner;
public class Exercise_4 {
    public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.print("Input n: ");
		int n = sc.nextInt();
		int arr[] = new int[n];

		System.out.print("Enter number :");
		for(int i=0; i<arr.length; i++) {
			arr[i] = sc.nextInt();
		}
		int min = arr[0];
		int max = arr[0];
		for(int i=0; i<arr.length; i++) {
			if(min>arr[i]) {
				min = arr[i];
			}else if(max<arr[i]) {
				max = arr[i];
			}
		}
		System.out.println("=> Largest : "+max);
		System.out.println("=> Smallest: "+min);
	}	
}
