package springdemo;

import org.springframework.beans.BeansException;
import org.springframework.beans.factory.config.BeanFactoryPostProcessor;
import org.springframework.beans.factory.config.ConfigurableListableBeanFactory;
import org.springframework.stereotype.Component;

//import org.springframework.beans.factory.config.BeanFactoryProcessor;

@Component
public class MyBeanFactoryProcessor implements BeanFactoryPostProcessor{

	public void postProcessBeanFactory(ConfigurableListableBeanFactory beanFactory) throws BeansException {
		System.out.println("Bean Factory Post Processor....");
		
		String names[] = beanFactory.getBeanDefinitionNames();
		for(String name : names){
			
			System.out.println("Bean name: " + name);
		}
		
	}

}
