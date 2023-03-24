package Homework.Homework_04;
import java.util.Formatter;
import java.util.Scanner;

public class Student {
    // 3 properties
	private String name, major;
	private String gender;
	private int year;
    
	// 2 constructor
	// no parameter
	
	Student(Student st){
		name = st.name;
		major = st.major;
		gender = st.gender;
		year = st.year;
	}
	// 4 parameters such as name, gender, year ,major
	Student(String name, String gender, int year, String major){
		this.name   =  name;
		this.gender = gender;
		this.year   = year;
		this.major  = major;
	}
	
	// 2 method
	void display() {
		
		Formatter fmt = new Formatter();  
		
		System.out.println("\n");
		System.out.format("%15s %15s %15s %15s",name,gender,year,major);
		
//		System.out.println("Name: " + name);
//	    System.out.println("Gender: " + gender);
//	    System.out.println("Year: " + year);
//	    System.out.println("Major: " + major);
	}
	
	void update_major(String new_major) {
		major = new_major;
	}
	
	
	public static void main(String[] args) {
		 // Create 20 objects of Student class
	      Student s1 = new Student("John", "Male", 2020, "Computer Science");
	      Student s2 = new Student("Jane", "Female", 2020, "Mathematics");
	      Student s3 = new Student("Tom", "Male", 2021, "Physics");
	      Student s4 = new Student("Emily", "Female", 2021, "Chemistry");
	      Student s5 = new Student("Michael", "Male", 2022, "Biology");
	      Student s6 = new Student("Sarah", "Female", 2022, "History");
	      Student s7 = new Student("David", "Male", 2023, "English");
	      Student s8 = new Student("Jennifer", "Female", 2023, "Literature");
	      Student s9 = new Student("William", "Male", 2024, "Geography");
	      Student s10 = new Student("Elizabeth", "Female", 2024, "Economics");
	      Student s11 = new Student("James", "Male", 2025, "Political Science");
	      Student s12 = new Student("Ava", "Female", 2025, "Psychology");
	      Student s13 = new Student("Alexander", "Male", 2026, "Sociology");
	      Student s14 = new Student("Isabella", "Female", 2026, "Philosophy");
	      Student s15 = new Student("Daniel", "Male", 2027, "Environmental Science");
	      Student s16 = new Student("Sophia", "Female", 2027, "Business");
	      Student s17 = new Student("Matthew", "Male", 2028, "Art");
	      Student s18 = new Student("Mia", "Female", 2028, "Music");
	      Student s19 = new Student("Ryan", "Male", 2029, "Journalism");
	      Student s20 = new Student("Madison", "Female", 2029, "Public Relations");
          
	      Scanner sc = new Scanner(System.in);
	      
	      
	      while(1>0) {
//	    	  s1.display();
//		      s1.update_major("Information and Communication Engineering");
//		      s1.display();
		      
		      System.out.println("\n\n=========================Menu=================");
		      System.out.println("1.Display Information of Student.             ");
		      System.out.println("2.Update major of Studend.                    ");
		      System.out.print("\tChoose option: ");
		      int num = sc.nextInt();
		      
		      if(num==1) {
		    	  System.out.print("Display Student(1-20) and another number display all student: ");
		    	  int num1 = sc.nextInt();
		    	  if(num1==1) {
		    		  System.out.format("%15s %15s %15s %15s", "*Name*","*Gender*","*Year*","*Major*");
		    		  s1.display();
		    	  }else if(num1==2){
		    		  System.out.format("%15s %15s %15s %15s", "*Name*","*Gender*","*Year*","*Major*");
		    		  s2.display();
		    	  }else if(num1==3){
		    		  System.out.format("%15s %15s %15s %15s", "*Name*","*Gender*","*Year*","*Major*");
		    		  s3.display();
		    	  }else if(num1==4) {
		    		  System.out.format("%15s %15s %15s %15s", "*Name*","*Gender*","*Year*","*Major*");
		    		  s4.display();
		    	  }else if(num1==5) {
		    		  System.out.format("%15s %15s %15s %15s", "*Name*","*Gender*","*Year*","*Major*");
		    		  s5.display();
		    	  }else if(num1==6) {
		    		  System.out.format("%15s %15s %15s %15s", "*Name*","*Gender*","*Year*","*Major*");
		    		  s6.display();
		    	  }else if(num1==7) {
		    		  System.out.format("%15s %15s %15s %15s", "*Name*","*Gender*","*Year*","*Major*");
		    		  s7.display();
		    	  }else if(num1==8) {
		    		  System.out.format("%15s %15s %15s %15s", "*Name*","*Gender*","*Year*","*Major*");
		    		  s8.display();
		    	  }else if(num1==9) {
		    		  System.out.format("%15s %15s %15s %15s", "*Name*","*Gender*","*Year*","*Major*");
		    		  s9.display();
		    	  }else if(num1==10) {
		    		  System.out.format("%15s %15s %15s %15s", "*Name*","*Gender*","*Year*","*Major*");
		    		  s10.display();
		    	  }else if(num1==11) {
		    		  System.out.format("%15s %15s %15s %15s", "*Name*","*Gender*","*Year*","*Major*");
		    		  s11.display();
		    	  }else if(num1==12) {
		    		  System.out.format("%15s %15s %15s %15s", "*Name*","*Gender*","*Year*","*Major*");
		    		  s12.display();
		    	  }else if(num1==13) {
		    		  System.out.format("%15s %15s %15s %15s", "*Name*","*Gender*","*Year*","*Major*");
		    		  s13.display();
		    	  }else if(num1==14) {
		    		  System.out.format("%15s %15s %15s %15s", "*Name*","*Gender*","*Year*","*Major*");
		    		  s14.display();
		    	  }else if(num1==15) {
		    		  System.out.format("%15s %15s %15s %15s", "*Name*","*Gender*","*Year*","*Major*");
		    		  s15.display();
		    	  }else if(num1==16) {
		    		  System.out.format("%15s %15s %15s %15s", "*Name*","*Gender*","*Year*","*Major*");
		    		  s16.display();
		    	  }else if(num1==17) {
		    		  System.out.format("%15s %15s %15s %15s", "*Name*","*Gender*","*Year*","*Major*");
		    		  s17.display();
		    	  }else if(num1==18) {
		    		  System.out.format("%15s %15s %15s %15s", "*Name*","*Gender*","*Year*","*Major*");
		    		  s18.display();
		    	  }else if(num==19) {
		    		  System.out.format("%15s %15s %15s %15s", "*Name*","*Gender*","*Year*","*Major*");
		    		  s19.display();
		    	  }else if(num1==20) {
		    		  System.out.format("%15s %15s %15s %15s", "*Name*","*Gender*","*Year*","*Major*");
		    		  s20.display();
		    	  }else {
		    		  System.out.format("%15s %15s %15s %15s", "*Name*","*Gender*","*Year*","*Major*");
			    	  s1.display();
			    	  s2.display();
			    	  s3.display();
			    	  s4.display();
			    	  s5.display();
			    	  s6.display();
			    	  s7.display();
			    	  s8.display();
			    	  s9.display();
			    	  s10.display();
			    	  s11.display();
			    	  s12.display();
			    	  s13.display();
			    	  s14.display();
			    	  s15.display();
			    	  s16.display();
			    	  s17.display();
			    	  s18.display();
			    	  s19.display();
			    	  s20.display();  
		    	  }
		      }else if(num==2) {
		    	  System.out.println("Update major student: ");
		    	  int num2 = sc.nextInt();
		    	  
		    	  System.out.println("Enter major for update: ");
		    	  String update = sc.next();
		    	  if(num2==1) {
		    		  s1.update_major(update);
		    	  }else if(num2==2) {
		    		  s2.update_major(update);
		    	  }else if(num2==3) {
		    		  s3.update_major(update);
		    	  }else if(num2==4) {
		    		  s4.update_major(update);
		    	  }else if(num2==5) {
		    		  s5.update_major(update);
		    	  }else if(num2==6) {
		    		  s6.update_major(update);
		    	  }else if(num2==7) {
		    		  s7.update_major(update);
		    	  }else if(num2==8) {
		    		  s8.update_major(update);
		    	  }else if(num2==9) {
		    		  s9.update_major(update);
		    	  }else if(num2==10) {
		    		  s10.update_major(update);
		    	  }else if(num2==11) {
		    		  s11.update_major(update);
		    	  }else if(num2==12) {
		    		  s12.update_major(update);
		    	  }else if(num2==13) {
		    		  s13.update_major(update);
		    	  }else if(num2==14) {
		    		  s14.update_major(update);
		    	  }else if(num2==15) {
		    		  s15.update_major(update);
		    	  }else if(num2==16) {
		    		  s16.update_major(update);
		    	  }else if(num2==17) {
		    		  s17.update_major(update);
		    	  }else if(num2==18) {
		    		  s18.update_major(update);
		    	  }else if(num2==19) {
		    		  s19.update_major(update);
		    	  }else if(num2==20) {
		    		  s20.update_major(update);
		    	  }
		      }
	      }
	}
 }
