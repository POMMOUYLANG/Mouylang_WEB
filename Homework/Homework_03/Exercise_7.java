package Homework.Homework_03;

public class Exercise_7 {
    public static void main(String[] args) {
		Type_TV TV1 = new Type_TV();
		Type_TV TV2 = new Type_TV();
		Type_TV TV3 = new Type_TV();
		Type_TV TV4 = new Type_TV();
		Type_TV TV5 = new Type_TV();
		
		TV1.Insert(2023, "LG", "BLACK", "32Inch");
		TV2.Insert(2023, "SANGSUNG", "BLACK", "52Inch");
		TV3.Insert(2023, "SONY", "BLACK", "32Inch");
		TV4.Insert(2023, "PANASONIC", "BLACK", "52Inch");
		TV5.Insert(2023, "JVC", "BLACK", "32Inch");
		
		TV1.Display();
		TV2.Display();
		TV3.Display();
		TV4.Display();
		TV5.Display();
	}
}
