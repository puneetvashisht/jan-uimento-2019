package springdemo;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.config.BeanPostProcessor;
import org.springframework.stereotype.Component;

//@Component
public class MyBeanPostProcessor implements BeanPostProcessor {
	public Object postProcessBeforeInitialization(Object bean, String beanName) throws BeansException{
		
		System.out.println("Modify bean " + beanName);
		
		if(beanName.equals("a")){
			A a = (A) bean;
			System.out.println(a);
		}
		
		return bean;
	}
}
