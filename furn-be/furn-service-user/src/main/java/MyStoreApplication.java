import lombok.extern.log4j.Log4j2;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.event.EventListener;
import org.springframework.core.env.Environment;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@Log4j2
@Configuration
@SpringBootApplication
@ComponentScan(basePackages = { "com.dm.common", "com.dm.common.rds", "com.dm.service.user" })
@EnableJpaRepositories("com.dm.common.rds.repository")
@EntityScan(basePackages = { "com.dm.common.entity" })
public class MyStoreApplication {

    @Autowired
    private Environment env;

    public static void main(String[] args) {
        SpringApplication.run(MyStoreApplication.class, args);
    }

    @EventListener(ApplicationReadyEvent.class)
    public void afterStartUp() {
        log.info("==================================================");
        log.info(">>>>> Fun-chat operation is running");
        log.info(">>>>> Context    	: " + env.getProperty("server.servlet.context-path"));
        log.info(">>>>> Environment	: " + env.getProperty("spring.profiles.active"));
        log.info(">>>>> Port       	: " + env.getProperty("server.port"));
        log.info("==================================================");
    }

}
