package Homework.Homework_03;

public class Type_Car {
    int ID_car;
	String Name_car;
	String Color_car;
	String Birth_car;
	
	void Insert(int I, String N,String C, String B) {
		ID_car = I;
		Name_car = N;
		Color_car = C;
		Birth_car = B;
	}
	void Display() {
		System.out.println(ID_car+" "+Name_car+" "+Color_car+" "+Birth_car+" ");
//		System.out.print(" "+ID_car);
//		System.out.print(" "+Name_car);
//		System.out.print(" "+Color_car);
//		System.out.print(" "+Birth_car);
//		System.out.println();
    }
}

