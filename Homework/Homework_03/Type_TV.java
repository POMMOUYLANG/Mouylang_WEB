package Homework.Homework_03;

public class Type_TV {
    int ID_TV;
	String Name_TV;
	String Color_TV;
	String Size_TV;
	
	void Insert(int I, String N,String C, String S) {
		ID_TV = I;
		Name_TV = N;
		Color_TV = C;
		Size_TV = S;
	}
	void Display() {
		System.out.println(ID_TV+" "+Name_TV+" "+Color_TV+" "+Size_TV+" ");
    }
}
