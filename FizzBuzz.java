package com.weekB;

public class FizzBuzz {

	public static void fizzBuzz1() {
		for (int index=1; index<=100; index++) {
			if(index % 15 == 0) {
				System.out.println("fizzbuzz");
			}
			else if(index % 3 == 0) {
				System.out.println("fizz");
			}
			else if (index % 5 == 0) {
				System.out.println("buzz");
			}
			else {
			System.out.println(index);
			}
		}
	}
	
	public static void fizzBuzz2(int m, int n) {
		if (m<=n) {
			for (m=m; m<=n; m++) {
				if (m % 15 == 0) {
					System.out.println("fizzbuzz");
				}
				else if (m % 3 == 0) {
					System.out.println("fizz");
				}
				else if (m % 5 == 0) {
					System.out.println("buzz");
				}
				else {
					System.out.println(m);
				}
			}
		}
		else {
			System.out.println("Please make sure the first integer parameter is less than or equal to the second integer parameter");
		}	
	}
	
	public static void fizzBuzz3(int m, int n, int fizzNum, int buzzNum) {
		if (m<=n) {
			for (m=m; m<=n; m++) {
				if ((m % fizzNum == 0)&&(m % buzzNum == 0)) {
					System.out.println("fizzbuzz");
				}
				else if (m % fizzNum == 0) {
					System.out.println("fizz");
				}
				else if (m % buzzNum == 0) {
					System.out.println("buzz");
				}
				else {
					System.out.println(m);
				}
			}
		}
		else {
			System.out.println("Please check the parameters to ensure that the first integer parameter is less than or equal to the second integer parameter");
		}
	}
	
	public static void fizzBuzz4(int m, int n, int[] numbers, String [] terms) {
		if (numbers.length == terms.length) {
			for (int counter=m; m<=n; m++) {
				for (int index = 0; index<numbers.length; index++) {
					if (m % numbers[index] == 0) {
						System.out.println(terms[index]);
						
					}
					else {
						System.out.println(m);
					}	
				}
			}
		}
		else {
			System.out.println("Please check the parameters to ensure that the same number of terms are entered for both the integer and the string array");
		}
		
	}
	
	
}


