package Homework.Homework_04;
import java.util.HashMap;
import java.util.Scanner;

public class Exercise_1 {
    public static void main(String[] args) {
		
		HashMap<String, String> dictionary = new HashMap<String, String>();
		
		dictionary.put("Class","The code describing a particular entity in the application, such as Customer, Order, or Address. The class contains the code defining the properties and methods (see below).");
		dictionary.put("Property", "The code defining the data managed by the class, such as CustomerName, OrderNumber, or EmailAddress.");
		dictionary.put("Method", "The code defining the actions or behaviors of the class, such as Validate or CalculateTotal. Methods are defined in the code with C# functions.");
		//System.out.println(dictionary);
		
		Scanner sc = new Scanner(System.in);
		int num;
		while(1>0) {
			System.out.println("=======================Menu========================");
		    System.out.println("\t1.Add new word                                   ");
			System.out.println("\t2.Search word                                    ");
			System.out.println("\t3.Update definiton                               ");
			System.out.println("\t4.Delete word                                    ");
			System.out.println("\t5.Display Dictionary                             ");
			System.out.print("\t\t Choose option 1-4: ");
			num = sc.nextInt();
			
			if(num == 1) {

				System.out.print("Enter word: ");
				String word = sc.next();
				System.out.print("Enter value: ");
				String value = sc.next();
				
				dictionary.put(word, value);
				dictionary.putAll(dictionary);
				//System.out.println(dictionary);
			}else if(num==2) {
				 
				// search word or read word or find definition
				System.out.print("Search: ");
				String search = sc.next();
				
				if(dictionary.containsKey(search)) {
					String value1 = dictionary.getOrDefault(search, "Not Found");
			        System.out.println(search+"=" + value1);
			        System.out.println("\n\n");
				}
			}else if(num==3){
				// update with key func.replace() by update definition or value
				// not yet update key or word
				System.out.print("Enter word for update definition: ");
				String word_update = sc.next();
				System.out.print("Enter new difiniton of "+word_update+": ");
				String new_update_def = sc.next();
				
				if(dictionary.containsKey(word_update)) {
					String word_update1 = dictionary.replace(word_update, new_update_def);
					System.out.println("updated dictionary get: "+dictionary+"\n\n");
				}
			}else if(num==4) {
				//remove data using func.remove()
				
				System.out.println("Delete word: ");
				String delete_word = sc.next();
				
				if(dictionary.containsKey(delete_word)) {
					dictionary.remove(delete_word);
					System.out.println("Dictionary after delete: "+dictionary+"\n\n");
				}
			}else {
				System.out.println(dictionary);
				System.out.println("\n\n");
			}
		}
	}
}
