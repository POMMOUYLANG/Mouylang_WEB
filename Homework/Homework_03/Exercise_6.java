package Homework.Homework_03;

public class Exercise_6 {
    public static void main(String[] args) {
		Type_Car car1 = new Type_Car();
		Type_Car car2 = new Type_Car();
		Type_Car car3 = new Type_Car();
		Type_Car car4 = new Type_Car();
		Type_Car car5 = new Type_Car();
		Type_Car car6 = new Type_Car();
		
		car1.Insert(2023, "BMW", "RED", "7-March-1916");
		car2.Insert(2023, "FORT", "WHITE", "16-January-2000");
		car3.Insert(2023, "TOYOTA", "BLACK", "11-February-2001");
		car4.Insert(2023, "MAZDA", "RED", "23-April-2004");
		car5.Insert(2023, "ROLLS ROYCE", "BLACK", "12-December-2002");
		car6.Insert(2023, "HONDA", "WHITE", "12-October-2002");
	
		car1.Display();
		car2.Display();
		car3.Display();
		car4.Display();
		car5.Display();
		car6.Display();
	}
}
