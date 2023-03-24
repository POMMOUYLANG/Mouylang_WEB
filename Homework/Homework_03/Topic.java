package Homework.Homework_03;

public class Topic {
    int ID;
    String Title;
    String Position;
    
    void Insert (int i,String t,String p) {
            ID = i;
            Title = t;
            Position = p;
    }
    void Display() {
        System.out.println(ID + " " + Title + " " + Position + " ");
    }
}
