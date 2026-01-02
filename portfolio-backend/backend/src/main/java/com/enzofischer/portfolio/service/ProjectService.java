package com.enzofischer.portfolio.service;

import com.enzofischer.portfolio.model.Project;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectService {

    public List<Project> getProjects() {
        return List.of(
                new Project(
                        "Salesforce GPON Flow",
                        "Customer service automation using LWC and OmniStudio",
                        "Salesforce, LWC, Apex, OmniStudio"
                ),
                new Project(
                        "Legacy to Salesforce Integration",
                        "Data integration between legacy systems and Salesforce",
                        "Java, Spring Boot, REST APIs"
                )
        );
    }
}
