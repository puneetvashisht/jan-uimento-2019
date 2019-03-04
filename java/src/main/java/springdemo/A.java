package springdemo;

import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class A {
	
	@Autowired
	B b;  //= new B();
	
	@PostConstruct
	public void init(){
		System.out.println("Init here...");
	}
	
	public A(){
		
	}
//	public A(B b){
//		this.b =  b;
//	}
	
	
	public void execute(){
		b.execute(32);
//		System.out.println("Execute in A");
	}

}
