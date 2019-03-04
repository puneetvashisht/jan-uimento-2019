package springdemo;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.springframework.stereotype.Component;

@Component
@Aspect
public class LoggingAspect {
	
	
	@Before("execution(void execute(*))")
	public void doLog(JoinPoint jp){
		
		
		Object[] args = jp.getArgs();
		
		for(Object arg: args)
		{
			System.out.println(arg);
		}
		System.out.println("Test.. aspect stuff");
		System.out.println("Execute in " + jp.getTarget());
	}

}
