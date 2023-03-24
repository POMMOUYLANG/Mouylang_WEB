package Homework.Homework_03;

public class Exercise_5 {
    public static void main(String[] args) {
		Topic T1 = new Topic();
		Topic T2 = new Topic();
		Topic T3 = new Topic();
		
		T1.Insert(201,"Tom&Jerry","USA");
		T2.Insert(202,"AVATAR","USA");
		T3.Insert(203,"F4","KOREA");
		
		T1.Display();
		T2.Display();
		T3.Display();
	}
}
