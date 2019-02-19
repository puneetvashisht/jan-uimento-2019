package springdemo;

public class A {
	
	B b;  //= new B();
	
	
	public A(){
		
	}
	public A(B b){
		this.b =  b;
	}
	
	
	public void execute(){
		b.execute();
		System.out.println("Execute in A");
	}

}
